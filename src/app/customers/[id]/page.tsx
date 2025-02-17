import { db } from "@/shared/lib/db";
import { notFound } from "next/navigation";

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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <article className="max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">
          {customer.name}
        </h1>
        <p className="text-gray-600 text-center">by {customer.email}</p>
        <div className="prose prose-gray mt-8">
          {customer.email || "No content available."}
        </div>
      </article>
    </div>
  );
}
