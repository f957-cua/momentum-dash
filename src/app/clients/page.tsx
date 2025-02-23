import React from "react";
import { db } from "@/shared/lib/db";

import { columns } from "./columns";
import { DataTable } from "@/shared/ui/data-table";

async function Clients() {
  const data = await db.client.findMany();

  return (
    <div className="container mx-auto py-10 px-10">
      <h1 className="text-center font-bold py-8">Clients Datalist</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default Clients;
