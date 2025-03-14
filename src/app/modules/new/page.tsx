import React from "react";
import ModuleForm from "@/src/components/module/ModuleForm";
import { ModuleStatus } from "@prisma/client";

import { db } from "@/src/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ModuleFormDataType } from "@/src/schema/module";

async function ModuleAdd({
  searchParams,
}: {
  searchParams?: Promise<{
    clientId: string;
    customerId: string;
    employeeId: string;
  }>;
}) {
  const params = await searchParams;
  const clientId = params?.clientId;
  const customerId = params?.customerId;
  const employeeId = params?.employeeId;

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

  async function createModule(formData: ModuleFormDataType) {
    "use server";

    const name = formData.name;
    const notes = formData.notes;

    if (!name || !employeeId || !customerId || !clientId) {
      throw new Error("Please fill out all fields.");
    }
    // Create the post using Prisma
    try {
      await db.module.create({
        data: {
          name,
          employeeId,
          customerId,
          clientId,
          sbpmId: sbpmWorker?.id ?? "",
          notes,
          status: ModuleStatus.PENDING,
        },
      });
    } catch (error) {
      console.error("Error adding client to prisma: ", error);
    }

    revalidatePath("/modules");
    revalidatePath(`/employees/${employeeId}`);
    redirect(`/employees/${employeeId}`);
  }

  return (
    <div className="w-[600px] mx-auto">
      <h1 className="text-center font-bold py-8">Create new Module</h1>
      <ModuleForm action={createModule} />
    </div>
  );
}

export default ModuleAdd;
