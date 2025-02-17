import React from "react";
import { db } from "@/shared/lib/db";

import { columns } from "./columns";
import { DataTable } from "./data-table";

async function Clients() {
  const data = await db.client.findMany();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default Clients;
