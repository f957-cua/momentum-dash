import React from "react";
import EmployeeForm from "@/src/components/employee/EmployeeForm";
import { EmployeeType } from "@/src/schema/employee";

import { db } from "@/src/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function EmployeeAdd({
  searchParams,
}: {
  searchParams?: Promise<{ customerId: string; clientId: string }>;
}) {
  const params = await searchParams;
  const customerId = params?.customerId;
  const clientId = params?.clientId;

  const customer = await db.customer.findUnique({
    where: {
      id: customerId ?? "",
    },
  });

  if (customer === null) {
    <div className="h-full flex justify-center items-center">
      The Database is revalidate now, or maybe current customer updating now.
    </div>;
  }

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

    if (!first_name || !last_name || !customerId || !clientId) {
      throw new Error("Please fill out all fields.");
    }

    const name = `${first_name} ${last_name}`;

    try {
      await db.employee.create({
        data: {
          name,
          clientId,
          customerId,
          sbpmId: sbpmWorker?.id ?? "",
        },
      });
    } catch (error) {
      console.error("Error adding client to prisma: ", error);
    }

    revalidatePath("/employees");
    revalidatePath(`/customers/${customerId}`);
    redirect(`/customers/${customerId}`);
  }

  const TITLE_TEXT = `Create new Employee for ${customer?.name}`;

  return (
    <div className="w-[600px] mx-auto">
      <h1 className="text-center font-bold py-8">{TITLE_TEXT}</h1>
      <EmployeeForm action={createEmployee} />
    </div>
  );
}

export default EmployeeAdd;
