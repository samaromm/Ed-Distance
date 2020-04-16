import React from "react";
import app from "../base.js";

const TeachProfile = () => {
  return (
    <div>
      <h1>Hi Teacher</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  ) 
};
export default TeachProfile;