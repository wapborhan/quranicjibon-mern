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
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Quran from "./quran/Quran";

const HomePage = () => {
  const [suras, setSuras] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/quran/suras").then((res) => {
      const suras = res.data?.data;
      const limitSura = suras.slice(0, 8);
      setSuras(limitSura);
    });
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Prayer />
      <Listen />
      <Quran suras={suras} />
      <Counter />
      <Pillar />
      <Footer />
    </>
  );
};

export default HomePage;
