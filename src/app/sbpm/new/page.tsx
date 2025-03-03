import React from "react";
import SbpmForm from "@/src/components/sbpm/SbpmForm";
import { SbpmType } from "@/src/schema/sbpm";

import { db } from "@/src/shared/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import BackDrop from "@/src/components/BackDrop";

async function SbpmAdd() {
  async function createSbpmWorker(formData: SbpmType) {
    "use server";

    const first_name = formData.first_name;
    const last_name = formData.last_name;

    if (!first_name || !last_name) {
      throw new Error("Please fill out all fields.");
    }

    const sbpmClient = await db.sbpm.create({
      data: {
        name: `${first_name} ${last_name}`,
      },
    });

    if (!sbpmClient) {
      throw new Error("Error creating SBPM client.");
    }

    revalidatePath("/employees");
    revalidatePath("/modules/new");
    redirect(`/?sbpmId=${sbpmClient.id}`);
  }

  const DIALOG_TITLE = "Hello from Momentum tally app!";
  const DIALOG_SELECT =
    "This app was created for internal use by SBPM employees. Enter your first and last name to start using the app.";

  return (
    <BackDrop>
      <h1 className="text-xl text-center font-bold py-8">{DIALOG_TITLE}</h1>
      <p>{DIALOG_SELECT}</p>
      <SbpmForm action={createSbpmWorker} />
    </BackDrop>
  );
}

export default SbpmAdd;
