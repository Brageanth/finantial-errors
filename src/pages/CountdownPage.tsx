import moment from "moment";
import React, { useEffect, useState } from "react";
import BannerProducto from "../components/bannerProducto";
import "./../styles/page/CountdownPage.css";

export default function CountdownPage({ date, ready }: any) {
  const [countdown, setCountdown] = useState(
    moment.duration(moment(date).valueOf() - moment().valueOf(), "milliseconds")
  );

  useEffect(() => {
    const diff = moment.duration(
      moment(date).valueOf() - moment().valueOf(),
      "milliseconds"
    );

    if (diff.asMilliseconds() > 0) {
      setTimeout(() => setCountdown(diff), 1000);
    } else {
      ready();
    }
  }, [countdown]);

  const finalNumber = (number: Number) =>
    number.toString().length < 2 ? `0${number}`.slice(-2) : number;

  return (
    <>
      <BannerProducto />
      <div className="containerCountDown">
        <div className="rectangleCountdown">
          <h2 className="title countdown" style={{ fontSize: "3vw" }}>
            La clase se liberará en:
          </h2>
          <h1 className="title countdown">
            {finalNumber(countdown.days() * 24 + countdown.hours())}:
            {finalNumber(countdown.minutes())}:
            {finalNumber(countdown.seconds())}
          </h1>
        </div>
      </div>
    </>
  );
}
