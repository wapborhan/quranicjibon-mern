import { useEffect, useState, Fragment } from "react";
import usePrayerTime from "../../../hooks/usePrayerTime";

const Counter = ({ targetDate, targetTime }) => {
  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
  let timer;

  useEffect(() => {
    setDate();
    timer = setInterval(() => {
      setDate();
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, targetTime]);

  const setDate = () => {
    const now = new Date().getTime();
    const countDownDate = new Date(`${targetDate} ${targetTime}`).getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(timer);
      setIsExpired(true);
    } else {
      setRemaining({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
      setIsExpired(false);
    }
  };

  const latitude = 23.9095816;
  const longitude = 89.0423603;
  const [prayerTime] = usePrayerTime({ latitude, longitude });

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
    <Fragment>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        {!isExpired && targetDate && targetTime ? (
          <>
            <h1 className="font-HindSiliguri title text-center text-3xl mb-6">
              রমযান আগমনের সম্ভাব্য বাকী
            </h1>
            <div className="counter !flex flex-wrap">
              {Object.entries(remaining).map(([key, value], i) => (
                <div key={i} className="entry">
                  <div className="entry-value">
                    <span className="count top curr flipTop">{value + 1}</span>
                    <span className="count top next">{value}</span>
                    <span className="count bottom next flipBottom">
                      {value}
                    </span>
                    <span className="count bottom curr">{value + 1}</span>
                  </div>
                  <div className="entry-title">{key.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1 className="font-HindSiliguri title text-center text-3xl mb-6">
            {hijriDate} রমযান আগমনের সম্ভাব্য বাকী
          </h1>
        )}
      </div>
    </Fragment>
  );
};

export default Counter;
