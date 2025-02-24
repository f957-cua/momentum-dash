import { db } from "@/shared/lib/db";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/shared/ui/card";
import { DataTable } from "@/shared/ui/data-table";
import { notFound } from "next/navigation";
import { columns } from "../../employees/columns";

export default async function Customer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const customer = await db.customer.findUnique({
    where: { id: id },
  });

  if (!customer) {
    notFound();
  }

  const employees = await db.employee.findMany({
    where: { customer_id: id },
    include: {
      customer: true,
    },
  });

  const CARD_TITLE = `Customer ${customer.name} Details`;
  const CARD_DESCRIPTION = `Here are the details of the customer which have saved by next id in database ${customer.id}.`;

  return (
    <div className="container mx-auto py-10 px-10">
      <Card>
        <CardHeader>
          <CardTitle>{CARD_TITLE}</CardTitle>
          <CardDescription>{CARD_DESCRIPTION}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Customer Public Information Board</p>
          <div className="my-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Customer Public Name
              </p>
              <p className="text-sm text-muted-foreground">{customer.name}</p>
            </div>
          </div>
          <div className="my-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Customer Public Email
              </p>
              <p className="text-sm text-muted-foreground">{customer.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <h1 className="text-center font-bold py-8">
        Employees list for Customer {customer.name}
      </h1>
      <DataTable data={employees} columns={columns} />
    </div>
  );
}
