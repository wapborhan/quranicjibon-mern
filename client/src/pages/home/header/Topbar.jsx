import { timingFormatter } from "../../../components/shared/timingFormatter";
import usePrayerTime from "../../../hooks/usePrayerTime";

const Topbar = () => {
  const [prayerTime] = usePrayerTime({
    latitude: 23.908775911770977,
    longitude: 89.12264749493718,
  });

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
