import React from "react";
import { db } from "@/src/shared/lib/db";
import { DataTable } from "@/src/shared/ui/data-table";
import { columns } from "./columns";

async function Employees() {
  const data = await db.employee.findMany({
    include: {
      client: true,
      customer: true,
    },
  });

  return (
    <div className="container mx-auto py-10 px-10">
      <h1 className="text-center font-bold py-8">Employees Datalist</h1>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default Employees;
