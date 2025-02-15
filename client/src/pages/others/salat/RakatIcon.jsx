import bengaliNumerals from "../../../components/shared/bengaliNumerals";

const RakatIcon = ({ rakat, color, title }) => {
  return (
    <div className="lg:h-12 lg:w-12 w-6 h-6 group sm-max:w-10 xl:w-10  flex items-center justify-center relative">
      <h3 className="text-dark dark:bg-barkz text-white  dark:text-hadith-deepoffwhite  false style-Kalpurush absolute md-max:text-base  font-medium font-HindSiliguris  group-hover:opacity-100  lg:text-lg text-sm">
        {rakat && bengaliNumerals(rakat)}
        {title && title}
      </h3>
      <svg
        className={`!fill-[${color}] dark:fill-[${color}] false`}
        width="56"
        height="62"
        viewBox="0 0 56 62"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
          strokeWidth="1.5"
        ></path>
      </svg>
    </div>
  );
};

export default RakatIcon;
