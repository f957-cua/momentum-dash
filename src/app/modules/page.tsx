import { db } from "@/shared/lib/db";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function Modules() {
  const data = await db.module.findMany({
    include: {
      client: true,
      employee: true,
    },
  });

  return (
    <div className="container mx-auto py-10">
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default Modules;
