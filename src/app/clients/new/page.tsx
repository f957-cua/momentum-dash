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
    <div className="w-6/12 mx-auto">
      <h1 className="text-center font-bold py-8">Create new Client</h1>
      <ClientForm action={createClient} />
    </div>
  );

  // return (
  //   <div className="max-w-2xl mx-auto p-4">
  //     <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
  //     <Form action={createPost} className="space-y-6">
  //       <div>
  //         <label htmlFor="name" className="block text-lg mb-2">
  //           Client publish Name
  //         </label>
  //         <input
  //           type="text"
  //           id="name"
  //           name="name"
  //           placeholder="Enter client publish name"
  //           className="w-full px-4 py-2 border rounded-lg"
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="email" className="block text-lg mb-2">
  //           Client publish email
  //         </label>
  //         <input
  //           type="text"
  //           id="email"
  //           name="email"
  //           placeholder="Enter client publish email"
  //           className="w-full px-4 py-2 border rounded-lg"
  //         />
  //       </div>
  //       <button
  //         type="submit"
  //         className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
  //       >
  //         Create Client
  //       </button>
  //     </Form>
  //   </div>
  // );
}

export default ClientAdd;
