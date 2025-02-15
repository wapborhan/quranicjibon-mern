import { DateTime } from "luxon";

export function dateFormating(timing) {
  const dt = DateTime.fromFormat(timing, "dd-MM-yyyy").setLocale("bn");
  const formattedDate = dt.toFormat("dd LLLL", { locale: "bn" });
  return formattedDate;
}
