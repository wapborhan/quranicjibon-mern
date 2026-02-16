import { useParams } from "react-router-dom";
import { nameDatas } from "./name";

const InfoDEtails = () => {
  const { link } = useParams();
  const nameData = nameDatas.find((name) => name.link === link);
  console.log(nameData);

  return (
    <div className="bg-white p-5 rounded-md">
      {nameData?.description.split("\n").map((para, index) => (
        <p className="pb-5 text-xl" key={index}>
          {para}
        </p>
      ))}
    </div>
  );
};

export default InfoDEtails;
