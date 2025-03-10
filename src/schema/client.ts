import { z } from "zod";

export const ClientSchema = z.object({
  name: z.string(),
});

export type ClientFormValues = z.infer<typeof ClientSchema>;
