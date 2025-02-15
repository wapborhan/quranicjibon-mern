import { useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Icon from "../../components/shared/Icon";

const SideContentList = ({ suras, handleDataSubmit, handleListActive }) => {
  const suraRefs = useRef([]); // To hold refs for each sura
  const navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  const suraId = queryParameters.get("number");

  // Check if the device is mobile
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

  useEffect(() => {
    if (!isMobile && suraId && suraRefs.current[suraId - 1]) {
      setTimeout(() => {
        suraRefs.current[suraId - 1].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [suraId, suras, isMobile]); // Include isMobile in dependency

  const handleSuraClick = (sura, index) => {
    if (isMobile) handleListActive();
    // handleListActive();
    navigate(`/quran/sura?number=${sura.index}`);
    handleDataSubmit(sura.index);

    // Scroll only on non-mobile devices
    if (!isMobile && suraRefs.current[index]) {
      suraRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="space-y-1">
      {suras &&
        suras.map((sura, index) => {
          const isActive = suraId ? suraId === sura.index : false;

          return (
            <div
              key={sura._id}
              onClick={() => handleSuraClick(sura, index)}
              ref={(el) => (suraRefs.current[index] = el)}
              className={`w-full p-5 group cursor-pointer !text-black flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500 dark:border-0 border-2 border-slate-100 ${
                isActive
                  ? "dark:bg-[#f3f3f3] border-2 border-slate-800 bg-[#ebfcf6]"
                  : "dark:bg-darkz"
              }`}
            >
              <div className="flex justify-center items-center w-12 h-12">
                <Icon title={sura?.index} active={isActive} color="#2b9e76" />
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="first">
                  <p className="group-hover:text-[#2b9e76] font-HindSiliguri font-medium">
                    {sura?.name_bn}
                  </p>
                  <p className="text-[#2b9e76] text-sm ">{sura?.name_en}</p>
                </div>
                <div className="second">
                  <b className="text-[#2b9e76] text-base  font-kfgq">
                    {sura?.name}
                  </b>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SideContentList;
