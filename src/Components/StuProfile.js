import React from "react";
import app from "../base.js";

const StuProfile = () => {
  return (
    <div>
      <h1>Hi Student</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  ) 
};
export default StuProfile;