import React from "react";
import {  MDBRow,  MDBCard, MDBCardBody, MDBIcon, MDBCol, MDBInput, MDBContainer} from "mdbreact";

const SocialPage = () => {
  return (
    <MDBCol md="6" lg="3">
        <MDBCard news className="my-5">
          <MDBCardBody>
            <div className="content">
              You shared this class 3 days ago
            </div>
          </MDBCardBody>
          <div className="embed-responsive embed-responsive-1by1">
            <iframe
              className="embed-responsive-item"
              title="This is a unique title"
              src="https://sanalsinif.uskudar.edu.tr/app/c9f14ee6-a1d1-4b12-812f-16c3774bcbc0/software_project_management_lecture_5?langid=en-US&s=0487c789-d0e7-447d-b7b8-2e4bcb386f98&u=21454"
              alt=""
              allowFullScreen
            />
          </div>
          <MDBCardBody>
            <div className="social-meta">
              <p className="blue-text">
                #se302 #lecture5 #Agile 
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