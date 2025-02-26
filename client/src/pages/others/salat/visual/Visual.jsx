import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./visual.css";

import { Navigation } from "swiper/modules";
import { visualDatas } from "./data";

const Visual = () => {
  const swiperRef = useRef(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const gender = searchParams.get("gender");
  const [visualData, setVisualData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!visualDatas) return;

    const formattedData = visualDatas.map((item) => ({
      id: item?.id,
      image: gender === "male" ? item?.imageMale : item?.imageFemale,
      title: item?.title,
      description:
        gender === "male"
          ? item && item?.desMale.map((desc) => desc)
          : item && item?.desFemale.map((desc) => desc),
    }));

    setVisualData(formattedData);
  }, [gender]);

  const handleGenderChange = (newGender) => {
    const params = new URLSearchParams(searchParams);
    params.set("gender", newGender);
    navigate(`?${params.toString()}`);
  };

  return (
    <div className="bg-white m-2 lg:p-6 p-2 rounded-md">
      <div className="pt-2 text-xl w-full space-y-4">
        <h1 className="font-HindSiliguri text-center mx-auto">নামাজ ভিজুয়াল</h1>
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => handleGenderChange("male")}
            className={`px-6 py-1  rounded-full text-center border-2 border-gray-200 ${
              gender === "male"
                ? "bg-[#2b9e76] text-white "
                : "bg-gray-200 text-black"
            }`}
          >
            পুরুষ
          </button>
          <button
            onClick={() => handleGenderChange("female")}
            className={`px-4 py-1 rounded-full text-center border-2 border-gray-200 ${
              gender === "female" ? "bg-pink-500 text-white" : "bg-gray-200"
            }`}
          >
            মহিলা
          </button>
        </div>
      </div>
      <div className="slider">
        <div className="flex justify-around">
          <button
            className={`custom-prev ${
              activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={activeIndex === 0}
          >
            ◀ পূর্ববর্তী ধাপ
          </button>
          <button
            className={`custom-next ${
              activeIndex === visualData.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={activeIndex === visualData.length - 1}
          >
            পরবর্তী ধাপ ▶
          </button>
        </div>
        <div className="flex justify-center w-full">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Navigation]}
            className="mySwiper w-full max-w-screen-lg"
          >
            {visualData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="slide grid lg:grid-cols-5 grid-cols-1 gap-8">
                  <div className="col-span-2">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="rounded-md w-full shadow"
                    />
                  </div>
                  <div className="lg:col-span-3">
                    <h2 className="font-HindSiliguri text-[#0a993c] text-xl font-bold mb-5">
                      {`${new Intl.NumberFormat("bn-BD").format(data.id)}. ${
                        data.title
                      }`}
                    </h2>
                    <p className="text-justify w-11/12">
                      {data.description.map((desc, index) => (
                        <span
                          key={index}
                          className="block font-SolaimanLipi mt-3"
                        >
                          {desc}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Visual;
