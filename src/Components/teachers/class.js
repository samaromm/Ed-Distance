import React from 'react'
import Header from '../Header'
import Card from './classcom2'
import Two from './classcom'
import { MDBRow, MDBCol, MDBCard,MDBCardBody, MDBIcon, MDBBtn   } from 'mdbreact'
import image from '../../images/s.svg'
import Modal from './buttonModel'

export default class classes extends React.Component{
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
    render(){
        
        return(
            <div>
            <Header home='teacher' />
            
            <div class="alert alert-danger" role="alert">
                Your scheduled SE302 class will start in two minutes! <a href="/teacher/class">Start it now</a>
            </div>
            <MDBRow className="justify-content-center d-flex ">
            
            <Card/>
            <Two/>
            <MDBCol lg="4" md="12" className="mb-lg-0 ">
            <MDBRow className="justify-content-center mt-5 pt-5">
                      <a className="justify-content-center" href="https://calendar.google.com/calendar/r/week?eid=MWszNXYycGc0MWtydTZxZ2Q2ZDZ2ZjcwY2JfMjAyMDA0MjNUMTMzMDAwWiByZS1jb2RlZC5jb21fNTU5Nm50cmg1M3VlcjA0N2lnbG1tY2dpNGtAZw&pli=1&sf=true">
                          <img src={image} style={{width:"60%"}} className="ml-5"/>
                        </a>  
                    </MDBRow>
                    <MDBCard testimonial className=" py-4">
                        <h4 className="font-weight-bold text-center pinkText">Your upcoming classes
                        <MDBBtn color="pink" className="px-1 py-0 text-white" onClick={this.open}> <MDBIcon icon="plus" /></MDBBtn>
                        </h4>
                        <hr/>
                    <MDBCardBody className="scrollbar text-center">
                    <p style={{color:"gray"}}>          
                    <MDBIcon icon="star" className="pr-2" />
                    
                    SE302 - Today 2:00PM<br/>
                    <MDBIcon icon="star" className="pr-2" />
                    SE201 - Monday 2:00PM
                </p> 
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <Modal modal={this.state.modal} close={this.close}/>
            </MDBRow>
          </div> 
        )
    }
}