import { z } from "zod";

export const EmployeeSchemaType = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  customerId: z.string(),
});

export type EmployeeType = z.infer<typeof EmployeeSchemaType>;
