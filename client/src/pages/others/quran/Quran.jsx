"use client";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import SuraList from "./SuraList";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loader from "../../../components/shared/Loader";

const Quran = () => {
  const [suras, setSuras] = useState([]);
  const [query, setQuery] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/quran/suras").then((res) => {
      setSuras(res.data?.data);
    });
  }, []);

  return (
    <div className="quran lg:px-0 md:px-0 px-2">
      <div className="mt-4 md:mt-0 p-4 flex flex-col md:flex-row md:justify-between items-center space-y-3 md:space-y-0 dark:bg-darks bg-white rounded-xl  dark:text-dark-text">
        <h2 className="text-2xl font-medium font-HindSiliguri">আল কোরআন</h2>
        <div className="w-full md:w-9/12 flex justify-between items-center space-x-2 px-4 border-2 rounded-lg dark:border-gray-500">
          <BiSearch className="text-gray-500 dark:text-dark-text" />
          <input
            type="text"
            // value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="খুজুন সুরার নাম বাংলাই, ইংরেজি ও সুরা নম্বর দিয়ে"
            className="w-full py-3 font-light text-sm focus:outline-none dark:bg-darks"
          />
        </div>
      </div>
      <div
        className={`${
          suras.length > 0
            ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 py-5"
            : "flex justify-center items-center w-full h-full"
        }`}
      >
        {suras.length > 0 ? (
          suras
            .filter(
              (sura) =>
                sura?.name_en.toLowerCase().includes(query.toLowerCase()) ||
                sura?.name_bn.toLowerCase().includes(query.toLowerCase()) ||
                sura?.index.toLowerCase().includes(query.toLowerCase())
            )
            .map((sura) => <SuraList sura={sura} key={sura._id} />)
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <Loader />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quran;
