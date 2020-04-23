import React from "react";
import app from "../base.js";
import Header from './Header'
import Welcome from '../images/welcome.svg'
import Card from './teachers/card'
import Video from './teachers/video'
import { MDBCol } from "mdbreact";

class TeachProfile extends React.Component{


  render(){
    return (
      <div>
        <Header home="teacher" />
        <div className="justify-content-center d-flex">
        </div>
            <Card/>
      </div>
    ) 
  }
}
export default TeachProfile;