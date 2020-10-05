import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listVideos } from "../graphql/queries";
import "../styles/page/video-page.css";
import ComingVideo from "../components/comingVideos";
import moment from "moment-timezone";
import CountdownPage from "./CountdownPage";
import Comments from "./../components/comments";

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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    try {
      console.log("falla");
      const videoData: any = await API.graphql(graphqlOperation(listVideos));
      const videos = videoData.data.listVideos.items;
      setVideo(videos.pop());
    } catch (err) {
      console.log("error fetching todos", err);
    }
  }

  if (!video) {
    return <React.Fragment />;
  }

  if (moment(video?.date).isAfter(moment()) && !ready) {
    return <CountdownPage date={video?.date} ready={() => setReady(true)} />;
  }

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
      <ComingVideo video={video?.id} />
      <Comments video={video} />
    </div>
  );
}
