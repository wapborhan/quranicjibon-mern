import { useCallback } from "react";

export default function useTodayPrayerTime() {
  const getTodayTimings = useCallback(async (latitude, longitude) => {
    const date = new Date();
    const today = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    const url = `https://api.aladhan.com/v1/timings/${today}?latitude=${latitude}&longitude=${longitude}&method=2&iso8601=true`;

    const response = await fetch(url);
    const data = await response.json();

    return data.data;
  }, []);

  return { getTodayTimings };
}
