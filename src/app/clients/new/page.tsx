import React from "react";
import ClientForm from "@/src/components/client/ClientForm";
import { Client } from "@prisma/client";

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

  async function createClient(formData: Client) {
    "use server";

    const name = formData.name;

    if (!name) {
      throw new Error("Please fill out all fields.");
    }
    // Create the post using Prisma
    try {
      await db.client.create({
        data: {
          name,
          sbpmId: sbpmWorker?.id ?? "",
        },
      });
    } catch (error) {
      console.error("Error adding client to prisma: ", error);
    }

    revalidatePath("/clients");
    revalidatePath("/customers/new");
    revalidatePath("/modules/new");
    redirect("/clients");
  }

  return (
    <div className="w-[600px] mx-auto">
      <h1 className="text-center font-bold py-8">Create new Client</h1>
      <ClientForm action={createClient} />
    </div>
  );
}

export default ClientAdd;
