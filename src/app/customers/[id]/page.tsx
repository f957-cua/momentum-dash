import { db } from "@/src/shared/lib/db";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/src/shared/ui/card";
import { notFound, redirect } from "next/navigation";
import EmployeeDataListForExistingCustomer from "../../employees/EmployeeDataListForExistingClient";

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
    where: { customerId: id },
    include: {
      customer: true,
      client: true,
    },
  });

  const action = async () => {
    "use server";
    redirect(`/employees/new?clientId=${customer.clientId}&customerId=${id}`);
  };

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
        </CardContent>
      </Card>
      <EmployeeDataListForExistingCustomer
        data={employees}
        action={action}
        customerName={customer.name}
      />
    </div>
  );
}
