import React from "react";
import ModuleForm from "@/components/module/ModuleForm";
import { Module, ModuleStatus } from "@prisma/client";

import { db } from "@/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function ModuleAdd() {
  const clients = await db.client.findMany();

  const employees = await db.employee.findMany();

  if (!clients || !employees) {
    return (
      <div>Create the client and the employee to attach the module to</div>
    );
  }

  async function createModule(formData: Module) {
    "use server";

    const name = formData.name;
    const client_id = formData.client_id;
    const employee_id = formData.employee_id;
    const duration = formData.duration;
    const notes = formData.notes;

    if (!name || !client_id || !employee_id || !duration) {
      throw new Error("Please fill out all fields.");
    }
    // Create the post using Prisma
    try {
      const res = await db.module.create({
        data: {
          name,
          client_id,
          employee_id,
          duration,
          notes,
          status: ModuleStatus.PENDING,
        },
        include: {
          client: true,
          employee: true,
        },
      });
      console.log("Module created: ", res);
    } catch (error) {
      console.error("Error adding client to prisma: ", error);
    }

    revalidatePath("/modules");
    redirect("/modules");
  }

  return (
    <div className="w-6/12 mx-auto">
      <h1 className="text-center font-bold py-8">Create new Module</h1>
      <ModuleForm
        action={createModule}
        clients={clients}
        employees={employees}
      />
    </div>
  );
}

export default ModuleAdd;
