import React from "react";
import CustomerForm from "@/components/customer/CustomerForm";
import { Customer } from "@prisma/client";

import { db } from "@/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function CustomerAdd() {
  async function createCustomer(formData: Customer) {
    "use server";

    const name = formData.name;
    const email = formData.email;
    const client_id = formData.client_id;

    if (!name || !email) {
      throw new Error("Please fill out all fields.");
    }

    try {
      await db.customer.create({
        data: {
          name,
          email,
          client_id,
        },
      });
    } catch (error) {
      console.error("Error adding customer to prisma: ", error);
    }

    revalidatePath("/customers");
    redirect("/customers");
  }

  const clients = await db.client.findMany();

  if (!clients.length) {
    return <div className="text-center">Add at least one client firstly</div>;
  }

  return (
    <div className="w-[600px] mx-auto">
      <h1 className="text-center font-bold py-8">Create new Customer</h1>
      <CustomerForm action={createCustomer} clientList={clients} />
    </div>
  );
}

export default CustomerAdd;
