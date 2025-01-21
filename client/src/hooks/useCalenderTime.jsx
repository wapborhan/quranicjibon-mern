import { useCallback, useEffect, useState } from "react";

const useCalenderTime = ({ latitude, longitude }) => {
  const [calenderMonth, setCalenderMonth] = useState();

  const getTodayTimings = useCallback(async (latitude, longitude) => {
    const dateToday = new Date();
    const year = dateToday.getFullYear();
    const month = dateToday.getMonth() + 1;

    const url = `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&school=1&method=1&iso8601=true`;

    const response = await fetch(url);
    const data = await response.json();

    return data.data;
  }, []);

  useEffect(() => {
    getTodayTimings(latitude, longitude).then((res) => {
      setCalenderMonth(res);
    });
  }, [latitude, longitude, getTodayTimings]);

  return [calenderMonth];
};

export default useCalenderTime;
