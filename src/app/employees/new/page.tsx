import React from "react";
import EmployeeForm from "@/components/employee/EmployeeForm";
import { Employee } from "@prisma/client";

import { db } from "@/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function ClientAdd() {
  async function createEmployee(formData: Employee) {
    "use server";

    const first_name = formData.first_name;
    const last_name = formData.last_name;
    const customer_id = formData.customer_id;

    if (!first_name || !last_name || !customer_id) {
      throw new Error("Please fill out all fields.");
    }

    try {
      await db.employee.create({
        data: {
          first_name,
          last_name,
          customer_id,
        },
      });
    } catch (error) {
      console.error("Error adding client to prisma: ", error);
    }

    revalidatePath("/employees");
    redirect("/employees");
  }

  const customers = await db.customer.findMany();

  if (!customers.length) {
    return <div className="text-center">Add at least one customer firstly</div>;
  }

  return (
    <div className="w-6/12 mx-auto">
      <h1 className="text-center font-bold py-8">Create new Employee</h1>
      <EmployeeForm action={createEmployee} customerList={customers} />
    </div>
  );
}

export default ClientAdd;
