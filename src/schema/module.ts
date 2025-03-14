import { z } from "zod";

export const ModuleDurationStatus = z.enum([
  "HALF_HOUR",
  "ONE_HOUR",
  "ONE_AND_HALF_HOUR",
  "TWO_HOURS",
  "TWO_AND_HALF_HOURS",
  "THREE_HOURS",
  "THREE_AND_HALF_HOURS",
  "FOUR_HOURS",
  "FOUR_AND_HALF_HOURS",
  "FIVE_HOURS",
  "FIVE_AND_HALF_HOURS",
  "SIX_HOURS",
  "SIX_AND_HALF_HOURS",
  "SEVEN_HOURS",
  "SEVEN_AND_HALF_HOURS",
  "EIGHT_HOURS",
]);

export const ModuleSchemaType = z.object({
  id: z.string(),
  name: z.string(),
  // client_id: z.string(),
  // employee_id: z.string(),
  // duration: ModuleDurationStatus,
  notes: z.string().optional(),
  client: z.object({
    id: z.string(),
    name: z.string(),
  }),
  employee: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export const ModulePrismaSchemaType = z.object({
  id: z.string(),
  name: z.string(),
  client_id: z.string(),
  employee_id: z.string(),
  // duration: ModuleDurationStatus,
  notes: z.string().optional(),
  client: z.object({
    id: z.string(),
    name: z.string(),
  }),
  employee: z.object({
    id: z.string(),
    name: z.string(),
  }),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  status: z.string(),
});

export const ModuleFormType = z.object({
  name: z.string(),
  notes: z.string().optional(),
});

export type ModuleType = z.infer<typeof ModuleSchemaType>;
export type ModulePrismaType = z.infer<typeof ModulePrismaSchemaType>;

export type ModuleFormDataType = z.infer<typeof ModuleFormType>;

export type ModuleDurationStatusType = z.infer<typeof ModuleDurationStatus>;
