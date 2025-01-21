import { timingFormatter } from "../../../components/shared/timingFormatter";
import usePrayerTime from "../../../hooks/usePrayerTime";

const Topbar = () => {
  const [prayerTime] = usePrayerTime({
    latitude: 23.908775911770977,
    longitude: 89.12264749493718,
  });

  const hijriMonths = [
    "",
    "মুহাররম", // ১ম মাস
    "সফর", // ২য় মাস
    "রবিউল আউয়াল", // ৩য় মাস
    "রবিউস সানি", // ৪র্থ মাস (বা রবিউস আখির)
    "জমাদিউল আউয়াল", // ৫ম মাস
    "জমাদিউস সানি", // ৬ষ্ঠ মাস (বা জমাদিউল আখিরা)
    "রজব", // ৭ম মাস
    "শা'বান", // ৮ম মাস
    "রমজান", // ৯ম মাস
    "শাওয়াল", // ১০ম মাস
    "জ্বিলক্বদ", // ১১তম মাস
    "জ্বিলহজ্জ", // ১২তম মাস
  ];
  const day = new Intl.NumberFormat("bn-BD").format(
    prayerTime?.date.hijri?.day
  );
  const month = hijriMonths[prayerTime?.date.hijri?.month?.number];
  const year = new Intl.NumberFormat("bn-BD", { useGrouping: false }).format(
    prayerTime?.date.hijri?.year
  );

  const hijriDate = `${day} ${month}, ${year}`;

  return (
    <div className="topbars bg-color1  flex flex-wrap lg:justify-center justify-between w-full lg:!pl-[26.5625rem] lg:!px-[1.25rem] !pl-2 !p-0 bg-[#212121]">
      <ul className="topbars-info-list mb-0 list-unstyled flex">
        <li className="flex">
          <i className="thm-clr flaticon-sun"></i>
          <span className="lg:block md:block hidden"> সূর্যোদয়:</span>
          <span className="thm-clr">
            {prayerTime && timingFormatter(prayerTime?.timings?.Sunrise)}
          </span>
        </li>
        <li className="flex">
          <i className="thm-clr flaticon-moon"></i>
          <span className="lg:block md:block hidden">সূর্যাস্ত: </span>
          <span className="thm-clr">
            {prayerTime && timingFormatter(prayerTime?.timings?.Sunset)}
          </span>
        </li>
      </ul>
      <div className="social-links inline-flex !px-2  text-white">
        <div className="dateshow">
          {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
            // day: "numeric",
            // month: "long",
            weekday: "long",
            // year: "numeric",
            timeZone: "Asia/Dhaka",
            // calendar: "islamic-bangla",
          }).format(Date.now())}
          {`, ${hijriDate}`}
        </div>{" "}
        <div className="datehide">{`${hijriDate}`}</div>
      </div>
    </div>
  );
};

export default Topbar;
