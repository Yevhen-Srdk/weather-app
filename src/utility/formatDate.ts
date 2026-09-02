import type { FormattedDate } from "../types/FormattedDate";
import { Months } from "../types/monthsMap";

// date format is year-month-day
export const formatDate = (date: string): FormattedDate => {
  const month = Months.get(date.slice(5, 7)) || "";
  const day = date.slice(-2);

  return { day, month };
};
