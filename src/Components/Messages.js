import React from "react";
import {  MDBRow,  MDBCard, MDBCardBody, MDBContainer, MDBCol, MDBBtn, MDBIcon} from "mdbreact";
import Header from './Header'
import { Link } from "react-router-dom";



const Messages = (props) => {
    let home=""
    props.location.pathname=="/teacher/messages"? home="teacher":home="student"
  return (
    <div>
        <Header home={home}/>
        <MDBContainer > 
            <MDBRow className="pt-5 pinkText mb-3">
                <MDBCol className="d-flex text-center justify-content-center">
                    <h5 className="font-weight-bold">Your Messages</h5>
                    <MDBIcon icon="dove" />
                </MDBCol>  
            </MDBRow>
            <MDBRow className="justify-content-center">
                <MDBCol lg="8">
                    <MDBCard className="mb-5 px-5 pt-4">
                        <MDBCardBody className="py-0">
                            <MDBRow>
                                <div className="mdb-feed Icon">
                                <div className="news">
                                    <div className="label">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                                        alt=""
                                        className="rounded-circle z-depth-1-half"
                                    />
                                    </div>
                                    <div className="excerpt">
                                    <div className="brief">
                                        <a href="#!" className="name">
                                        John Doe <br/>
                                        </a> Regarding your last discussion <span style={{backgroundColor:"Red", color:"white"}}>New</span>
                                        <div className="date">1 hour ago</div>
                                    </div>
                                    </div>
                                </div>

                                <div className="news mt-4">
                                    <div className="label">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg"
                                        alt=""
                                        className="rounded-circle z-depth-1-half"
                                    />
                                    </div>
                                    <div className="excerpt">
                                    <div className="brief">
                                        <a href="#!" className="name">
                                        Anna Smith
                                        </a> Reacted <a href="#!">to your last messages</a>
                                        <div className="date">4 hours ago</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="news mt-4">
                                    <div className="label">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg"
                                        alt=""
                                        className="rounded-circle z-depth-1-half"
                                    />
                                    </div>
                                    <div className="excerpt">
                                    <div className="brief">
                                        <a href="#!" className="name">
                                        Danny Moore
                                        </a> See you soon then<br/>
                                        <div href="#!" className="date">
                                        7 hours ago
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="news my-4">
                                    <div className="label">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg"
                                        alt=""
                                        className="rounded-circle z-depth-1-half"
                                    />
                                    </div>
                                    <div className="excerpt">
                                    <div className="brief">
                                        <a href="#!" className="name">
                                        Lili Rose
                                        </a> Shared a link with you
                                        <div className="date">2 days ago</div>
                                    </div>
                                    <div className="added-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Vero inventore.
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </MDBRow>
                            <MDBRow>
                                <Link to={`/${home}/messages/new`}>
                                <MDBBtn color="pink" className="mb-4">
                                    New Message
                                </MDBBtn>
                                </Link>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
      </div>
  );
}

export default Messages;