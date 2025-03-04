import { useState } from "react";
import bengaliNumerals from "../../../../components/shared/bengaliNumerals";
import AyahsTrans from "./AyahsTrans";
import AyahsRead from "./AyahsRead";
import { AiOutlineMenu } from "react-icons/ai";

const SuraDetils = ({ ayahs, sura, loading, handleListActive }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      {loading ? (
        <div className="hidden animate-pulse h-[80px] w-full md:grid lg:grid-cols-3 items-center  bg-white border-b-2 rounded-t-2xl text-black dark:text-dark-text dark:bg-darks dark:border-gray-500 border-gray-200 py-5">
          <div className="bg-gray-200 h-12 w-12"></div>
          <div className="text-sm text-center">
            <div className="h-4 bg-gray-200 w-10/12 full"></div> <br />
            <div className="h-4 bg-gray-200 w-10/12 full"></div>{" "}
          </div>
          <div className="text-sm text-center">
            <div className="h-4 bg-gray-200 w-10/12 full"></div> <br />{" "}
            <div className="h-4 bg-gray-200 w-10/12 full"></div>
          </div>
        </div>
      ) : (
        <div className="hidden text-center px-4 pt-4 w-full md:grid lg:grid-cols-4 items-center  bg-white border-b-2 rounded-t-2xl !text-black dark:text-dark-text dark:bg-darks dark:border-gray-500 border-gray-200">
          {sura?.type === "Meccan" ? (
            <img
              src="/assets/images/quran/makkah.png"
              alt=""
              width={100}
              height={100}
            />
          ) : (
            <img
              src="/assets/images/quran/madinah.png"
              alt=""
              width={100}
              height={100}
            />
          )}
          {sura && (
            <>
              <div className="text-sm text-center block space-y-1">
                <div className="text-3xl font-bold font-kfgq">
                  {sura?.name}{" "}
                </div>
              </div>
              <div className="text-sm text-center block space-y-1">
                <div className="font-HindSiliguri">{sura?.name_bn}</div>
                <div>
                  {"আয়াত: "} {bengaliNumerals(sura.ayas)} -{" "}
                  {sura?.type === "Meccan" ? "মক্কা" : "মদীনা"}
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <ul className="flex flex-col items-center  transition rounded-full p-1 relative">
                    <li
                      className={`${
                        activeTab === 1 && " !text-[#fff] !bg-[#2b9e76]"
                      } px-5 py-[2px]  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                      onClick={() => setActiveTab(1)}
                    >
                      অনুবাদ
                    </li>
                    <li
                      className={`${
                        activeTab === 2 && " !text-[#fff] !bg-[#2b9e76]"
                      } px-5 py-[2px]  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                      onClick={() => setActiveTab(2)}
                    >
                      পড়া
                    </li>
                  </ul>
                </div>
                <div className="audio"></div>
              </div>
            </>
          )}
        </div>
      )}
      <div className="h-full md:px-4 overflow-y-auto space-y-4 lg:pt-6 md:pt-0 pb-2 md:mt-0 dark:px-2 mb-2">
        <div
          // onClick={() => setMenu(!menu)}
          className="md:hidden flex items-center rounded-xl bg-white text-black cursor-pointer dark:bg-darks border-[0.5px] border-slate-300"
        >
          <div className="flex justify-between w-full items-center p-2">
            <div className="icon p-2" onClick={handleListActive}>
              <AiOutlineMenu size={20} color="#1fa471" />
            </div>
            <span className="text-xl">{sura?.name}</span>
            <span className="font-SolaimanLipi">
              {"আয়াত: "} {sura && bengaliNumerals(sura?.ayas)}
            </span>
          </div>
        </div>
        {activeTab === 1 && (
          <AyahsTrans ayahs={ayahs} loading={loading} sura={sura} />
        )}
        {activeTab === 2 && <AyahsRead ayahs={ayahs} loading={loading} />}
      </div>{" "}
    </>
  );
};

export default SuraDetils;
