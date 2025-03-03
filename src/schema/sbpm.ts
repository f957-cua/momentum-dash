import { z } from "zod";

export const SbpmSchemaType = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
});

export const SbpmPrismaSchemaType = z.object({
  id: z.string(),
  name: z.string(),
});

export type SbpmType = z.infer<typeof SbpmSchemaType>;
export type SbpmPrismaType = z.infer<typeof SbpmPrismaSchemaType>;
