import React, {useState} from 'react';
import { MDBRow, MDBContainer, MDBCol,MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

const StuLogin=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
          setPassword(value);
        }
    };

    return(
        <MDBContainer>
            <MDBRow className="d-flex justify-content-center pt-5">
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody >  
                            <p className="h5 text-center mb-4" style={{color:"#E91E63"}}>Student login</p>
                            {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
                            <form>
                                <div className="pink-text">
                                    <MDBInput label="Student Email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" htmlFor="userEmail" name="userEmail" value = {email} id="userEmail"
                                    onChange = {(event) => onChangeHandler(event)}/>
                                    <MDBInput label="Password" htmlFor="userPassword" icon="lock" group type="password" 
                                    name="userPassword"  id="userPassword" onChange = {(event) => onChangeHandler(event)}
                                    value = {password} validate />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="pink" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
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
export default StuLogin;