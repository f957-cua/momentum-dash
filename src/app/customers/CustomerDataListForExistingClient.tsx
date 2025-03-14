"use client";

import { DataTable } from "@/src/shared/ui/data-table";
import React from "react";
import { columns } from "./columns";
import { Button } from "@/src/shared/ui/button";
import { CustomerType } from "@/src/schema/customer";

function CustomerDataListForExistingClient({
  data,
  action,
  clientName,
}: {
  data: CustomerType[];
  action: () => void;
  clientName: string;
}) {
  const TITLE_TEXT = `Customers Datalist for ${clientName}`;
  const BUTTON_TEXT = `Create new Customer for ${clientName}`;
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center font-bold py-8">{TITLE_TEXT}</h1>
      <Button variant="secondary" onClick={action}>
        {BUTTON_TEXT}
      </Button>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default CustomerDataListForExistingClient;
