import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listVideos } from "../graphql/queries";
import "../styles/page/video-page.css";
import ComingVideo from "../components/comingVideos";
import moment from "moment-timezone";
import CountdownPage from "./CountdownPage";
import Comments from "./../components/comments";
import "../styles/page/home-page.css";

export default function VideoPage() {
  const [video, setVideo] = useState();
  const [videos, setVideos] = useState();
  const [ready, setReady] = useState(false);
  const videoId = window.location.pathname.split("/")[1].replace(/\D+/g, "");
  const [buyButton, setBuyButton] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    try {
      const videoData: any = await API.graphql(graphqlOperation(listVideos));
      const videos = videoData.data.listVideos.items;
      setVideos(videos);
      setVideo(
        videos.find((pVideo: any) => pVideo.title === `Clase #${videoId}`)
      );
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

  console.log(video);

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
      {workbook && (
        <section className="box-download">
          <div className="btn-download">
            <h3>Descarga tu workbook de la {video.title} aqui</h3>
            <a className="btn" target="_blank" href={video.pdf}>
              <div style={{ width: "15%" }}>
                <img
                  src="https://finantial-errors-cdn.s3.amazonaws.com/img/download-icon.svg"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h1>Descargar</h1>
            </a>
          </div>
          <img
            src={`https://finantial-errors-cdn.s3.amazonaws.com/img/Workbook-Clase${videoId}.png`}
            alt="WorkBook"
          />
        </section>
      )}
      {buyButton && (
        <section
          className="box-download"
          style={{ backgroundColor: "#d8d8d8", paddingBottom: "5vw" }}
        >
          <div className="btn-download">
            <a
              className="btn"
              rel="noopener noreferrer"
              target="_blank"
              href={
                "https://pay.hotmart.com/F20605481S?off=hev7z27q&checkoutMode=10"
              }
            >
              <h1>QUIERO UNIRME</h1>
            </a>
          </div>
        </section>
      )}
      <ComingVideo id={video?.id} videos={videos} />
      <section className="commit-box">
        <div className="redes">
          <div className="link-instgram">
            <img
              src="https://finantial-errors-cdn.s3.amazonaws.com/img/instagram.png"
              alt="Icon-Instagram"
            />
            <a
              href="https://www.instagram.com/YennyCastanedaOficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              @YennyCastanedaOficial
            </a>
          </div>
          <div className="link-instgram">
            <img
              src="https://finantial-errors-cdn.s3.amazonaws.com/img/instagram.png"
              alt="Icon-Instagram"
            />
            <a
              href="https://www.instagram.com/RamiroReyesOficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              @RamiroReyesOficial
            </a>
          </div>
        </div>
        <Comments
          video={video}
          videoId={videoId}
          postDate={
            videos?.find(
              (pVideo: any) =>
                pVideo.title === `Clase #${parseInt(videoId) + 1}`
            )?.date
          }
        />
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
