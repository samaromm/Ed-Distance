import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon} from "mdbreact";

class Card extends React.Component{

    videoList=()=>{
        const copy = {...this.props.videos}
        let a=Object.keys(copy).map(element=>{
          return(
            <>
                <p>
                    <MDBIcon icon="tv" className="pr-2" />
                    {element}: {copy[element]["name"]}<br/>
                </p>
                <div class="embed-responsive embed-responsive-4by3">
                    <iframe class="embed-responsive-item" src={copy[element]["link"]}></iframe>
                </div>
                <hr className="mb-4"/>
            </>  
          )
        })
        return a;
    }

    ann=()=>{
        const copy = {...this.props.ann["list"]}
        let a=Object.keys(copy).map(element=>{
          return(
            <div>         
                <p style={{color:"gray"}}>          
                    <MDBIcon icon="star" className="pr-2" />
                    {copy[element]}
                </p> 
                <hr/> 
            </div>
          )
        })
        return a;
    }

    docs=()=>{
        const copy = {...this.props.docs["list"]}
        let a=Object.keys(copy).map(element=>{
          return(
            <div>         
                <a href={copy[element]["link"]} download target="blank" variant="outline-info">
                    <p>          
                        <MDBIcon icon="star" className="pr-2" />
                        {copy[element]["name"]}
                    </p> 
                </a>
                <hr/> 
            </div>
          )
        })
        return a;
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
                        src={this.props.info.img}
                        alt=""
                        className="rounded-circle img-fluid mx-auto py-4" width="200px"
                        />
                    <MDBCardBody>
                        <h4 className="font-weight-bold mb-4">{this.props.info.name}</h4>
                        <hr />
                        <p className="mt-4">
                        <MDBIcon icon="user" className="pr-2" />
                        {this.props.type}<br/>
                        <MDBIcon icon="envelope" className="pr-2" />
                        {this.props.info.email}<br/>
                        <MDBIcon icon="lock" className="pr-2" />
                        {this.props.info.id}
                        </p>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4 ">
                    <MDBCard testimonial className=" py-3">
                        <h3 className="font-weight-bold text-center">Latest Lectures</h3><hr/>
                    <MDBCardBody className="scrollbar " style={scrollContainerStyle}>
                        {this.videoList()}
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4 ">
                    <MDBCard testimonial className="mb-5">
                        <h3 className="font-weight-bold text-center py-3">Latest Announcements</h3><hr/>
                    <MDBCardBody className="scrollbar " style={scrollContainerStyle2}>
                        {this.ann()}
                    </MDBCardBody>
                    </MDBCard>
                    <MDBCard testimonial>
                        <h3 className="font-weight-bold text-center py-3">Latest Documents</h3><hr/>
                    <MDBCardBody className="scrollbar " style={scrollContainerStyle2}>
                        {this.docs()}
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
}
export default Card