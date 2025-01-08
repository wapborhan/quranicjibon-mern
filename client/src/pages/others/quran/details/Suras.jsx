import { useSearchParams } from "react-router-dom";
import SuraDetils from "./SuraDetils";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import SideContentHeader from "../../../../layout/Pages/SideContentHeader";
import SideContentList from "../../../../layout/Pages/SideContentList";
import Settings from "../../../../components/shared/Settings";

const Suras = () => {
  const [searchParams] = useSearchParams();
  const suraNumber = searchParams.get("number");
  const [suras, setSuras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectsura, setSelectsura] = useState(null);
  const [ayahs, setAyahs] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Fetch all suras on component mount
    axiosPublic.get("/quran/suras").then((res) => {
      const fetchedSuras = res.data?.data || [];
      setSuras(fetchedSuras);

      if (fetchedSuras.length > 0) {
        // Determine which Sura to load initially
        const initialSura = suraNumber
          ? fetchedSuras.find((sura) => String(sura.index) === suraNumber)
          : fetchedSuras[0]; // Default to the first Sura
        if (initialSura) {
          handleDataSubmit(initialSura.index);
        }
      }
    });
  }, [suraNumber]);

  const handleDataSubmit = (suraNo) => {
    setLoading(true);
    try {
      Promise.all([
        axiosPublic(`/quran/sura/ayahs/${suraNo}`).then((ayah) =>
          setAyahs(ayah.data?.data || [])
        ),
        axiosPublic(`/quran/sura/${suraNo}`).then((sura) =>
          setSelectsura(sura.data?.data || null)
        ),
      ]).finally(() => setLoading(false));
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="px-2 h-full flex justify-between md:space-x-6 dark:px-0">
      <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-darks ">
        <SideContentHeader
          content={[{ number: 1, name: "Quran", status: "active" }]}
        />
        <div className="p-2 h-[cal(100%-120px)] overflow-y-auto mb-2">
          <SideContentList suras={suras} handleDataSubmit={handleDataSubmit} />
        </div>
      </div>

      <div className="lg:w-10/12 w-full  h-full pb-16 md:pb-0 flex flex-col md:bg-white md:rounded-2xl overflow-hidden dark:bg-darks dark:text-gray-300 mx-auto">
        <SuraDetils ayahs={ayahs} sura={selectsura} loading={loading} />
      </div>
      <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-darks dark:text-gray-300">
        <Settings />
      </div>
    </div>
  );
};

export default Suras;
