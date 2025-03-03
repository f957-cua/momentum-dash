import React from "react";
import ModuleForm from "@/src/components/module/ModuleForm";
import { Module, ModuleStatus } from "@prisma/client";

import { db } from "@/src/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function ModuleAdd() {
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

  const clients = await db.client.findMany();

  const employees = await db.employee.findMany();

  if (!clients.length || !employees.length) {
    return (
      <div className="h-full flex justify-center items-center">
        Create the client and the employee to attach the module to
      </div>
    );
  }

  async function createModule(formData: Module) {
    "use server";

    const name = formData.name;
    const clientId = formData.clientId;
    const employeeId = formData.employeeId;
    const duration = formData.duration;
    const notes = formData.notes;

    if (!name || !clientId || !employeeId || !duration) {
      throw new Error("Please fill out all fields.");
    }
    // Create the post using Prisma
    try {
      await db.module.create({
        data: {
          name,
          clientId,
          employeeId,
          sbpmId: sbpmWorker?.id ?? "",
          notes,
          status: ModuleStatus.PENDING,
        },
        include: {
          client: true,
          employee: true,
        },
      });
    } catch (error) {
      console.error("Error adding client to prisma: ", error);
    }

    revalidatePath("/modules");
    redirect("/modules");
  }

  return (
    <div className="w-[600px] mx-auto">
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
