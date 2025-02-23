import { z } from "zod";

export const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  client_id: z.string(),
  client: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
  }),
});

export type CustomerType = z.infer<typeof CustomerSchema>;
