import "../../assets/stylesheet/homepage/all.min.css";
import "../../../src/index.css";
import "../../assets/stylesheet/homepage/flaticon.css";
import "../../assets/stylesheet/homepage/color.css";
import "../../assets/stylesheet/homepage/style.css";
import "../../assets/stylesheet/homepage/responsive.css";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import Prayer from "./prayer/Prayer";
import Listen from "./listen/Listen";
import Counter from "./counter/Counter";
import Pillar from "./pillar/Pillar";
import Footer from "./footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Prayer />
      <Listen />
      {/* <Quran suras={data} /> */}
      <Counter />
      <Pillar />
      <Footer />
    </>
  );
};

export default HomePage;
