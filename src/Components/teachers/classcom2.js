import React from "react";
import {  MDBRow,  MDBCard, MDBCardBody, MDBIcon, MDBCol, MDBInput, MDBContainer} from "mdbreact";

const SocialPage = () => {
  return (
      <MDBCol md="6" lg="3">
        <MDBCard news className="my-5">
          <MDBCardBody>
            <div className="content">
              You shared this class on 2/April
            </div>
          </MDBCardBody>
          <div className="embed-responsive embed-responsive-1by1">
            <iframe
              className="embed-responsive-item"
              title="This is a unique title"
              src="https://sanalsinif.uskudar.edu.tr/app/9c88e431-9b4a-4731-aaa3-b535bda26123/software_project_management_lecture_6?langid=en-US&s=19afedba-f6d3-474b-986e-357df72e060f&u=82644"
              alt=""
              allowFullScreen
            />
          </div>
          <MDBCardBody>
            <div className="social-meta">
              <p className="blue-text">
                #se302 #lecture6 #prototype
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