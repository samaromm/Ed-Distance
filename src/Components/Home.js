import React from 'react';
import teacher from '../images/teacher.svg'
import { MDBRow, MDBContainer, MDBBtn} from 'mdbreact';
import { Link } from "react-router-dom";


const Home=()=>{
    return(
        <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center">
                <img src={teacher} alt="teacher" width="500px" />                    
            </MDBRow>
            <MDBRow className="d-flex justify-content-center mt-5 pinkText">
                <h1>Welcome to Ed-Distance</h1>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center pinkText">
                <h3>Where education is posssible despite the distance</h3>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center mt-4 pinkText ">
                <Link to="/stulogin">
                    <MDBBtn color="pink">Student login</MDBBtn>
                </Link>
                <Link to="/teachlogin">
                    <MDBBtn color="pink">Teacher login</MDBBtn>
                </Link>
            </MDBRow>
        </MDBContainer>
    )
}
export default Home;