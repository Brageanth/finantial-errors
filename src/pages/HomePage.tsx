import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listVideos } from "../graphql/queries";
import "../styles/page/home-page.css";

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
    window.location.href = "http://ilya.digital/registro-comunidadilya/";
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
    <body>
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
          <h2>Dale clic al video para ver la clase #1</h2>
          <iframe src="https://player.vimeo.com/video/107463665?title=0&byline=0&portrait=0"></iframe>
        </div>
      </main>
      <section className="box-download">
        <div className="btn-download">
          <h3>Descarga tu workbook de la clase #1 aqui</h3>
          <a className="btn" href="#">
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
      <section className="box-banner">
        <div className="banner">
          <h3>Clase #2</h3>
          <a className="dia" href="#">
            <img
              src="../img/Flyer Los niños y el dinero (6).png"
              alt=""
              className="itemImag"
            />
          </a>
          <h3>Miercoles 07</h3>
        </div>
        <div className="banner">
          <h3>Clase #3</h3>
          <a className="dia" href="#">
            <img
              src="../img/Flyer Los niños y el dinero (7).png"
              alt=""
              className="itemImag"
            />
          </a>
          <h3>Viernes 02</h3>
        </div>
        <div className="banner">
          <h3>Clase #4</h3>
          <a className="dia" href="#">
            <img
              src="../img/Flyer Los niños y el dinero (8).png"
              alt=""
              className="itemImag"
            />
          </a>
          <h3>Lunes 12</h3>
        </div>
      </section>
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
        <div className="commits">
          <h2>
            Queremos saber que te parecio esta clase Dejanos tus comentarios
          </h2>
          <div>
            <textarea
              name="commit"
              id=""
              cols={75}
              rows={2}
              placeholder={"Escribe tu comentario..."}
            ></textarea>
          </div>
        </div>
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
    </body>
  );
}
