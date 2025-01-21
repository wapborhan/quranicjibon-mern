import { useCallback, useEffect, useState } from "react";

const usePrayerTime = ({ latitude, longitude }) => {
  const [prayerTime, setPrayerTime] = useState();

  const getTodayTimings = useCallback(async () => {
    const date = new Date();
    const today = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    const url = `https://api.aladhan.com/v1/timings/${today}?latitude=${latitude}&longitude=${longitude}&method=1&iso8601=true`;

    const response = await fetch(url);
    const data = await response.json();

    return data.data;
  }, [latitude, longitude]);

  useEffect(() => {
    let isMounted = true;

    getTodayTimings().then((res) => {
      if (isMounted) {
        setPrayerTime(res);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [latitude, longitude, getTodayTimings]);

  return [prayerTime];
};

export default usePrayerTime;
