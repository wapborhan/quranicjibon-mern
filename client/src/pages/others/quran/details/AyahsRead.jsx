const AyahsRead = ({ ayahs, loading }) => {
  return (
    <div
      className="space-y-4 text-justify lg:px-5 px-2 bg-white rounded-xl py-5"
      style={{ direction: "rtl" }}
    >
      {ayahs &&
        ayahs.map((ayah, idx) => {
          console.log();

          return (
            <>
              {loading ? (
                <div
                  key={idx}
                  className="h-4 bg-gray-200 w-10/12 ml-auto full"
                ></div>
              ) : (
                <span
                  key={idx}
                  className="p-2 group leading-10 mt-5 transition-all duration-500 text-black text-right text-2xl  font-kfgq"
                >
                  {/* {ayah?.uthmani} */}
                  {ayah?.uthmani.split(" ").map((word, idx) => {
                    return (
                      <span key={idx} className="inline-block ml-1">
                        {word}{" "}
                      </span>
                    );
                  })}
                  <span className="font-kfgq mr-3">
                    {parseInt(ayah.ayah_id).toLocaleString("ar-EG")}
                  </span>
                </span>
              )}
            </>
          );
        })}
    </div>
  );
};

export default AyahsRead;
