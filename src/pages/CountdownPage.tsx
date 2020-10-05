import moment from "moment";
import React, { useEffect, useState } from "react";
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
    if (diff) {
      setTimeout(() => setCountdown(diff), 1000);
    } else {
      ready();
    }
  }, [countdown]);

  return (
    <div className="containerCountDown">
      <h1 className="title">
        04 errores financieros fatales que podríamos estar cometiendo con
        nuestros hijos
      </h1>

      <div className="rectangleCountdown">
        <h2 className="title countdown" style={{ fontSize: "3vw" }}>
          La clase se liberará en:
        </h2>
        <h1 className="title countdown">
          {countdown.hours()}:{countdown.minutes()}:{countdown.seconds()}
        </h1>
      </div>
    </div>
  );
}