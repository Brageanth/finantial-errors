import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import moment from "moment-timezone";

function App() {
  useEffect(() => {
    moment.locale("es");
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {
          // <Route path="/" exact component={HomePage} />
        }
        <Route path="/" exact component={HomePage} />
        <Route path="/:id" component={VideoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
