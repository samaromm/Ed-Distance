import React, { Component } from 'react';
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBRow , MDBCard, MDBCol, MDBCardBody} from 'mdbreact';

export default class ModalBody extends Component{
    render(){
        return(
            <MDBModal isOpen={this.props.modal} toggle={this.props.close} size="lg" centered>
                <MDBModalHeader className="d-flex justify-content-center">
                    <h3 className="font-weight-bold pinkText pt-3">{this.props.bigTitle}</h3>
                </MDBModalHeader>
                <MDBModalBody >
                <MDBRow>
                    <MDBCol lg="12" className="lg-0 mb-4">
                    <MDBCard>
                        <MDBCardBody>
                        <div className="md-form mb-5">
                            <MDBInput
                            icon="tag"
                            label={this.props.title}
                            iconClass="pink-text"
                            type="text"
                            id="form-subject"
                            />
                        </div>
                        <div className="md-form">
                            <MDBInput
                            icon="pencil-alt"
                            label={this.props.text}
                            iconClass="pink-text"
                            type="textarea"
                            id="form-text"
                            />
                        </div>
                        <div class={`custom-control custom-checkbox ${this.props.display}`}>
                            <input type="checkbox" class="custom-control-input" id="Private"/>
                            <label class={`custom-control-label ${this.props.display}`} for="Private">Private</label>
                            <p style={{color:"red"}} className={`${this.props.display}`}>Notice that by choosing this option people can't see your room or join it unless you invite them directly</p>
                        </div>
                        <div className="text-center">
                            <MDBBtn color="pink" className="text-white submitBtn">Create</MDBBtn>
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
