const AyahsRead = ({ ayahs, loading }) => {
  return (
    <div className="space-y-2 flex flex-row-reverse justify-start flex-wrap">
      {ayahs &&
        ayahs.map((ayah, idx) => {
          return (
            <span
              key={idx}
              className={`p-2 group  justify-center bg-white border-gray-100 dark:border-gray-0 border-[0.3px] dark:border-[0px]  transition-all duration-500 dark:bg-darkz shadow-sm ${
                loading && "animate-pulse"
              }`}
            >
              {loading ? (
                <div className="h-4 bg-gray-700 w-10/12 ml-auto full flex"></div>
              ) : (
                <span className="text-black text-right text-2xl dark:!text-black font-kfgq">
                  {ayah?.uthmani}
                  <b className="font-kfgq mr-3">
                    {parseInt(ayah.ayah_id).toLocaleString("ar-EG")}
                  </b>
                </span>
              )}
            </span>
          );
        })}
    </div>
  );
};

export default AyahsRead;
