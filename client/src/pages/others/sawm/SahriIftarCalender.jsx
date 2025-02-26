import { DateTime } from "luxon";
import Loader from "../../../components/shared/Loader";
import { timingFormatter } from "../../../components/shared/timingFormatter";
import useCalenderTime from "../../../hooks/useCalenderTime";
import usePrayerTime from "../../../hooks/usePrayerTime";

const SahriIftarCalender = () => {
  const latitude = 23.9095816;
  const longitude = 89.0423603;

  const [prayerTime] = usePrayerTime({ latitude, longitude });
  const [calenderMonth] = useCalenderTime({ latitude, longitude });
  return (
    <div className="ramjan calender">
      <table>
        <thead>
          <tr>
            <td>তারিখ</td>
            <td className="lg:flex md:flex hidden">দিন</td>
            <td>সেহরির</td>
            <td>ইফতার</td>
            <td className="w-fulls"> একশন</td>
          </tr>
        </thead>
        <tbody>
          {calenderMonth ? (
            calenderMonth.map((cal, idx) => {
              const date = cal?.date?.gregorian.date;
              const dt = DateTime.fromFormat(date, "dd-MM-yyyy").setLocale(
                "bn"
              );
              const day = dt.toFormat("cccc", { locale: "bn" });
              const formattedDate = dt.toFormat("dd LLLL", {
                locale: "bn",
              });

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
                  <td>{formattedDate}</td>
                  <td className="lg:grid md:grid hidden">{day}</td>
                  <td>{timingFormatter(cal?.timings?.Imsak)}</td>
                  <td>{timingFormatter(cal?.timings?.Maghrib)}</td>
                  <td className="w-3/12">
                    <span className="onoff">
                      <input type="checkbox" value="1" id={`checkbox-${idx}`} />
                      <label htmlFor={`checkbox-${idx}`}></label>
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <div className="flex justify-center items-center mt-10 w-full">
              <Loader />
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SahriIftarCalender;
