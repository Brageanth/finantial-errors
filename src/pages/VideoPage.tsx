import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { listVideos } from "../graphql/queries";

interface VideoData {
  data: {
    listVideos: {
      items: Array<object>;
    };
  };
}

export default function VideoPage() {
  // TODO: uncomment in second stage
  // const { id } = useParams();

  const [video, setVideo] = useState();

  useEffect(() => {});

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    try {
      const videoData: any = await API.graphql(graphqlOperation(listVideos));
      const videos = videoData.data.listVideos.items;
      setVideo(videos.pop());
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  return <React.Fragment />;
}
