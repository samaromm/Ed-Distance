import React from 'react'
import Header from './Header'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer, MDBBtn } from 'mdbreact'
import firebase from '../base'

class se302 extends React.Component{

    constructor(){
        super()
        this.state={
            se302:{}
        }
    }

    docList = ()=>{  
        let copy= {...this.state.se302["documents"]}
        console.log(copy)
        let a=Object.keys(copy).map(element=>{
          return(
            <MDBCard className="card-body mr-3" style={{ width: "15rem", marginTop: "1rem" }}>
                <MDBRow className="pl-3">
                    <MDBBtn className="iconBtn" color="white">
                        <MDBIcon far icon="star" className="pb-2"/>
                    </MDBBtn>
                    <a href={copy[element]["link"]} download target="blank" variant="outline-info">
                        <p>          
                            {copy[element]["name"]}
                        </p> 
                    </a>
                </MDBRow>
            </MDBCard>
            
          )
        })
        return a;
    } 

    componentDidMount(){
        firebase.firestore().collection("university").onSnapshot(snapshots=>{
          const allDocs ={}
          snapshots.docs.map(doc=>{
            return allDocs[doc.id]={...doc.data()}
          })
          this.setState({
            se302: allDocs["courses"]["se302"]
          })
        })
      }    

    render(){
        const scrollContainerStyle = { maxHeight: "360px" };
        return(
            <div>
                <Header home="/student"/>
                    <MDBContainer fluid> 
                        <MDBRow className="pt-5 pinkText">
                            <MDBCol className="d-flex text-center justify-content-center">
                                <h5 className="font-weight-bold">{this.state.se302["name"]}</h5>
                                <MDBIcon icon="dove" />
                                <h5>{this.state.se302["lecturer"]}</h5>
                            </MDBCol>
                        </MDBRow>      
                        <MDBRow className="d-flex justify-content-center mb-5">
                            <MDBCol lg="10" md="8" className="mb-lg-0 ">
                                <MDBCard testimonial >
                                    <h4 className="font-weight-bold pt-3 pl-3" style={{color:"gray"}}>
                                        <MDBIcon icon="file" className="mr-3"/>
                                        Documents
                                    </h4><hr/>
                                <MDBCardBody style={scrollContainerStyle} className="scrollbar d-flex flex-wrap example-parent">
                                    {this.docList()}
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </div>
        )
    }
}
export default se302