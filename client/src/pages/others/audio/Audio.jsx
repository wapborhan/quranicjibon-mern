import { useEffect, useState } from "react";

const Audio = () => {
  const [surasAudiolist, setSurasAudiolist] = useState();

  useEffect(() => {
    async function getData() {
      const url = "/data/surahs.json";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setSurasAudiolist(json?.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

  console.log(surasAudiolist);

  return (
    <div>
      {surasAudiolist.slice(0, 5).map((item, idx) => {
        return (
          <audio controls key={idx}>
            <source
              src={decodeURIComponent(item?.recitation)}
              type="audio/ogg"
            />
            <source
              src={decodeURIComponent(item?.recitation)}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        );
      })}
    </div>
  );
};

export default Audio;
