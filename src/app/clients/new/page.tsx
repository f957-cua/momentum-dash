import React from "react";
import ClientForm from "@/components/client/ClientForm";
import { Client } from "@prisma/client";

import { db } from "@/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function ClientAdd() {
  async function createClient(formData: Client) {
    "use server";

    const name = formData.name;
    const email = formData.email;

    if (!name || !email) {
      throw new Error("Please fill out all fields.");
    }
    // Create the post using Prisma
    try {
      await db.client.create({
        data: {
          name,
          email,
        },
      });
    } catch (error) {
      console.error("Error adding client to prisma: ", error);
    }

    revalidatePath("/clients");
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
