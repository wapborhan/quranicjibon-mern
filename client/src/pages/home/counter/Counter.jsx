import CounterList from "./CounterList";
// import { GiPayMoney, GiRubElHizb } from "react-icons/gi";

const Counter = () => {
  return (
    <section>
      <div className="w-full pt-80 white-layer pb-50 opc9 relative">
        <div
          className="fixed-bg patern-bg back-blend-multiply white-bg"
          // style="background-image: url(assets/images/pattern-bg.jpg);"
          style={{
            backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
          }}
        ></div>
        <div className="container mx-auto">
          <div className="facts-wrap w-100 text-center">
            <div className="sec-title text-center w-100">
              <div className="sec-title-inner d-inline-block">
                <i className="flaticon-rub-el-hizb thm-clr">
                  {/* <GiRubElHizb /> */}
                </i>
                <h2 className="mb-0">
                  <span>আল কুরআন এ রয়েছে</span>
                </h2>
              </div>
            </div>
            <CounterList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
