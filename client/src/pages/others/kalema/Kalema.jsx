import { useEffect, useState } from "react";
import KalemaList from "./KalemaList";
import KalemaDetails from "./KalemaDetails";
import SideContentHeader from "../../../layout/Pages/SideContentHeader";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loader from "../../../components/shared/Loader";

const Kalema = () => {
  const [kalemas, setKalemas] = useState([]);
  const [selectKalema, setSelectKalema] = useState(kalemas[0]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic("/kalema").then((res) => {
      setKalemas(res.data.data);
      setSelectKalema(res.data.data[0]);
    });
  }, []);

  const handleDataSubmit = (data) => {
    setSelectKalema(data);
  };

  return (
    <>
      <div className="px-2 h-full flex justify-between md:space-x-6 dark:px-0">
        <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-darks ">
          <SideContentHeader
            content={[{ id: 1, name: "Kalema", status: "active" }]}
          />

          <div className="p-2 h-[cal(100%-120px)] overflow-y-auto mb-2">
            <KalemaList kalemas={kalemas} onDataSubmit={handleDataSubmit} />
          </div>
        </div>
        {kalemas.length > 0 ? (
          <KalemaDetails selectKalema={selectKalema} />
        ) : (
          <div className="flex justify-center items-center h-full w-full">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default Kalema;
