import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { timingFormatter } from "../../../components/shared/timingFormatter";
import usePrayerTime from "../../../hooks/usePrayerTime";
import { WiSunrise, WiSunset } from "react-icons/wi";
import SahriIftarCalender from "./SahriIftarCalender";
import ProgressBar from "../../../components/shared/ProgressBar";
import { getSwamRawData, upsertSwamByDate } from "../../../utils/swamStorage";

const TimeTable = () => {
  const latitude = 23.9095816;
  const longitude = 89.0423603;

  const [prayerTime] = usePrayerTime({ latitude, longitude });

  const [swamData, setSwamData] = useState([]);
  const [isTodaySwam, setIsTodaySwam] = useState(false);
  const [fullMonthSwamData, setFullMonthSwamData] = useState(false);

  /* ---------------- Today Date ---------------- */
  const todayReadable = prayerTime?.date?.readable;

  /* ---------------- Load localStorage ---------------- */
  useEffect(() => {
    const data = getSwamRawData();
    setSwamData(data);

    if (todayReadable) {
      const today = data.find((d) => d.date === todayReadable);
      setIsTodaySwam(!!today?.isSwam);
    }
  }, [todayReadable]);

  /* ---------------- Toggle Today Swam ---------------- */
  const handleTodaySwam = (checked) => {
    setIsTodaySwam(checked);
    upsertSwamByDate(todayReadable, checked);

    const updated = getSwamRawData();
    setSwamData(updated);
  };

  /* ---------------- Progress ---------------- */
  const totalDays = 31;
  const swamCount = swamData.filter((d) => d.isSwam).length;
  const progress = Math.round((swamCount / totalDays) * 31);

  /* ---------------- Hijri date logic (unchanged) ---------------- */
  const hijriMonths = [
    "",
    "মুহাররম",
    "সফর",
    "রবিউল আউয়াল",
    "রবিউস সানি",
    "জমাদিউল আউয়াল",
    "জমাদিউস সানি",
    "রজব",
    "শা'বান",
    "রমজান",
    "শাওয়াল",
    "জ্বিলক্বদ",
    "জ্বিলহজ্জ",
  ];

  const day = new Intl.NumberFormat("bn-BD").format(
    prayerTime?.date.hijri?.day,
  );
  const month = hijriMonths[prayerTime?.date.hijri?.month?.number];
  const year = new Intl.NumberFormat("bn-BD", { useGrouping: false }).format(
    prayerTime?.date.hijri?.year,
  );

  const hijriDate = `${day} ${month}, ${year}`;

  return (
    <div className="today bg-white rounded-lg lg:p-6 p-2 shadow-sm mt-5 space-y-4">
      <h1 className="font-HindSiliguri text-center lg:text-3xl text-xl font-bold">
        সেহেরি ইফতারের সময়সূচী
      </h1>

      {/* ------------ dates ------------ */}
      <div className="dateshow text-center text-xl">
        {hijriDate} -{" "}
        {new Intl.DateTimeFormat("bn-BD-u-en-US", {
          day: "numeric",
          month: "long",
          weekday: "long",
          year: "numeric",
          timeZone: "Asia/Dhaka",
        }).format(Date.now())}
      </div>

      {/* ------------ Sehri / Iftar ------------ */}
      <div className="timeTable flex flex-wrap justify-around text-center">
        <div className="sehri">
          <WiSunrise size={60} className="mx-auto" />
          <h1 className="font-bold">
            সেহরির শেষ সময় : {timingFormatter(prayerTime?.timings?.Imsak)}
          </h1>
        </div>

        <div className="iftar">
          <WiSunset size={60} className="mx-auto" />
          <h1 className="font-bold">
            ইফতার সময় : {timingFormatter(prayerTime?.timings?.Maghrib)}
          </h1>
        </div>
      </div>

      {/* ------------ Swam Section ------------ */}
      <div>
        <div className="flex gap-3 items-center">
          <h2 className="text-sm">আজ রোজা আছেন?</h2>

          <span className="isswam onoff">
            <input
              type="checkbox"
              id="today-swam"
              checked={isTodaySwam}
              onChange={(e) => handleTodaySwam(e.target.checked)}
            />
            <label htmlFor="today-swam"></label>
          </span>
        </div>

        <div className="flex items-center mt-2 gap-4">
          <div className="w-full">
            <ProgressBar progress={progress} />
          </div>
          <h2 className="text-sm">
            {swamCount}/{totalDays}
          </h2>
        </div>
      </div>

      <div className="flex justify-center">
        <span
          className={`${
            fullMonthSwamData ? "bg-[#8e8e8e] " : "bg-[#0a993c] "
          }text-white px-8 py-3 rounded-lg cursor-pointer`}
          onClick={() => setFullMonthSwamData(!fullMonthSwamData)}
        >
          {fullMonthSwamData
            ? "সম্পূর্ণ মাসের সময়সূচী লুকান"
            : "সম্পূর্ণ মাসের সময়সূচী দেখুন"}
        </span>
      </div>

      {fullMonthSwamData === true && <SahriIftarCalender />}
    </div>
  );
};

export default TimeTable;
