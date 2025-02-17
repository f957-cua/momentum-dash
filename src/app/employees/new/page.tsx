import React from "react";
import EmployeeForm from "@/components/employee/EmployeeForm";
import { Employee } from "@prisma/client";

import { db } from "@/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function ClientAdd() {
  async function createEmployee(formData: Employee) {
    "use server";

    const first_name = formData.first_name;
    const last_name = formData.last_name;
    const email = formData.email;

    if (!first_name || !last_name || !email) {
      throw new Error("Please fill out all fields.");
    }
    // Create the post using Prisma
    try {
      await db.employee.create({
        data: {
          first_name,
          last_name,
          email,
        },
      });
    } catch (error) {
      console.error("Error adding client to prisma: ", error);
    }

    revalidatePath("/employees");
    redirect("/employees");
  }

  return (
    <div className="w-6/12 mx-auto">
      <h1 className="text-center font-bold py-8">Create new Employee</h1>
      <EmployeeForm action={createEmployee} />
    </div>
  );
}

export default ClientAdd;
