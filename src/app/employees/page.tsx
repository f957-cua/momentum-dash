import React from "react";
import { db } from "@/shared/lib/db";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function Employees() {
  const data = await db.employee.findMany();

  return (
    <div className="container mx-auto py-10">
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default Employees;
