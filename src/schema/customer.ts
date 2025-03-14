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

export const CustomerFormSchema = z.object({
  name: z.string(),
});

export type CustomerFormType = z.infer<typeof CustomerFormSchema>;

export type CustomerType = z.infer<typeof CustomerSchema>;
