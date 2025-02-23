import { db } from "@/shared/lib/db";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/shared/ui/data-table";

async function Modules() {
  const data = await db.module
    .findMany({
      include: {
        client: true,
        employee: true,
      },
    })
    .then((modules) =>
      modules.map((module) => ({
        ...module,
        notes: module.notes ?? undefined,
      })),
    );

  return (
    <div className="container mx-auto py-10 px-10">
      <h1 className="text-center font-bold py-8">Modules Datalist</h1>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default Modules;
