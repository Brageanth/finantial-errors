import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listVideos } from "../graphql/queries";
import moment from "moment-timezone";
import VideoModel from "../models/VideoModel";
import "moment/locale/es";
import slugify from "slugify";

export default function ComingVideo({ id }: any) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    try {
      const videoData: any = await API.graphql(graphqlOperation(listVideos));
      const videos = videoData.data.listVideos.items;
      setVideos(videos);
    } catch (err) {
      console.log("error fetching videos");
    }
  }

  const renderVideo = (video: VideoModel) => {
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
          <div className="banner">
            <h3>{video.title}</h3>
            <a className="dia" href={`/${slugify(video.title)}`}>
              <img src={video.thumbnail} alt="" className="itemImag" />
            </a>
            <h3>{renderVideo(video)}</h3>
          </div>
        ))}
    </section>
  );
}
