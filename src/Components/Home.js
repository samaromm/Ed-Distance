import React from 'react';
import teacher from '../images/teacher.svg'
import logo from '../images/logo.png'
import { MDBRow, MDBContainer, MDBBtn} from 'mdbreact';
import { Link } from "@reach/router";


const Home =props=>{
        return(
            <MDBContainer fluid>
                <MDBRow className="d-flex justify-content-center">
                    <img src={teacher} alt="teacher" width="500px" />                    
                </MDBRow>
                <MDBRow className="d-flex justify-content-center mt-5 ">
                    <img src={logo} alt="teacher" width="70px" />                    
                </MDBRow>
                <MDBRow className="d-flex justify-content-center pinkText">
                    <h1>Welcome to Ed-Distance</h1>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center pinkText ">
                    <h3><i>Where education is posssible despite the distance</i></h3>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center my-4 pinkText ">
                    <Link to="/stulogin">
                        <MDBBtn color="pink" onClick={this.handleSubmit} name="Student">Student login</MDBBtn>
                    </Link >
                    <Link to="/teachlogin">
                        <MDBBtn color="pink" name="Teacher" onClick={this.handleSubmit} >Teacher login</MDBBtn>
                    </Link>
                </MDBRow>
            </MDBContainer>
        )
}
export default Home;