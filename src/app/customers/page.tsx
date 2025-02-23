import React from "react";
import { db } from "@/shared/lib/db";
import { DataTable } from "@/shared/ui/data-table";
import { columns } from "./columns";
import { CustomerType } from "@/schema/customer";

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
    <div className="container mx-auto py-10 px-10">
      <h1 className="text-center font-bold py-8">Customers Datalist</h1>
      <DataTable data={data as CustomerType[]} columns={columns} />
    </div>
  );
}

export default Customers;
