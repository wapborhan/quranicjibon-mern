import { useEffect, useState } from "react";

const ProgressBar = ({ progress, max = 31 }) => {
  const [width, setWidth] = useState(0);

  const percentage = Math.round((progress / max) * 100);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setWidth(i);

      if (i >= percentage) {
        clearInterval(timer);
      }
    }, 15);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div className="meter">
      <span style={{ width: `${width}%` }} />
    </div>
  );
};

export default ProgressBar;
