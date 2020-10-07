import React, { useEffect } from "react";
import "../styles/page/home-page.css";

export default function HomePage() {
  useEffect(() => {
    window.location.href = "http://ilya.digital/registro-comunidadilya/";
  }, []);

  return <React.Fragment />;
}
