import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon} from "mdbreact";

class Card extends React.Component{

    render(){
        const scrollContainerStyle = { maxHeight: "360px" };
        const scrollContainerStyle2 = { maxHeight: "103px" };
        return(
            <MDBContainer fluid className="my-5 pinkText">
            <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4 ">
                    <MDBCard testimonial>
                        
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
            </MDBRow>
            </MDBContainer>
        )
    }
}
export default Card