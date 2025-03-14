import { z } from "zod";

export const EmployeeSchemaType = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
});

export const EmployeePrismaType = z.object({
  id: z.string(),
  name: z.string(),
  clientId: z.string(),
  customerId: z.string(),
  client: z.object({
    id: z.string(),
    name: z.string(),
    sbpmId: z.string(),
  }),
  customer: z.object({
    id: z.string(),
    name: z.string(),
    sbpmId: z.string(),
    clientId: z.string(),
  }),
});

export type EmployeeType = z.infer<typeof EmployeeSchemaType>;
export type EmployeeTypePrisma = z.infer<typeof EmployeePrismaType>;
