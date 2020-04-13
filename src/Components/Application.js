import React from "react";
import { Router } from "@reach/router";
import StuLogin from "./StuLogin";
import Teachlogin from './TeachLogin'
import ProfilePage from "./ProfilePage";
import Home from "./Home"


function Application(props) {
  const user = null;
  return (
        user ?
        <ProfilePage />
      :
        <Router>
            <StuLogin path="/stulogin" />
            <Teachlogin path="/teachlogin"/>
            <Home path="/"/>
        </Router>

  );
}
export default Application;