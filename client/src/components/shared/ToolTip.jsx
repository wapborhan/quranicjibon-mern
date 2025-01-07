const ToolTip = ({ title }) => {
  return (
    <div className="absolute top-2 left-[65px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
      <p className="text-[0.9rem] w-max bg-gray-800 text-white rounded px-3 py-1 ">
        {title}
      </p>{" "}
      <span className="w-[15px] h-[15px] bg-gray-800 rotate-[45deg] absolute top-[50%] transform translate-y-[-50%] left-[-5%] z-[-1]"></span>
    </div>
  );
};

export default ToolTip;
