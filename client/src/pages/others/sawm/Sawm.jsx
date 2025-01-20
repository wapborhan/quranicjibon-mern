import "./Sawm.css";
import DefaultMeta from "../../../provider/DefaultMeta";
import Counter from "./Counter";
import TimeTable from "./TimeTable";

const Sawm = () => {
  const targetDate = "Mar 01, 2025";
  const targetTime = "18:25:00";

  return (
    <div className="sawm">
      <DefaultMeta title="রমযান" />{" "}
      <Counter targetDate={targetDate} targetTime={targetTime} />
      <TimeTable />
    </div>
  );
};

export default Sawm;