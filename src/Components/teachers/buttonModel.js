import React, { Component } from 'react';
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBRow , MDBCard, MDBCol, MDBCardBody} from 'mdbreact';
import DateTimePicker from 'react-datetime-picker'

export default class ModalBody extends Component{
    render(){
        return(
            <MDBModal isOpen={this.props.modal} toggle={this.props.close} size="lg" centered>
                <MDBModalHeader className="d-flex justify-content-center">
                    <h3 className="font-weight-bold pinkText pt-3">Create an online class event</h3>
                </MDBModalHeader>
                <MDBModalBody >
                <MDBRow>
                    <MDBCol lg="12" className="lg-0 mb-4">
                    <MDBCard>
                        <MDBCardBody>
                        <div className="md-form mb-5">
                            <MDBInput
                            icon="tag"
                            label="Course Code"
                            iconClass="pink-text"
                            type="text"
                            id="form-subject"
                            />
                        </div>
                        <div className="md-form">
                            <h5>Choose date and time</h5>
                        <DateTimePicker />
                        </div>
                        <div className="text-center">
                            <MDBBtn color="pink">Create</MDBBtn>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    </MDBRow>
                </MDBModalBody>
            </MDBModal>
        )
    }
}
