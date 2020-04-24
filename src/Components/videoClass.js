import React from 'react'
import Header from './Header'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'
import zoom from '../images/zoom.png'
import Slider from '../images/slider.png'
import Call from '../images/call.svg'
import people from '../images/people.png'

const classOnline =(props)=>{
    let home=""
    props.location.pathname=="/teacher/class"? home="teacher":home="student"
    return(
        <div>
            <Header home={home} />
            <MDBContainer fluid >
                    
                    <img
                    className="mt-2 blackBorder"
                    title="This is a unique title"
                    src={Call}
                    alt=""
                    allowFullScreen
                    width="1020px"
                    height="420px"
                    />
                   
                    <img
                    className="mt-2 blackBorder"
                    title="This is a unique title"
                    src={people}
                    alt=""
                    allowFullScreen
                    width="200px"
                    height="420px"
                    />
                <img src={zoom} width="1220px" height="60px"/>
            </MDBContainer>
        </div>
    )
}

export default classOnline