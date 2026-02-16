"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import Loader from "../../../components/shared/Loader";
import { timingFormatter } from "../../../components/shared/timingFormatter";
import useCalenderTime from "../../../hooks/useCalenderTime";
import usePrayerTime from "../../../hooks/usePrayerTime";
import { getSwamData, updateSwamData } from "../../../utils/swamStorage";

const SahriIftarCalender = () => {
  const latitude = 23.9095816;
  const longitude = 89.0423603;

  const [prayerTime] = usePrayerTime({ latitude, longitude });
  const [calenderMonth] = useCalenderTime({ latitude, longitude });

  const [swamState, setSwamState] = useState({});

  /* load once */
  useEffect(() => {
    setSwamState(getSwamData());
  }, []);

  const handleSwamChange = (date, checked) => {
    setSwamState((prev) => ({ ...prev, [date]: checked }));
    updateSwamData(date, checked);
  };

  return (
    <div className="ramjan calender">
      <table>
        <thead>
          <tr>
            <td>তারিখ/দিন</td>
            <td>সেহরির</td>
            <td>ইফতার</td>
            <td>একশন</td>
          </tr>
        </thead>

        <tbody>
          {calenderMonth ? (
            calenderMonth.map((cal, idx) => {
              const readableDate = cal?.date?.readable;
              const date = cal?.date?.gregorian?.date;

              const dt = DateTime.fromFormat(date, "dd-MM-yyyy").setLocale(
                "bn",
              );
              const day = dt.toFormat("cccc");
              const formattedDate = dt.toFormat("dd LLLL");

              const isActive = readableDate === prayerTime?.date?.readable;

              const isSwam = !!swamState[readableDate];

              return (
                <tr
                  key={idx}
                  className={`${
                    isActive && "bg-[#0a993c] text-white border border-black"
                  }`}
                >
                  <td>
                    <span className="flex flex-col md:flex-row lg:flex-row  gap-0 md:gap-4 lg:gap-5 justify-center items-center">
                      <span>{formattedDate}</span> <span>{day}</span>
                    </span>
                  </td>
                  <td>{timingFormatter(cal?.timings?.Imsak)}</td>
                  <td>{timingFormatter(cal?.timings?.Maghrib)}</td>

                  <td>
                    <span className="onoff flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`checkbox-${idx}`}
                        checked={isSwam}
                        onChange={(e) =>
                          handleSwamChange(readableDate, e.target.checked)
                        }
                      />

                      <label
                        htmlFor={`checkbox-${idx}`}
                        className={`cursor-pointer ${
                          isSwam ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        {/* {isSwam ? "সিয়াম" : "সিয়াম নয়"} */}
                      </label>
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className="py-6 text-center">
                <Loader />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SahriIftarCalender;
