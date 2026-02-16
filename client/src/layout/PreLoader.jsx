import Loader from "../components/shared/Loader";

const PreLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#f2f4f6]">
      <Loader />
    </div>
  );
};

export default PreLoader;
