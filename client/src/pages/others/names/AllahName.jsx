import { useEffect, useState } from "react";
import NameList from "./NameList";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loader from "../../../components/shared/Loader";

const AllahName = () => {
  const [names, setNames] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic("/allah-name").then((res) => {
      setNames(res?.data?.data);
    });
  }, []);

  return (
    <div className="w-full lg:w-9/12 md:w-full px-2 pb-10 h-full mx-auto overflow-y-auto">
      <div className="border-2 p-4 text-xl rounded-xl text-center font-HindSiliguri">
        আবূ হুরাইরাহ (রাঃ) হতে বর্ণিত। তিনি বলেন, আল্লাহ্ তা‘আলার নিরানব্বই নাম
        আছে, এক কম একশত নাম। যে ব্যক্তি এ (নাম) গুলোর হিফাযাত করবে সে জান্নাতে
        প্রবেশ করবে। আল্লাহ্ বিজোড়। তিনি বিজোড় পছন্দ করেন। সহীহ বুখারী (হাদিসঃ
        ৬৪১০)
      </div>
      <div
        className={`${
          names.length > 0
            ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 py-5"
            : "grid lg:grid-cols-1 py-5"
        }`}
      >
        {names.length > 0 ? (
          names.map((name) => <NameList name={name} key={name.id} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default AllahName;
