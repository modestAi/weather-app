import { toFahrenheit } from "./unitConverters/temperatureConverter";

export const getPreferredUnitTemp = (num: number, preferredUnit: string): number => {
  if (preferredUnit === "metric") {
    return Math.trunc(num);
  } else {
    return Math.trunc(toFahrenheit(num));
  }
};
