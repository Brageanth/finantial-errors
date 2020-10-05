import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listVideos } from "../graphql/queries";
import moment from "moment-timezone";
import VideoModel from "../models/VideoModel";
import "moment/locale/es";

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
    <section>
      <h1>Proximamente</h1>
      {videos
        .filter((video: VideoModel) => video.id !== id)
        .map((video: VideoModel) => renderVideo(video))}
    </section>
  );
}
