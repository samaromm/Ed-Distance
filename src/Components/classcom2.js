import React from "react";
import {  MDBRow,  MDBCard, MDBCardBody, MDBIcon, MDBCol, MDBInput, MDBContainer} from "mdbreact";
import h from '../images/i.png'

const SocialPage = () => {
  return (
      <MDBCol md="6" lg="3">
        <MDBCard news className="my-5">
          <MDBCardBody>
            <div className="content">
            <img
                        src={h}
                        alt=""
                        className="rounded-circle img-fluid mx-auto" width="50px"
                        />
              Serhet
            </div>
          </MDBCardBody>
          <div className="embed-responsive embed-responsive-1by1">
            <iframe
              className="embed-responsive-item"
              title="This is a unique title"
              src="https://www.youtube.com/embed/rOnF7xPr-60"
              alt=""
              allowFullScreen
            />
          </div>
          <MDBCardBody>
            <div className="social-meta">
              <p className="blue-text">
                #come405 #AI #lecture6
              </p>
              <span>
                <MDBIcon far icon="heart" />
                265 likes
              </span>
              <p>
                <MDBIcon icon="comment" />
                89 comments
              </p>
            </div>
            <hr />
            <MDBInput far icon="heart" hint="Add Comment..." />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  );
}

export default SocialPage;