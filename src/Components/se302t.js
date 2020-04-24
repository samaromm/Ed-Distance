import React from 'react'
import Header from './Header'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer, MDBBtn} from 'mdbreact'
import firebase from '../base'
import Grades from './gradestable'
import Modal from './Modal'

class se302 extends React.Component{

    constructor(){
        super()
        this.state={
            se302:{},
            isClicked:[],
            isClickedVid:[],
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

    btnClick=(event)=>{
        if(this.state.isClicked.includes(event.target.id)){
            let newArr = this.state.isClicked.filter(a=>a!==event.target.id)
            this.setState({
                isClicked:[...newArr]
            })
        }
        else{
            this.setState({
                isClicked:[...this.state.isClicked,event.target.id]
            })
        }
    }

    btnClick2=(event)=>{
        if(this.state.isClickedVid.includes(event.target.id)){
            let newArr = this.state.isClickedVid.filter(a=>a!==event.target.id)
            this.setState({
                isClickedVid:[...newArr]
            })
        }
        else{
            this.setState({
                isClickedVid:[...this.state.isClickedVid,event.target.id]
            })
        }
    }

    iconColor=(index)=>{
        let b=""
        let s= index.toString()
        this.state.isClicked.includes(s)?b="redIcon": b="whiteIcon"
        return b;
    }

    iconColor2=(index)=>{
        let b=""
        let s= index.toString()
        this.state.isClickedVid.includes(s)?b="redIcon": b="whiteIcon"
        return b;
    }

    docList = ()=>{  
        let copy= {...this.state.se302["documents"]}
        let a=Object.keys(copy).map((element, index)=>{
          return(
            <MDBCard className="card-body mr-3" style={{ width: "15rem", marginTop: "1rem" }}>
                <MDBRow className="pl-3">
                        <MDBIcon icon="heart" id={index} onClick={this.btnClick}
                        className={`pr-2 Icon ${this.iconColor(index)}`}/>
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

    vidList = ()=>{  
        let copy= {...this.state.se302["videos"]}
        let a=Object.keys(copy).map((element, index)=>{
          return(
            <MDBCard className="card-body mr-3" style={{ width: "15rem", marginTop: "1rem" }}>
                <MDBRow className="pl-3">
                        <MDBIcon icon="heart" id={index} onClick={this.btnClick2}
                        className={`pr-2 Icon ${this.iconColor2(index)}`}/>
                        <a href={copy[element]["link"]} download target="blank" variant="outline-info">
                            <p>          
                                {copy[element]["name"]}
                            </p> 
                        </a>
                </MDBRow>   
                <MDBRow>
                    <div class="embed-responsive embed-responsive-4by3">
                        <iframe class="embed-responsive-item" src={copy[element]["link"]}></iframe>
                    </div>
                    <hr className="mb-4"/>
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
        let home=""
    this.props.location.pathname=="/teacher/courses/se302"? home="teacher":home="student"
        return(
            <div>
                <Header home={home}/>
                    <MDBContainer fluid> 
                        <MDBRow className="pt-5 pinkText">
                            <MDBCol className="d-flex text-center justify-content-center">
                                <h5 className="font-weight-bold">{this.state.se302["name"]}</h5>
                                <MDBIcon icon="dove" />
                                <h5>{this.state.se302["lecturer"]}</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol className="d-flex text-center justify-content-center">
                            <h6 className="font-weight-bold" style={{color:"gray"}}>[Principles of software project management, planning, and organizing]</h6>
                            </MDBCol>
                            
                        </MDBRow>      
                        <MDBRow className="d-flex justify-content-center mb-5">
                            <MDBCol lg="10" md="8" className="mb-lg-0 ">
                                <MDBCard testimonial >
                                    <h4 className="font-weight-bold pt-3 pl-3" style={{color:"gray"}}>
                                        <MDBIcon icon="file" className="mr-3"/>
                                        Documents you shared
                                        <MDBBtn color="pink" className="px-1 py-0 text-white" onClick={this.open}> <MDBIcon icon="plus" /></MDBBtn>
                                    </h4><hr/>
                                <MDBCardBody style={scrollContainerStyle} className="scrollbar d-flex flex-wrap example-parent">
                                    {this.docList()}
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="d-flex justify-content-center mb-5">
                            <MDBCol lg="10" md="8" className="mb-lg-0 ">
                                <MDBCard testimonial >
                                    <h4 className="font-weight-bold pt-3 pl-3" style={{color:"gray"}}>
                                        <MDBIcon icon="file" className="mr-3"/>
                                        Videos you shared
                                        <MDBBtn color="pink" className="px-1 py-0 text-white" onClick={this.open}> <MDBIcon icon="plus" /></MDBBtn>
                                    </h4><hr/>
                                <MDBCardBody style={scrollContainerStyle} className="scrollbar d-flex flex-wrap example-parent">
                                    {this.vidList()}
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="d-flex justify-content-center mb-5">
                            <MDBCol lg="10" md="8" className="mb-lg-0 ">
                                <MDBCard testimonial >
                                    <h4 className="font-weight-bold pt-3 pl-3" style={{color:"gray"}}>
                                        <MDBIcon icon="file" className="mr-3"/>
                                        Assignments you shared
                                        <MDBBtn color="pink" className="px-1 py-0 text-white" onClick={this.open}> <MDBIcon icon="plus" /></MDBBtn>
                                    </h4><hr/>
                                <MDBCardBody style={scrollContainerStyle} className="pinkText scrollbar d-flex flex-wrap example-parent">
                                    <h5 className="font-weight-bold">
                                    <MDBIcon far icon="grin-beam" />You didn't share any assignments recently </h5>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="d-flex justify-content-center mb-5">
                            <MDBCol lg="10" md="8" className="mb-lg-0 ">
                            <Grades/>
                            </MDBCol>
                            <Modal modal={this.state.modal} close={this.close} 
                            bigTitle="Add new"
                            title="Course Code" text="Link" display="displayNone"/>
                        </MDBRow>
                        
                    </MDBContainer>
            </div>
        )
    }
}
export default se302