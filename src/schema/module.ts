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

export type ModuleDurationStatusType = z.infer<typeof ModuleDurationStatus>;
