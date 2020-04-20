import React from 'react'
import Header from './Header'
import { MDBContainer, MDBIcon, MDBRow, MDBCol } from 'mdbreact'
import Girl from '../images/likes.svg'

const Favorites =()=>{
    return(
        <div>
             <Header home="/student"/>
             <MDBContainer > 
                <MDBRow className="pt-5 pinkText mb-3">
                    <MDBCol className="d-flex text-center justify-content-center">
                        <h3 className="font-weight-bold">Your Favorites</h3>
                        <MDBIcon icon="heart" />
                    </MDBCol>
                </MDBRow> 
                <MDBRow className="d-flex justify-content-center align-items-center text-center text-white">
                    <MDBCol md="4" className="mr-3 mb-3">
                        <h4 className="p-3 purple-gradient rounded font-weight-bold ">You didn't like anything yet</h4>
                    </MDBCol>
                    <MDBCol md="4">
                    <img src={Girl} alt="Girl" width="90%" />   
                    </MDBCol>                 
                </MDBRow>   
            </MDBContainer>
        </div>
    )
}
export default Favorites