import React from "react";
import { db } from "@/src/shared/lib/db";
import ClientDataList from "./ClientDataList";
import { redirect } from "next/navigation";

async function Clients() {
  const data = await db.client.findMany();

  const action = async () => {
    "use server";
    redirect(`/clients/new`);
  };

  return <ClientDataList data={data} action={action} />;
}

export default Clients;
