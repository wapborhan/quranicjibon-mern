import { BiSearch } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";

const SideContentHeader = ({ content, handleListActive }) => {
  return (
    <div className="md:min-h-[120px] relative transition-all duration-500 ease-in-out">
      <div
        className="close bg-white absolute cursor-pointer right-0 -top-2 p-1 shadow-sm border-2 rounded-full md:hidden"
        onClick={handleListActive}
      >
        <CgCloseO />
      </div>
      <div className="flex justify-center gap-1 py-3 px-6 md:border-b !bg-transparent dark:border-gray-500 text-xl ">
        {content?.length > 0 &&
          content?.map((item, idx) => {
            return (
              <div
                key={idx}
                // onClick={() => setState("book")}
                className={`w-full p-1  ${
                  item?.status === "active" ? "bg-[#2b9e76] text-white" : ""
                } rounded-full text-center border-2 border-gray-200 `}
              >
                {item.name}
              </div>
            );
          })}
      </div>
      <div>
        <div className="flex justify-between items-center space-x-2 px-3 py-1 mx-2 mb-4 mt-2 bg-body-grey-bg rounded-lg dark:bg-darkz">
          <BiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for filter"
            className="bg-body-grey-bg w-full py-2 font-light text-sm focus:outline-none dark:bg-darkz"
          />
        </div>
      </div>
    </div>
  );
};

export default SideContentHeader;
