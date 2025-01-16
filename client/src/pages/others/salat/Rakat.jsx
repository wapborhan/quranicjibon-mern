import bengaliNumerals from "../../../components/shared/bengaliNumerals";
import RakatIcon from "./RakatIcon";

const Rakat = () => {
  return (
    <section>
      <div className="rakat bg-white dark:bg-darks dark:text-dark-text mt-10 p-4 rounded-xl w-full">
        <h1 className="font-HindSiliguri text-2xl text-center font-medium py-5">
          {" "}
          ৫ ওয়াক্ত নামাজের রাকাত সমূহ
        </h1>
        <div className="flex items-start gap-5 w-full">
          <table className="table">
            <thead>
              <tr>
                <td>ওয়াক্ত</td>
                <td>ফরয এর আগে</td>
                <td>ফরয</td>
                <td colSpan={4}>ফরয এর পরে</td>
                <td>মোট</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ফজর</td>
                <td>
                  <RakatIcon color="#2b9e76" rakat="2" />
                </td>
                <td>
                  <RakatIcon color="#ed5746" rakat="2" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="font-HindSiliguri"> {bengaliNumerals(4)}</td>
              </tr>
              <tr>
                <td>যোহর</td>
                <td>
                  <RakatIcon color="#2b9e76" rakat="4" />
                </td>
                <td>
                  <RakatIcon color="#ed5746" rakat="4" />
                </td>
                <td>
                  <RakatIcon color="#2b9e76" rakat="2" />
                </td>
                <td>
                  <RakatIcon color="#6667AB" rakat="2" />
                </td>
                <td></td>
                <td></td>
                <td className="font-HindSiliguri"> {bengaliNumerals(12)}</td>
              </tr>
              <tr>
                <td>জুমু’আ</td>
                <td>
                  <RakatIcon color="#2b9e76" rakat="4" />
                </td>
                <td>
                  <RakatIcon color="#ed5746" rakat="2" />
                </td>
                <td>
                  <RakatIcon color="#2b9e76" rakat="4" />
                </td>
                <td>
                  <RakatIcon color="#2b9e76" rakat="2" />
                </td>
                <td>
                  <RakatIcon color="#6667AB" rakat="2" />
                </td>
                <td></td>
                <td className="font-HindSiliguri"> {bengaliNumerals(14)}</td>
              </tr>
              <tr>
                <td>আসর</td>
                <td>
                  <RakatIcon color="#93D1F3" rakat="4" />
                </td>
                <td>
                  <RakatIcon color="#ed5746" rakat="4" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="font-HindSiliguri"> {bengaliNumerals(8)}</td>
              </tr>
              <tr>
                <td>মাগরিব</td>
                <td></td>
                <td>
                  <RakatIcon color="#ed5746" rakat="3" />
                </td>
                <td>
                  <RakatIcon color="#2b9e76" rakat="2" />
                </td>
                <td>
                  <RakatIcon color="#6667AB" rakat="2" />
                </td>
                <td></td>
                <td></td>
                <td className="font-HindSiliguri"> {bengaliNumerals(7)}</td>
              </tr>
              <tr>
                <td>এশা</td>
                <td>
                  <RakatIcon color="#93D1F3" rakat="4" />
                </td>
                <td>
                  <RakatIcon color="#ed5746" rakat="4" />
                </td>
                <td>
                  <RakatIcon color="#2b9e76" rakat="2" />
                </td>
                <td>
                  <RakatIcon color="#6667AB" rakat="2" />
                </td>
                <td>
                  <RakatIcon color="#FF9A1F" rakat="3" />
                </td>
                <td>
                  <RakatIcon color="#6667AB" rakat="2" />
                </td>
                <td className="font-HindSiliguri"> {bengaliNumerals(17)}</td>
              </tr>
            </tbody>
          </table>
          <div className="instraction flex flex-col justify-start items-start">
            <div className="ins-list">
              <span className="text bg-[#ed5746]">ফরয</span>
              <span>যেসকল নামাজ মুসলিমদের জন্য পড়া বাধ্যতামূলক।</span>
            </div>
            <div className="ins-list">
              <span className="text bg-[#FF9A1F]">ওয়াজিব</span>
              <span>
                প্রয়োজনীয় নামাজ যা ফরজ নামাজের পরে গুরুত্বের দিক থেকে আসে।
              </span>
            </div>
            <div className="ins-list">
              <span className="text bg-[#2b9e76]">সুন্নতে মুয়াক্কাদা</span>
              <span>
                ফরজ-ওয়াজিবের মতো অপরিহার্য না হলেও রাসুলুল্লাহ (ﷺ) নিয়মিত আমল
                করতেন।
              </span>
            </div>
            <div className="ins-list">
              <span className="text bg-[#93D1F3]">
                সুন্নতে গায়রে মুয়াক্কাদা
              </span>
              <span>
                রাসুলুল্লাহ (ﷺ) নিয়মিত আমল করলেও ওজরবিহীন মাঝে-মাঝে ছেড়ে দিতেন।
              </span>
            </div>
            <div className="ins-list">
              <span className="text bg-[#6667AB]">নফল</span>
              <span>স্বেচ্ছায় নামাজ, এগুলো পালন করলে অনেক সওয়াব রয়েছে।</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rakat;
