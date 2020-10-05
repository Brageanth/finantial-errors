import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listVideos } from "../graphql/queries";
import moment from "moment-timezone";

interface ComingVideoProps {
  id: string;
}

export default function ComingVideo({ id }: ComingVideoProps) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log(moment.tz.guess());
    console.log(
      moment
        .tz("2020-09-05 09:00", "America/Bogota")
        .tz(moment.tz.guess())
        .format("YYYY-MM-DD HH:mm")
    );
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

  return (
    <section>
      <h1>Proximamente</h1>
      {videos.filter((video: ) => video.id !== id)}
    </section>
  );
}
