import React from 'react'
import Header from './Header'
import Content from './classcom'
import Card from './classcom2'
import Two from './classcom'
import { MDBRow, MDBCol, MDBCard,MDBCardBody, MDBIcon   } from 'mdbreact'
import image from '../images/s.svg'

export default class classes extends React.Component{
    render(){
        let home=""
        this.props.location.pathname=="/teacher/onlineclasses"? home="teacher":home="student"
        return(
            <div>
            <Header home={home} />
            
            <div class="alert alert-primary" role="alert">
                COME308 online class has started! <a href="/student/class">Join it now</a>
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
                    <MDBCard testimonial className=" my-5">
                        <h3 className="font-weight-bold text-center py-3">Upcoming classes</h3><hr/>
                    <MDBCardBody >
                    <p style={{color:"gray"}}>          
                    <MDBIcon icon="star" className="pr-2" />
                    
                    SE302 - Tuesday 2:00PM
                </p> 
                <p style={{color:"gray"}}>          
                    <MDBIcon icon="star" className="pr-2" />
                    
                    Math302 - Wednesday 2:00PM
                </p> 
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
          </div> 
        )
    }
}