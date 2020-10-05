import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { listVideos } from "../graphql/queries";
import "../styles/page/video-page.css";
import { title } from "process";
import ComingVideo from "../components/comingVideos";

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

  if (!video) {
    return <React.Fragment />;
  }
  console.log(video);
  return (
    <div className="container">
      <section className="box-video">
        <iframe
          className="video"
          src={video.url}
          allow="autoplay; fullscreen"
        ></iframe>
        <div className="box-text">
          <h1 className="title">{video.title}</h1>
          {video.pdf && (
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              ea, architecto eveniet velit corporis voluptatibus officia
              repellendus dignissimos delectus quia dolor dicta esse maiores qui
              nihil atque, fugiat doloremque magni. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vitae, ea, architecto eveniet velit
              corporis.
            </p>
          )}
        </div>
        <div className="botones">
          {video.pdf && (
            <a className="boton boton-amarillo" href={video.pdf}>
              PDF
            </a>
          )}
        </div>
      </section>
      <ComingVideo video={video.id} />
    </div>
  );
}
