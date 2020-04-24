import { MDBRow, MDBContainer, MDBCol,MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import React, { useCallback, useContext} from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../Auth.js";
import { Link } from 'react-router-dom';

const StuLogin=({ history })=>{
    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/student");
          } catch (error) {
            alert(error);
          }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/student" />;
    }
    
    return(
        <MDBContainer>
            <MDBRow className="d-flex justify-content-center mt-5">
                <MDBCol md="6" className="mt-5">
                    <MDBCard className="p-5">
                        <MDBCardBody >  
                            <p className="h5 text-center mb-4" style={{color:"#E91E63"}}>Student login</p>
                            <form onSubmit={handleLogin}>
                                <div className="pink-text">
                                    <MDBInput label="Student Email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" name="email"/>
                                    <MDBInput label="Password" icon="lock" group type="password" name="password"/>
                                </div>
                                <div className="text-center">
                                    <Link to="/">
                                        <MDBBtn color="pink" className="submitBtn text-white" >
                                            Return
                                        </MDBBtn>
                                    </Link>  
                                    <MDBBtn color="pink" type="submit" className="submitBtn text-white" >
                                        Login
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default withRouter(StuLogin);