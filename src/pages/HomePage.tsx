import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listVideos } from "../graphql/queries";

interface VideoData {
  data: {
    listVideos: {
      items: Array<object>;
    };
  };
}

export default function HomePage() {
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
      console.log("error fetching todos");
    }
  }

  return <React.Fragment />;
}
