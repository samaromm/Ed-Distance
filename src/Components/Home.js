import React from 'react';
import teacher from '../images/teacher.svg'
import logo from '../images/laptop.svg'
import { MDBRow, MDBContainer, MDBBtn} from 'mdbreact';
import { Link } from "react-router-dom";


const Home =props=>{
        return(
            <MDBContainer fluid>
                <MDBRow className="d-flex justify-content-center">
                    <img src={teacher} alt="teacher" width="500px" />                    
                </MDBRow>
                <MDBRow className="d-flex justify-content-center mt-5 ">
                    <img src={logo} alt="logo" width="10%" />                    
                </MDBRow>
                <MDBRow className="d-flex justify-content-center pinkText">
                    <h1>Welcome to Ed-Distance</h1>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center pinkText ">
                    <h3><i>Where education is posssible despite the distance</i></h3>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center my-3 pinkText ">
                    <Link to="/stulogin">
                        <MDBBtn className="submitBtn text-white" color="pink" name="Student">Student login</MDBBtn>
                    </Link >
                    <Link to="/teachlogin">
                        <MDBBtn className="submitBtn text-white" color="pink" name="Teacher" >Teacher login</MDBBtn>
                    </Link>
                </MDBRow>
            </MDBContainer>
        )
}
export default Home;