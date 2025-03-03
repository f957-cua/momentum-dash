import { z } from "zod";

export const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  clientId: z.string(),
  sbpmId: z.string(),
  client: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export type CustomerType = z.infer<typeof CustomerSchema>;
