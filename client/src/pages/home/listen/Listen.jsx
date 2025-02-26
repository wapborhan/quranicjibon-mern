import { useState } from "react";

// import PattBG from "../..;
// import MockUp from "../..";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaKaaba, FaMosque } from "react-icons/fa";

const Listen = () => {
  const [state, setState] = useState({
    currentMusicIndex: 0,
    playlist: [
      {
        type: "মাদীনী",
        ar_name: "الفاتحة",
        sura_no: 1,
        total_ayat: 7,
        audio:
          "https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3",
        sura_name: "আল-ফাতিহা",
      },
    ],
    suraName: "",
  });

  const handleClickPrevious = () => {
    setState((prevState) => ({
      ...prevState,
      currentMusicIndex:
        prevState.currentMusicIndex === 0
          ? state.playlist.length - 1
          : prevState.currentMusicIndex - 1,
    }));
  };

  const handleClickNext = () => {
    setState((prevState) => ({
      ...prevState,
      currentMusicIndex:
        prevState.currentMusicIndex < state.playlist.length - 1
          ? prevState.currentMusicIndex + 1
          : 0,
    }));
  };

  const { currentMusicIndex } = state;

  return (
    <section>
      <div className="w-full pt-170 pt-64 relative">
        <div
          className="fixed-bg"
          style={{
            backgroundImage: `url("/assets/images/parallax-bg5.jpg")`,
          }}
        ></div>
        <img
          height={3000}
          width={1200}
          className="img-fluid sec-top-mckp absolute"
          src="/assets/images/sec-top-mckp5.png"
          alt="Sec Top Mockup 5"
        />
        <div className="container mx-auto py-20 px-8">
          <div className="about-wrap3 w-full">
            <div className="flex flex-wrap items-center">
              <div className="lg:w-5/12 w-full mx-auto order-1 lg:order-2">
                <div className="plyr-wrp v3 w-full">
                  <h3
                    className="mb-0 text-center pat-bg dark-layer2 opc5 back-blend-multiply bg-color1"
                    style={{
                      backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
                    }}
                  >
                    <span>কুরআন অডিও শুনুন</span>
                  </h3>
                  <div
                    className="plyr-inner w-full pat-bg thm-layer opc65 back-blend-multiply thm-bg"
                    style={{
                      backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
                    }}
                  >
                    <div className="plyr grid grid-cols-3 text-center v3 w-full">
                      <div className="flex items-center justify-center">
                        {state?.playlist[currentMusicIndex]?.type ===
                        "মাক্কী" ? (
                          <FaKaaba size={40} />
                        ) : (
                          // <h1>g</h1>
                          <FaMosque size={40} />
                          // <h3>ff</h3>
                        )}
                      </div>
                      <h3 className="font-ar">
                        {state?.playlist[currentMusicIndex]?.ar_name}
                        <br />
                        <span>
                          {state?.playlist[currentMusicIndex]?.sura_name}
                        </span>
                        <br />
                      </h3>
                      <div>
                        <h4>
                          নম্বর: {state?.playlist[currentMusicIndex]?.sura_no}
                        </h4>
                        <h4>
                          আয়াত: {state?.playlist[currentMusicIndex]?.total_ayat}
                        </h4>
                      </div>
                    </div>
                    <div className="playlist p-6 list-none">
                      <AudioPlayer
                        onEnded={handleClickNext}
                        autoPlayAfterSrcChange={true}
                        showSkipControls={true}
                        showJumpControls={false}
                        src={state?.playlist[currentMusicIndex]?.audio}
                        onClickPrevious={handleClickPrevious}
                        onClickNext={handleClickNext}
                        className="!bg-transparent !shadow-none !border-none !fill-white !text-white !border-white"
                        style={{ color: "!white" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-7/12 order-2 lg:order-1">
                <div className="about-inner3 w-full">
                  <div className="text-4xl thm-clr mb-4">
                    <span>স্বাগতম Quranic Jibon এ</span>
                  </div>
                  <p className="mb-4 text-dark">
                    ইসলাম (আরবি: আল-ইসলাম - [الإسلام]) একটি একেশ্বরবাদী এবং
                    ইব্রাহিমীয় ধর্মবিশ্বাস যার মূল শিক্ষা হল, এক আল্লাহ ছাড়া
                    আর কোন স্রষ্টা নেই এবং হযরত মুহাম্মাদ সাঃ হলেন আল্লাহর
                    প্রেরিত সর্বশেষ ও চূড়ান্ত নবি ও রাসূল।
                  </p>
                  <p className="mb-0 text-dark">
                    আল্লাহ দয়ালু, করুনাময়, এক ও অদ্বিতীয় এবং একমাত্র
                    ইবাদতযোগ্য অভিভাবক। মানবজাতিকে পথ প্রদর্শনের জন্য তিনি
                    যুগে-যুগে অনেক নবি-রাসূল, আসমানী কিতাব এবং নিদর্শন
                    পাঠিয়েছেন। ইসলামে প্রধান ধর্মগ্রন্থ হলো পবিত্র কুরআন, যা
                    স্বয়ং আল্লাহর বাণী; আর সর্বশেষ ও চূড়ান্ত নবি মুহাম্মদ (ﷺ)
                    এর কথা, কাজ ও মৌনসম্মতিকে সুন্নাহ বলা হয় যা হাদিস নামে
                    লিপিবদ্ধ রয়েছে। তবে সমস্ত সুন্নাহই হাদিস, কিন্তু সমস্ত
                    হাদিস সুন্নাহ নয়।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listen;
