import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listVideos } from "../graphql/queries";
import "../styles/page/video-page.css";
import ComingVideo from "../components/comingVideos";
import moment from "moment-timezone";
import CountdownPage from "./CountdownPage";
import Comments from "./../components/comments";
import "../styles/page/home-page.css";
import Footer from "../components/footer";

export default function VideoPage() {
  const [video, setVideo] = useState();
  const [videos, setVideos] = useState();
  const [ready, setReady] = useState(false);
  const videoId = window.location.pathname.split("/")[1].replace(/\D+/g, "");
  const workbook = videoId !== "4";
  const buyButton = !workbook;

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
    <div className="home-page">
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
          <h2 className="h2-main-video">
            Dale clic al video para ver la {video.title}
          </h2>
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
        <section className="box-download" style={{ padding: "5vw 0" }}>
          <div className="btn-download">
            <p className="upperButton1">
              Ya son muchas familias logrando resultados que generan bienestar,
              tranquilidad, prosperidad y felicidad y esto también es para ti.
            </p>
            <p className="upperButton2">
              Pide una cita ahora mismo SÓLO si quieres saber más sobre nuestro
              curso de Los Niños y el Dinero haciendo click en el botón de
              abajo, te llevará a WhatsApp y entrarás en contacto con un miembro
              de nuestro equipo.
            </p>
            <a
              className="btn"
              rel="noopener noreferrer"
              target="_blank"
              href={
                "https://api.whatsapp.com/send?phone=573213135626&text=%C2%A1Hola!%20%C2%BFCu%C3%A1l%20es%20la%20disponibilidad%20para%20mi%20cita%20de%20Los%20Ni%C3%B1os%20y%20El%20Dinero?"
              }
            >
              <h1>QUIERO MI CITA</h1>
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
        <Comments videoId={videoId} />
      </section>
      <Footer />
    </div>
  );
}
