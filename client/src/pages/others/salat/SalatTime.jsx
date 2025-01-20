import { timingFormatter } from "../../../components/shared/timingFormatter";
import usePrayerTime from "../../../hooks/usePrayerTime";

const SalatTime = () => {
  const [prayerTime] = usePrayerTime({
    latitude: 23.908775911770977,
    longitude: 89.12264749493718,
  });

  return (
    <section>
      <div className="w-full bg-white dark:bg-darks dark:text-dark-text mt-10 p-4 rounded-xl">
        <div className="container mx-auto">
          <div className="sec-title text-center w-100 mt-3">
            <div className="sec-title-inner d-inline-block">
              <h2 className="mb-0 text-dark font-HindSiliguri">
                আজকের নামাজের সময়সূচি
              </h2>
              <p className="mb-0 thm-clr">
                <div className="dateshow">
                  {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
                    day: "numeric",
                    month: "long",
                    // weekday: "long",
                    year: "numeric",
                    timeZone: "Asia/Dhaka",
                    // calendar: "islamic-bangla",
                  }).format(Date.now())}
                  {" - "}
                  {new Intl.DateTimeFormat("bn-BD-u-en-US", {
                    day: "numeric",
                    month: "long",
                    weekday: "long",
                    year: "numeric",
                    timeZone: "Asia/Dhaka",
                    // calendar: "islamic-bangla",
                  }).format(Date.now())}
                </div>
              </p>
            </div>
          </div>
          <ul className="time-list3 flex flex-wrap mb-0 list-unstyled">
            <li
              className="pat-bg thm-layer opc7 back-blend-multiply thm-bg !py-4"
              style={{
                backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
              }}
            >
              <span>সূর্যোদয়:</span>

              {prayerTime && timingFormatter(prayerTime?.Sunrise)}
              {/* <i>ইকামাহ: ০০:০০ AM</i> */}
            </li>
            <li
              className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2 !py-4"
              style={{
                backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
              }}
            >
              <span>ফজর:</span>
              {prayerTime && timingFormatter(prayerTime?.Fajr)}
              {/* AM */}
              {/* <i>
                  ইকামাহ:{" "}
                  {prayerTime && (
                    <span>
                      {DateTime.fromISO(prayerTime?.Fajr)
                        .minus({ minutes: 15 })
                        .toLocaleString(DateTime.TIME_SIMPLE)}
                    </span>
                  )}
                </i> */}
            </li>
            <li
              className="pat-bg thm-layer opc7 back-blend-multiply thm-bg !py-4"
              style={{
                backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
              }}
            >
              <span>যোহর:</span>
              {prayerTime && timingFormatter(prayerTime?.Dhuhr)}
              {/* <i>ইকামাহ: ০০:০০ AM</i> */}
            </li>
            <li
              className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2 !py-4"
              style={{
                backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
              }}
            >
              <span>আসর:</span>
              {prayerTime && timingFormatter(prayerTime?.Asr)}
              {/* <i>ইকামাহ: ০০:০০ AM</i> */}
            </li>
            <li
              className="pat-bg thm-layer opc7 back-blend-multiply thm-bg !py-4"
              style={{
                backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
              }}
            >
              <span>মাগরিব:</span>
              {prayerTime && timingFormatter(prayerTime?.Maghrib)}
              {/* <i>ইকামাহ: ০০:০০ AM</i> */}
            </li>
            <li
              className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2 !py-4"
              style={{
                backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
              }}
            >
              <span>এশা:</span>
              {prayerTime && timingFormatter(prayerTime?.Isha)}
              {/* <i>ইকামাহ: ০০:০০ AM</i> */}
            </li>
            {/* {item} */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SalatTime;
