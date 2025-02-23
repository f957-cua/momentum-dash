import { DURATION } from "../shared/static/duration";

export const convertModuleDuration = (duration: string | number) =>
  DURATION.find(({ id }) => id === duration)?.visibleValue;
