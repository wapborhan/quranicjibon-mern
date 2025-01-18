import { IoPlay, IoBookmarkOutline, IoCopyOutline } from "react-icons/io5";

const AyahsTrans = ({ ayahs, loading }) => {
  return (
    <div className="space-y-2 flex flex-col w-full">
      {ayahs &&
        ayahs.map((ayah, idx) => {
          return (
            <div
              key={idx}
              className={`w-full dark:text-dark-text p-5 group  bg-white  flex justify-between  gap-5 space-x-4 md:space-x-2 items-start  border-[0.5px]  rounded-xl md:hover:rounded-xl transition-all duration-500 dark:bg-darkz shadow-sm  !border-slate-300 ${
                loading && "animate-pulse"
              }`}
            >
              <ul className="quran details">
                {/* <li className="menu-item">
                  <IoPlay />
                </li> */}

                <li className="menu-item">
                  <IoBookmarkOutline />
                </li>
                <div className="menu-item">
                  <IoCopyOutline />
                </div>
              </ul>
              <div className="w-full space-y-5 items-center md:flex-row justify-between">
                <div className="text-black text-right">
                  {loading ? (
                    <div className="h-4 bg-gray-200 w-10/12 ml-auto full"></div>
                  ) : (
                    <>
                      <span className="font-normal text-3xl">
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
                  <span className=" font-medium text-black">
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
