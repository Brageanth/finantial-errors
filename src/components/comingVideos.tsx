import React from "react";
import moment from "moment-timezone";
import VideoModel from "../models/VideoModel";
import "moment/locale/es";
const momentTime = require("moment");

export default function ComingVideo({ id, videos }: any) {
  const renderVideo = (video: VideoModel) => {
    if (momentTime(video.date).isBefore(momentTime())) {
      return "Ya disponible, míralo aquí";
    }
    return moment
      .tz(video.date, "America/Bogota")
      .tz(moment.tz.guess())
      .locale("es")
      .format("dddd DD");
  };

  return (
    <section className="box-banner">
      {videos
        .filter((video: VideoModel) => video.id !== id)
        .slice(0)
        .sort((a: any, b: any) =>
          moment(a.date).isBefore(moment(b.date)) ? -1 : 1
        )
        .map((video: VideoModel) => (
          <a
            className="banner"
            href={`/clase${video.title.replace(/\D+/g, "")}`}
          >
            <h3>{video.title}</h3>
            <div className="dia">
              <img src={video.thumbnail} alt="" className="itemImag" />
            </div>
            <h3>{renderVideo(video)}</h3>
          </a>
        ))}
    </section>
  );
}
