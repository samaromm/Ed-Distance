import React from "react";
import app from "../base.js";
import Header from './Header'
import Welcome from '../images/welcome.svg'
import Card from './teachers/card'

class TeachProfile extends React.Component{


  render(){
    return (
      <div>
        <Header home="teacher" />
        <div className="justify-content-center d-flex">
            <img src={Welcome} alt="welcome " className="mx-auto pt-4" width="15%"/>
        </div>
        <Card/>
      </div>
    ) 
  }
}
export default TeachProfile;