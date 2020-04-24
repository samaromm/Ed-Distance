import React from 'react'
import Header from './Header'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput, MDBContainer } from "mdbreact";

const Contact =(props)=>{
    const scrollContainerStyle = { maxHeight: "380px" };
    let home=""
    props.location.pathname=="/teacher/messages/new"? home="teacher":home="student"
    return(
        <div>
            <Header home={home} />
                <section className="my-5">
                <h5 className="h3-responsive font-weight-bold text-center my-5 pinkText">
                    Send a message
                </h5>
                <MDBContainer>
                <MDBRow>
                    <MDBCol lg="7" className="lg-0 mb-4">
                    <MDBCard>
                        <MDBCardBody className="scrollbar " style={scrollContainerStyle}>
                        <div className="md-form mb-5">
                            <MDBInput
                            icon="envelope"
                            label="Reciever Email"
                            iconClass="pink-text"
                            type="text"
                            id="form-email"
                            />
                        </div>
                        <div className="md-form mb-5">
                            <MDBInput
                            icon="tag"
                            label="Subject"
                            iconClass="pink-text"
                            type="text"
                            id="form-subject"
                            />
                        </div>
                        <div className="md-form">
                            <MDBInput
                            icon="pencil-alt"
                            label="Your message"
                            iconClass="pink-text"
                            type="textarea"
                            id="form-text"
                            />
                        </div>
                        <div className="text-center">
                            <MDBBtn color="pink" className="text-white">Send</MDBBtn>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    <MDBCol lg="5">
                    <MDBCard className="mb-5 px-5 pt-4 scrollbar"  style={scrollContainerStyle}>
                        <MDBCardBody className=" py-0">
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
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>
        </div>
    )
}
export default Contact