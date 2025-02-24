import { db } from "@/shared/lib/db";
import { notFound } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { DataTable } from "@/shared/ui/data-table";
import { columns } from "../../customers/columns";

export default async function Client({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = await db.client.findUnique({
    where: { id: id },
  });

  if (!client) {
    notFound();
  }

  const customers = await db.customer.findMany({
    include: {
      client: true,
    },
    where: { client_id: id },
  });

  const CARD_TITLE = `Client ${client.name} Details`;
  const CARD_DESCRIPTION = `Here are the details of the client which have saved by next id in database ${client.id}.`;

  return (
    <div className="container mx-auto py-10 px-10">
      <Card>
        <CardHeader>
          <CardTitle>{CARD_TITLE}</CardTitle>
          <CardDescription>{CARD_DESCRIPTION}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Client Public Information Board</p>
          <div className="my-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Client Public Name
              </p>
              <p className="text-sm text-muted-foreground">{client.name}</p>
            </div>
          </div>
          <div className="my-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Client Public Email
              </p>
              <p className="text-sm text-muted-foreground">{client.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <h1 className="text-center font-bold py-8">
        Customers list for Client {client.name}
      </h1>
      <DataTable data={customers} columns={columns} />
    </div>
  );
}
