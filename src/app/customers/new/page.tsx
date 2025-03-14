import React from "react";
import CustomerForm from "@/src/components/customer/CustomerForm";

import { db } from "@/src/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { CustomerFormType } from "@/src/schema/customer";

async function CustomerAdd({
  searchParams,
}: {
  searchParams?: Promise<{ clientId: string }>;
}) {
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

  const params = await searchParams;
  const clientId = params?.clientId;

  const client = await db.client.findUnique({
    where: {
      id: clientId ?? "",
    },
  });

  if (client === null) {
    <div className="h-full flex justify-center items-center">
      The Database is revalidate now, or maybe current client updating now.
    </div>;
  }

  async function createCustomer(formData: CustomerFormType) {
    "use server";

    const name = formData.name;

    if (!name || !clientId) {
      throw new Error("Please fill out all fields.");
    }

    try {
      await db.customer.create({
        data: {
          name,
          clientId,
          sbpmId: sbpmWorker?.id ?? "",
        },
      });
    } catch (error) {
      console.error("Error adding customer to prisma: ", error);
    }

    revalidatePath("/customers");
    redirect(`/clients/${clientId}`);
  }

  const clients = await db.client.findMany();

  if (!clients.length) {
    return (
      <div className="h-full flex justify-center items-center">
        Add at least one client firstly
      </div>
    );
  }

  const HEADER_TEXT = `Create new Customer for ${client?.name}`;

  return (
    <div className="w-[600px] mx-auto">
      <h1 className="text-center font-bold py-8">{HEADER_TEXT}</h1>
      <CustomerForm action={createCustomer} clientList={clients} />
    </div>
  );
}

export default CustomerAdd;
