import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { API, graphqlOperation } from "aws-amplify";
import { listVideos } from "./graphql/queries";

interface VideoData {
  data: {
    listVideos: {
      items: Array<object>;
    };
  };
}

function App() {
  const initialState = { name: "", description: "" };
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    try {
      const videoData: any = await API.graphql(graphqlOperation(listVideos));
      console.log(videoData);
      const videos = videoData.data.listVideos.items;
      setVideos(videos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
