import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listVideos } from "../graphql/queries";
import "../styles/page/video-page.css";
import ComingVideo from "../components/comingVideos";
import moment from "moment-timezone";
import CountdownPage from "./CountdownPage";
import Comments from "./../components/comments";
import "../styles/page/home-page.css";

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
  const [videos, setVideos] = useState();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    try {
      const videoData: any = await API.graphql(graphqlOperation(listVideos));
      const videos = videoData.data.listVideos.items;
      setVideos(videos);
      const videoId = window.location.pathname.split("/")[1].replace("-", " #");
      setVideo(videos.find((pVideo: any) => pVideo.title === videoId));
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
    <div>
      <header className="header">
        <div className="header-text">
          <h2>04</h2>
          <h1 className="h1-span">
            errores financieros fatales que podriamos estar cometiendo con
            nuestros hijos
          </h1>
        </div>
      </header>
      <main className="main-video">
        <div className="video">
          <h2>Dale clic al video para ver la {video.title}</h2>
          <iframe src={video.url}></iframe>
        </div>
      </main>
      <section className="box-download">
        <div className="btn-download">
          <h3>Descarga tu workbook de la {video.title} aqui</h3>
          <a className="btn" target="_blank" href={video.pdf}>
            <img
              src="https://lh3.googleusercontent.com/proxy/BzNuMX1RAf77qbUXeJ_6JxNiFPy7EVNTlmeJw2eWmuwUU8K3gN8EQXvvzrWUOmifMUaDYnuQphDRSAESYErIM3d_cIXirp-zHsh1YEn9APX3IDcye5LP_9Xjgeq_egVs"
              alt="Botton-Donwload"
              style={{ fill: "white" }}
            />
            <h1>Descargar</h1>
          </a>
        </div>
        <img src="../img/Workbook-Clase1 (2).png" alt="WorkBook" />
      </section>
      <ComingVideo id={video?.id} />
      <section className="commit-box">
        <div className="redes">
          <div className="link-instgram">
            <img src="../img/instagram.png" alt="Icon-Instagram" />
            <a href="#">@YennyCastanedaOficial</a>
          </div>
          <div className="link-instgram">
            <img src="../img/instagram.png" alt="Icon-Instagram" />
            <a href="#">@RamiroReyesOficial</a>
          </div>
        </div>
        <Comments video={video} />
      </section>
      <footer>
        <div className="pie">
          <p>©2020 Los niños y el dinero Todos los derechos reservados</p>
          <a
            className="linkLegal"
            href="https://ilya.digital/aviso-legal-y-terminos-de-uso/"
          >
            Aviso Legal y Términos de Uso
          </a>
        </div>
      </footer>
    </div>
  );
}
