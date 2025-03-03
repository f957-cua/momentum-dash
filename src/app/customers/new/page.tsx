import React from "react";
import CustomerForm from "@/src/components/customer/CustomerForm";
import { Customer } from "@prisma/client";

import { db } from "@/src/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function CustomerAdd() {
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

  async function createCustomer(formData: Customer) {
    "use server";

    const name = formData.name;
    const clientId = formData.clientId;

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
    revalidatePath("/employees/new");
    redirect("/customers");
  }

  const clients = await db.client.findMany();

  if (!clients.length) {
    return (
      <div className="h-full flex justify-center items-center">
        Add at least one client firstly
      </div>
    );
  }

  return (
    <div className="w-[600px] mx-auto">
      <h1 className="text-center font-bold py-8">Create new Customer</h1>
      <CustomerForm action={createCustomer} clientList={clients} />
    </div>
  );
}

export default CustomerAdd;
