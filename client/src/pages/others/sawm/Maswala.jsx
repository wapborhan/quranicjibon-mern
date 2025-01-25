import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Maswala = () => {
  const [isAccordingOpen, setIsAccordingOpen] = useState(0);
  const accordingData = [
    {
      title:
        "যে সমস্ত কারণে রোযা শুরু করার পর ভেঙ্গে ফেলার অনুমতি রয়েছে, তবে পরে ক্বাযা আদায় করতে হয়",
      description: `
০১. সফর অবস্থায় খুব কষ্ট হলে।
০২. অসুস্হ অবস্থায় ঔষুধ সেবন না করলে প্রাণ নাশের আশংকা হলে।
০৩. দুগ্ধ দায়িনী স্ত্রীলোকের নিজের বা দুগ্ধ শিশুর জীবনের ব্যাপারে আশংকা হলে।
০৪. বৃদ্ধাবস্থায় রোযা রাখার কারনে মারাত্মক দুর্বল হয়ে জীবনের ব্যাপারে আশংকা হলে।
০৫. আল্লাহর রাস্তায় জিহাদের জন্য।
০৬. বেহুঁশ বা পাগল হয়ে গেলে।
০৭. রোগ বেড়ে যাওয়ার বা নতুন কোন রোগ সৃষ্টি হওয়ার আশংকা হলে । ( তবে তা দ্বীনদার, পরযেগার, অভিজ্ঞ চিকিৎসকের পরামর্শ অনুযায়ী হতে হবে)
০৮. গর্ভ অবস্থায় নিজের বা সন্তানের প্রাণ নাশের আশংকা হলে।
০৯. এমন পিপাসা বা ক্ষুধা যাতে প্রাণের আশংকা হয়।


( কেহ যদি অন্যকে দিয়ে কাজ করাতে পারে, বা জীবিকা অর্জনের জন্য অন্য কোন কাজি করার সুযোগ থাকা সত্ত্বেও টাকার লোভে এমন কাজ করল, যার কারনে ক্ষধা বা পিপাসায় আক্রান্ত হল, তাহলে তাঁর রোজা ছাড়ার অনুমতি নাই )
        `,
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design",
      description: `Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.`,
    },

    {
      title: `Define the term "responsive design" in web development.`,
      description: `Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.`,
    },

    {
      title: `What is the significance of color theory in design`,
      description: `Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.`,
    },
  ];

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="masala mx-10">
      <div className="flex gap-3 flex-col w-full">
        {accordingData?.map((according, index) => (
          <article
            key={index}
            className="border-b border-[#e5eaf2] rounded py-3"
          >
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full"
              onClick={() => handleClick(index)}
            >
              <h2 className="text-[#3B9DF8] font-[600] text-[1.2rem]">
                {according.title}
              </h2>
              <p>
                <FaChevronDown
                  className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${
                    isAccordingOpen === index &&
                    "rotate-[180deg] !text-[#3B9DF8]"
                  }`}
                />
              </p>
            </div>
            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                isAccordingOpen === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-[#424242] text-[0.9rem] overflow-hidden">
                {according.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Maswala;
