import Card from "../../../components/shared/Card";
import DefaultMeta from "../../../provider/DefaultMeta";
import { nameDatas } from "./name";

const IslamicNames = () => {
  return (
    <div className="sawm">
      <DefaultMeta title="রমযান" />{" "}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 py-5 justify-center">
        {nameDatas &&
          nameDatas.map((data) => <Card data={data} key={data.id} />)}
      </div>
    </div>
  );
};

export default IslamicNames;
