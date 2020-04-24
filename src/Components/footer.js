import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./footer.css";
import { MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <div className="footer ">
      <div class="container">
        <div class="row">
          <div class="justify-content-center">
            <ul class="list-unstyled footerSocialLinks ">
              <li>
                <Link to="">
                <MDBIcon fab icon="vk" />
                </Link>
              </li>
              <li>
                <Link to="">
                <MDBIcon fab icon="instagram" />
                </Link>
              </li>
              <li>
                <Link to="">
                <MDBIcon fab icon="twitter" />
                </Link>
              </li>
              <li>
                <Link to="">
                <MDBIcon fab icon="facebook-f" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
