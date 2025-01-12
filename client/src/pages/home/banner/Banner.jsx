import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section>
      <div className="w-full relative">
        <div className="feat-wrap v1 text-center relative w-full">
          <div className="feat-caro">
            <div className="feat-item">
              <div className="feat-img absolute"></div>
              <div className="feat-cap-wrap absolute inline-block">
                <div className="feat-cap inline-block">
                  <i className="inline-block flaticon-rub-el-hizb thm-clr">
                    {/* <GiRubElHizb /> */}
                  </i>
                  <h2 className="mb-0">
                    <span className="font-HindSiliguri">
                      আল্লাহর কাছে কোন কিছুই অসম্ভব নয়
                    </span>
                  </h2>
                  <p className="mb-0">
                    মুসলিম সম্প্রদায়, পবিত্র কুরআনের উপর ভিত্তি করে একটি ব্যাপক
                    ইসলামী জীবনধারা প্রচার করছে
                  </p>
                  <Link className="thm-btn thm-bg rounded" to="/pages/quran">
                    আল কুরআন
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- Additional feat-items go here if needed --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
