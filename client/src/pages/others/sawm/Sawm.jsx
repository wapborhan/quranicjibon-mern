import "./Sawm.css";
import DefaultMeta from "../../../provider/DefaultMeta";
import Counter from "./Counter";
import TimeTable from "./TimeTable";
import Card from "../../../components/shared/Card";
import Maswala from "../maswala/Maswala";
// import Maswala from "./Maswala";

const Sawm = () => {
  const targetDate = "Mar 01, 2025";
  const targetTime = "18:25:00";

  const salatCard = [
    {
      id: 1,
      name_bn: "রোজার দোয়া",
      icon: "hy",
      link: "/sawm/dowa",
    },
    {
      id: 2,
      name_bn: "তারাবীহ",
      icon: "hy",
      link: "/sawm/",
    },
    {
      id: 3,
      name_bn: "রোজায় স্বাস্থ্য পরামর্শ ",
      icon: "hy",
      link: "/sawm/tarabih",
    },
    {
      id: 4,
      name_bn: "রোজা নিয়ে তথ্য",
      icon: "hy",
      link: "/sawm/",
    },
    {
      id: 5,
      name_bn: "রোজার বয়ান ভিডিও",
      icon: "hy",
      link: "/sawm/",
    },
    {
      id: 6,
      name_bn: "খতমে কুরআন",
      icon: "hy",
      link: "/sawm/",
    },
    {
      id: 7,
      name_bn: "ইতিকাফ",
      icon: "hy",
      link: "/sawm/",
    },
    {
      id: 8,
      name_bn: "লাইলাতুল কদর",
      icon: "hy",
      link: "/sawm/",
    },
    {
      id: 9,
      name_bn: "ফিতরা",
      icon: "hy",
      link: "/sawm/",
    },
    {
      id: 10,
      name_bn: "ঈদ",
      icon: "hy",
      link: "/sawm/",
    },
    {
      id: 11,
      name_bn: "মাসাইল",
      icon: "hy",
      link: "/sawm/",
    },
  ];

  return (
    <div className="sawm">
      <DefaultMeta title="রমযান" />{" "}
      {/* <Counter targetDate={targetDate} targetTime={targetTime} /> */}
      <TimeTable />
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 py-5">
        {salatCard &&
          salatCard.map((data) => <Card data={data} key={data._id} />)}
      </div> */}
      <div className="bg-white rounded-lg lg:p-6 p-2 shadow-sm mt-5 space-y-4">
        <h1 className="font-HindSiliguri text-2xl font-bold w-full pb-2">
          মাসলাহ
        </h1>
      </div>
      <Maswala />
    </div>
  );
};

export default Sawm;
