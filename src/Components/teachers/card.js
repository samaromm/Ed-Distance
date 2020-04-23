import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn} from "mdbreact";
import pic from '../../images/j.png'
import Modal from './buttonModel'
import Modal2 from '../Modal'
import image from '../../images/2.svg'

class Card extends React.Component{

    constructor(){
        super()
        this.state = {
            modal: false,
            modal2:false
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

    close2=()=>{
        this.setState({
            modal2:!this.state.modal2,
            id:""
        })
    }

    open2 = (event) => {
        this.setState({
          modal2: !this.state.modal2,
        });
    }


    render(){
        const scrollContainerStyle = { maxHeight: "360px" };
        const scrollContainerStyle2 = { maxHeight: "103px" };
        return(
            <MDBContainer fluid className="my-5 pinkText">
            <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4 ">
                    <MDBCard testimonial>
                        <img
                        src={pic}
                        alt=""
                        className="rounded-circle img-fluid mx-auto py-4" width="200px"
                        />
                    <MDBCardBody>
                        <h4 className="font-weight-bold mb-4">KRİSTİN SURPUHİ BENLİ</h4>
                        <hr />
                        <p className="mt-4">
                        <MDBIcon icon="user" className="pr-2" />
                        Teacher<br/>
                        <MDBIcon icon="envelope" className="pr-2" />
                        kristin.benli@uskudar.edu.tr<br/>
                        </p>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4 ">
                    <MDBRow className="justify-content-center">
                        <img src={image} style={{width:"50%"}}/>
                    </MDBRow>
                    <MDBCard testimonial className=" py-4">
                        <h4 className="font-weight-bold text-center">Your upcoming classes
                        <MDBBtn color="pink" className="px-1 py-0" onClick={this.open}> <MDBIcon icon="plus" /></MDBBtn>
                        </h4>
                        <hr/>
                    <MDBCardBody className="scrollbar text-center" style={scrollContainerStyle2}>
                    <p style={{color:"gray"}}>          
                    <MDBIcon icon="star" className="pr-2" />
                    
                    SE302 - Tuesday 2:00PM
                </p> 
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4 ">
                    <MDBCard testimonial className="py-3 mb-4">
                    <h4 className="font-weight-bold text-center">Your Announcements
                        <MDBBtn color="pink" className="px-1 py-0" onClick={this.open2}> <MDBIcon icon="plus" /></MDBBtn>
                        </h4>
                        <hr/>
                    <MDBCardBody className="scrollbar " style={scrollContainerStyle2}>
                    <p style={{color:"gray"}}>          
                    <MDBIcon icon="star" className="pr-2" />
                    
                    SE302 - Next online lecture will be on Tuesday 2:00PM
                </p> 
                    </MDBCardBody>
                    </MDBCard>
                    <MDBCard testimonial>
                        <h4 className="font-weight-bold text-center py-3">Your Documents
                        <MDBBtn color="pink" className="px-1 py-0" onClick={this.open2}> <MDBIcon icon="plus" /></MDBBtn>
                        </h4>
                        <hr/>
                    <MDBCardBody className="scrollbar " style={scrollContainerStyle2}>
                       <MDBRow>
                       <a href="https://drive.google.com/open?id=1PSvYQFTDTkz6aP1N8j0FmJfLtXs-TQG-" download target="blank" variant="outline-info">
                            <p>          
                                SE302-Lecture 5.pptx
                            </p> 
                        </a>
                       </MDBRow>
                       <MDBRow>
                       <a href="https://drive.google.com/open?id=1PSvYQFTDTkz6aP1N8j0FmJfLtXs-TQG-" download target="blank" variant="outline-info">
                            <p>          
                                SE302-Lecture 4.pptx
                            </p> 
                        </a>
                       </MDBRow>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <Modal modal={this.state.modal} close={this.close}/>
            <Modal2 modal={this.state.modal2} close={this.close2} bigTitle="Add an announcement"
            title="Course Code" text="Details" display="displayNone"/>
            </MDBContainer>
        )
    }
}
export default Card