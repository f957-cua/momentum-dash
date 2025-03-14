"use client";

import { DataTable } from "@/src/shared/ui/data-table";
import React from "react";
import { columns } from "./columns";
import { Client } from "@prisma/client";
import { Button } from "@/src/shared/ui/button";

function ClientDataList({
  data,
  action,
}: {
  data: Client[];
  action: () => void;
}) {
  return (
    <div className="container mx-auto py-10 px-10">
      <h1 className="text-center font-bold py-8">Clients Datalist</h1>
      <Button variant="secondary" onClick={action}>
        Create New Client
      </Button>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default ClientDataList;
