import React from 'react'
import Header from './Header'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'
import zoom from '../images/zoom.png'
import Slider from '../images/slider.png'

const classOnline =(props)=>{
    let home=""
    props.location.pathname=="/teacher/class"? home="teacher":home="student"
    return(
        <div>
            <Header home={home} />
            <MDBContainer fluid >
            <MDBRow className=" justify-content-center d-flex">
                <MDBCol  className=" justify-content-center d-flex">
                    <iframe
                    className="mt-2"
                    title="This is a unique title"
                    src="https://www.youtube.com/embed/_0l_VQhPTTM"
                    alt=""
                    allowFullScreen
                    width="1040px"
                    height="420px"
                    />
                    </MDBCol>
            </MDBRow>
            <MDBRow className="">
                <MDBCol  className=" justify-content-center d-flex">
                <img src={zoom} width="1040px" height="60px"/>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default classOnline