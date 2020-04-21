import React from 'react'
import Header from './Header'
import {  MDBRow,  MDBCard, MDBCardBody, MDBContainer, MDBCol, MDBBtn, MDBIcon} from "mdbreact";
import choice from '../images/choice.svg'
import Body from './Modal'

class Room extends React.Component{

    constructor(){
        super()
        this.state = {
            modal: false,
        }
    }

    close=()=>{
        this.setState({
            modal:!this.state.modal,
            id:""
        })
    }

    open = (event) => {
        this.setState({
          modal: !this.state.modal,
        });
    }

    render(){
    const scrollContainerStyle = { maxHeight: "460px" };
    return(
        <div>
            <Header home="/student"/>
            <MDBContainer > 
                <MDBRow className="pt-5 pinkText mb-3">
                    <MDBCol className="d-flex text-center justify-content-center">
                    <MDBBtn color="pink" className="mb-4" onClick={this.open}>Start a new Discussion</MDBBtn>
                    </MDBCol>  
                </MDBRow>
                <MDBRow>
                    <MDBCol lg="6" className="lg-0 mb-4">
                    <MDBCard className="scrollbar " style={scrollContainerStyle}>
                        <h3 className="font-weight-bold text-center pinkText pt-3">Your Rooms</h3><hr/>
                        <MDBCardBody >
                        <h5 className="font-weight-bold text-center pt-3" style={{color:"gray", textDecoration:"underline"}}>You didn't create or subscribe to any room yet</h5>
                        <div className="justify-content-center d-flex">
                            <img src={choice} alt="empty " className="mx-auto py-4" width="50%"/>
                        </div>
                        <div className="md-form justify-content-center d-flex">
                          <input className="form-control mr-sm-4" type="text" placeholder="Search for a room" aria-label="Search" />
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    <MDBCol lg="6" className="lg-0 mb-4">
                    <MDBCard className="scrollbar px-1"  style={scrollContainerStyle}>
                    <h3 className="font-weight-bold text-center pinkText pt-3">Popular Rooms</h3><hr/>
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
                                        Created by <a href="#!" className="name">
                                        John Doe <MDBIcon icon="star" className="yellowStar"/>
                                        <MDBIcon icon="star" className="yellowStar"/>
                                        <MDBIcon icon="star" className="yellowStar"/>
                                        <MDBIcon icon="star" className="yellowStar"/>
                                        <MDBIcon icon="star" className="yellowStar"/>
                                        </a> <p className="font-weight-bold">Learning Materials</p>
                                        <p style={{backgroundColor:"gray", color:"white"}} className="p-1">A room to share all the learning sources and materials you have. Pdf, mp4, website links, etc.. Anything useful is welcomed</p>
                                        <div className="date">250 Participants   <span style={{backgroundColor:"Red", color:"white"}}>Active</span></div>
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
                                        Created by <a href="#!" className="name">
                                        Anna <MDBIcon icon="star" className="yellowStar"/>
                                        <MDBIcon icon="star" className="yellowStar"/>
                                        <MDBIcon icon="star" className="yellowStar"/>
                                        <MDBIcon icon="star" className="yellowStar"/>
                                        <MDBIcon icon="star" className="yellowStar"/>
                                        </a> <p className="font-weight-bold">Software/Computer Engineering Students</p>
                                        <p style={{backgroundColor:"gray", color:"white"}} className="p-1">Let's help each other</p>
                                        <div className="date">230 Participants</div>
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
            <Body modal={this.state.modal} close={this.close} bigTitle="Create Discussion Room"
            title="Title" text="discription" display="displayS"/>
            </MDBContainer>
        </div>
    )}
}
export default Room