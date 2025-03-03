import React from "react";
import EmployeeForm from "@/src/components/employee/EmployeeForm";
import { EmployeeType } from "@/src/schema/employee";

import { db } from "@/src/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function ClientAdd() {
  const cookieHandler = await cookies();
  const cookiesExist = cookieHandler.has("sbpmId");
  const sbpmId = cookiesExist ? cookieHandler.get("sbpmId") : null;

  const sbpmWorker = await db.sbpm.findUnique({
    where: {
      id: sbpmId?.value ?? "",
    },
  });

  if (sbpmWorker === null) {
    redirect("/");
  }

  async function createEmployee(formData: EmployeeType) {
    "use server";

    const first_name = formData.first_name;
    const last_name = formData.last_name;
    const customerId = formData.customerId;

    if (!first_name || !last_name || !customerId) {
      throw new Error("Please fill out all fields.");
    }

    const name = `${first_name} ${last_name}`;

    try {
      await db.employee.create({
        data: {
          name,
          customerId,
          sbpmId: sbpmWorker?.id ?? "",
        },
      });
    } catch (error) {
      console.error("Error adding client to prisma: ", error);
    }

    revalidatePath("/employees");
    revalidatePath("/modules/new");
    redirect("/employees");
  }

  const customers = await db.customer.findMany();

  if (!customers.length) {
    return (
      <div className="h-full flex justify-center items-center">
        Add at least one customer firstly
      </div>
    );
  }

  return (
    <div className="w-[600px] mx-auto">
      <h1 className="text-center font-bold py-8">Create new Employee</h1>
      <EmployeeForm action={createEmployee} customerList={customers} />
    </div>
  );
}

export default ClientAdd;
