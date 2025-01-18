import { useEffect, useState } from "react";
import { timingFormatter } from "../../../components/shared/timingFormatter";
import useTodayPrayerTime from "../../../hooks/useTodayPrayerTime";

const Topbar = () => {
  const [prayerTime, setPrayerTime] = useState();
  const [today, setToday] = useState();
  const latitude = "23.908775911770977";
  const longitude = "89.12264749493718";
  const { getTodayTimings } = useTodayPrayerTime();

  useEffect(() => {
    getTodayTimings(latitude, longitude).then((res) => {
      setPrayerTime(res.timings);
      setToday(res?.date?.hijri);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  const hijriDay = today?.day + today?.month.en;

  return (
    <div className="topbars bg-color1  flex flex-wrap lg:justify-center justify-between w-full lg:!pl-[26.5625rem] lg:!px-[1.25rem] !pl-3 !p-0 bg-[#212121]">
      <ul className="topbars-info-list mb-0 list-unstyled flex">
        <li className="flex">
          <i className="thm-clr flaticon-sun"></i>
          <span className="lg:block md:block hidden"> সূর্যোদয়:</span>
          <span className="thm-clr">
            {prayerTime && timingFormatter(prayerTime?.Sunrise)}
          </span>
        </li>
        <li className="flex">
          <i className="thm-clr flaticon-moon"></i>
          <span className="lg:block md:block hidden">সূর্যাস্ত: </span>
          <span className="thm-clr">
            {" "}
            {prayerTime && timingFormatter(prayerTime?.Sunset)}
          </span>
        </li>
      </ul>
      <div className="social-links inline-flex !p-3 text-white">
        <div className="dateshow">
          {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
            day: "numeric",
            month: "long",
            weekday: "long",
            year: "numeric",
            timeZone: "Asia/Dhaka",
            // calendar: "islamic-bangla",
          }).format(Date.now())}
        </div>{" "}
        <div className="datehide">
          {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
            day: "numeric",
            month: "long",
            weekday: "long",
            timeZone: "Asia/Dhaka",
            // calendar: "islamic-bangla",
          }).format(Date.now())}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
