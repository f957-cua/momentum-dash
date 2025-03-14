import { db } from "@/src/shared/lib/db";
import { notFound, redirect } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/shared/ui/card";
import CustomerDataListForExistingClient from "../../customers/CustomerDataListForExistingClient";

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

  const action = async () => {
    "use server";
    redirect(`/customers/new?clientId=${id}`);
  };

  const customers = await db.customer.findMany({
    include: {
      client: true,
    },
    where: { clientId: id },
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
        </CardContent>
      </Card>
      <CustomerDataListForExistingClient
        data={customers}
        action={action}
        clientName={client.name}
      />
    </div>
  );
}
