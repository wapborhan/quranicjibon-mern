import { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    remaining: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    isExpired: false,
  };
  timer;
  distance;

  componentDidMount() {
    this.setDate();
    this.counter();
  }

  setDate = () => {
    const { targetDate, targetTime } = this.props,
      // Get todays date and time
      now = new Date().getTime(),
      // Set the date we're counting down to
      countDownDate = new Date(targetDate + " " + targetTime).getTime();

    // Find the distance between now and the count down date
    this.distance = countDownDate - now;

    // target date and time is less than current date and time
    if (this.distance < 0) {
      clearInterval(this.timer);
      this.setState({ isExpired: true });
    } else {
      this.setState({
        remaining: {
          days: Math.floor(this.distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((this.distance % (1000 * 60)) / 1000),
        },
        isExpired: false,
      });
    }
  };

  counter = () => {
    this.timer = setInterval(() => {
      this.setDate();
    }, 1000);
  };

  render() {
    const { remaining, isExpired } = this.state,
      { targetDate, targetTime } = this.props;

    return (
      <Fragment>
        <div className=" bg-white rounded-lg p-6 shadow-sm">
          {" "}
          <h1 className="font-HindSiliguri title text-center text-3xl mb-6">
            রমযান আগমনের সম্ভাব্য বাকী
          </h1>
          {!isExpired && targetDate && targetTime ? (
            <div className="counter !flex flex-wrap">
              {Object.entries(remaining).map((el, i) => (
                <div key={i} className="entry">
                  <div key={el[1]} className="entry-value">
                    <span className="count top curr flipTop">{el[1] + 1}</span>
                    <span className="count top next">{el[1]}</span>
                    <span className="count bottom next flipBottom">
                      {el[1]}
                    </span>
                    <span className="count bottom curr">{el[1] + 1}</span>
                  </div>
                  <div className="entry-title">{el[0].toUpperCase()}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="alert-danger">Expired</p>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Counter;
