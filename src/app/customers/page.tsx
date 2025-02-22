import React from "react";
import { db } from "@/shared/lib/db";
import { DataTable } from "@/shared/ui/data-table";
import { columns } from "./columns";

async function Customers() {
  const data = await db.customer.findMany({
    include: {
      client: true,
    },
  });

  if (!data) {
    return <div>No customers found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default Customers;
