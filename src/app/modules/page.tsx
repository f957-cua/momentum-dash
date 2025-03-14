import { db } from "@/src/shared/lib/db";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/src/shared/ui/data-table";

async function Modules() {
  const data = await db.module.findMany({
    include: {
      client: true,
      employee: true,
    },
  });

  // Map the data to match the expected type structure
  const formattedData = data.map((item) => ({
    id: item.id,
    name: item.name,
    status: item.status as string, // Ensure status is a string
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
    client_id: item.clientId,
    employee_id: item.employeeId,
    notes: item.notes ?? undefined,
    employee: {
      id: item.employee.id,
      name: item.employee.name,
    },
    client: item.client
      ? {
          id: item.client.id,
          name: item.client.name,
        }
      : {
          id: "",
          name: "Unknown Client",
        }, // Provide a default value if client is null
  }));

  return (
    <div className="container mx-auto py-10 px-10">
      <h1 className="text-center font-bold py-8">Modules Tally List</h1>
      <DataTable data={formattedData} columns={columns} />
    </div>
  );
}

export default Modules;
