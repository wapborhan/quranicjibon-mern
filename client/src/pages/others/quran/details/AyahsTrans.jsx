import {
  IoPlay,
  IoBookmarkOutline,
  IoCopyOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { PiDotsThreeOutline } from "react-icons/pi";
import bengaliNumerals from "../../../../components/shared/bengaliNumerals";

const AyahsTrans = ({ ayahs, loading, sura }) => {
  return (
    <div className="space-y-2 flex flex-col w-full bg-white">
      {ayahs &&
        ayahs.map((ayah, idx) => {
          return (
            <div
              key={idx}
              className={`w-full dark:text-dark-text lg:p-5 p-3 group  bg-white  flex justify-between  lg:gap-5 md:gap-3 gap-1 space-x-4 md:space-x-2 items-start  border-[0.5px]  rounded-xl md:hover:rounded-xl transition-all duration-500 dark:bg-darkz shadow-sm  !border-slate-300 relative ${
                loading && "animate-pulse"
              }`}
            >
              <div className="menu flex gap-2 flex-col">
                <div className="text-black">
                  {loading ? (
                    <div className="h-4 bg-gray-200 w-10/12 ml-auto full"></div>
                  ) : (
                    <>
                      {bengaliNumerals(parseInt(sura?.index))}
                      {":"}
                      {bengaliNumerals(parseInt(ayah?.ayah_id))}
                    </>
                  )}
                </div>
                <ul className="quran details absolutes top-2 left-2">
                  {/* <li className="menu-item">
                  <IoPlay />
                </li> */}
                  <li className="menu-item">
                    <IoBookmarkOutline />
                  </li>
                  {/* <div className="menu-item">
                    <IoCopyOutline />
                  </div> */}
                  <div className="menu-item">
                    <PiDotsThreeOutline />
                  </div>
                </ul>
              </div>
              <div className="w-full lg:space-y-5 space-y-2 items-center md:flex-row justify-between">
                <div className="text-black text-right">
                  {loading ? (
                    <div className="h-4 bg-gray-200 w-10/12 ml-auto full"></div>
                  ) : (
                    <>
                      <span className="font-normal lg:text-3xl text-xl">
                        {ayah?.uthmani}
                      </span>
                      <span className="font-kfgq mr-3">
                        {parseInt(ayah.ayah_id).toLocaleString("ar-EG")}
                      </span>
                    </>
                  )}
                </div>
                {loading ? (
                  <div className="h-4 bg-gray-200 w-10/12 full"></div>
                ) : (
                  <span className="font-medium font-SolaimanLipi text-black lg:text-xl text-md">
                    {ayah?.text_bn}
                  </span>
                )}

                <br />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AyahsTrans;
