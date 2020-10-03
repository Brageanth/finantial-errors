import React, { useState, useEffect } from "react";
import "./App.css";
import { API, graphqlOperation } from "aws-amplify";
import { listVideos } from "./graphql/queries";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

interface VideoData {
  data: {
    listVideos: {
      items: Array<object>;
    };
  };
}

function App() {
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

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/:id" component={VideoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
