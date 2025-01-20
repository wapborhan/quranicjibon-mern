import { timingFormatter } from "../../../components/shared/timingFormatter";
import useCalenderTime from "../../../hooks/useCalenderTime";
import usePrayerTime from "../../../hooks/usePrayerTime";
import { WiSunrise, WiSunset } from "react-icons/wi";

const TimeTable = () => {
  const latitude = 23.908775911770977;
  const longitude = 89.12264749493718;

  const [prayerTime] = usePrayerTime({ latitude, longitude });
  const [calenderMonth] = useCalenderTime({ latitude, longitude });

  return (
    <>
      <div className="today bg-white rounded-lg p-6 shadow-sm mt-5 space-y-4">
        <div className="dateshow text-center text-xl">
          {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
            day: "numeric",
            month: "long",
            // weekday: "long",
            year: "numeric",
            timeZone: "Asia/Dhaka",
          }).format(Date.now())}
          {" - "}
          {new Intl.DateTimeFormat("bn-BD-u-en-US", {
            day: "numeric",
            month: "long",
            weekday: "long",
            year: "numeric",
            timeZone: "Asia/Dhaka",
          }).format(Date.now())}{" "}
        </div>
        <div className="timeTable flex justify-around items-center text-center">
          <div className="sehri space-y-2">
            <WiSunrise size={60} className="mx-auto" />
            <h1 className="title font-HindSiliguri text-lg font-bold">
              সেহরির সময় :{" "}
              {prayerTime && timingFormatter(prayerTime?.timings?.Imsak)}
            </h1>
            <p className="font-kfgq text-xl">
              َوَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ
            </p>
            <p>
              I intend to keep the fast for tomorrow in the month of Ramadan
            </p>
          </div>
          <div className="iftar space-y-2">
            <WiSunset size={60} className="mx-auto" />
            <h1 className="font-HindSiliguri text-lg font-bold ">
              ইফতার সময় :{" "}
              {prayerTime && timingFormatter(prayerTime?.timings?.Maghrib)}
            </h1>
            <p className="font-kfgq text-xl">
              ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ
              شَاءَ اللَّهُ
            </p>
            <p className="en">
              Thirst is gone, the veins are moistened and the reward is certain
              if Allah wills.
            </p>
          </div>
        </div>
        <div className="ramjan calender">
          <table>
            <thead>
              <tr>
                <td>তারিখ</td>
                <td>সেহরির </td>
                <td>ইফতার </td>
              </tr>
            </thead>
            <tbody>
              {calenderMonth &&
                calenderMonth.map((cal, idx) => {
                  const date = cal?.date?.gregorian.date;

                  const isActive =
                    cal?.date?.readable === prayerTime?.date?.readable;

                  return (
                    <tr
                      key={idx}
                      className={`${
                        isActive &&
                        "bg-[#0a993c] text-white border-[1px] border-black"
                      }`}
                    >
                      <td>{date}</td>
                      <td>{timingFormatter(cal?.timings?.Imsak)}</td>
                      <td>{timingFormatter(cal?.timings?.Maghrib)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TimeTable;
