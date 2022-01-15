import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormFeedback, FormGroup, Label, Input, Col, Row } from 'reactstrap';

class CTAModalTest extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: true,
            firstName: '',
            lastName: '',
            emailAddress: '',
            organization: '',
            referred: '',
            touched: {
                firstName: false,
                lastName: false,
                emailAddress: false,
                referred: false
            }
            
        };
        
        this.modal = [
            {
                buttonText: 'Join Now',
                reactId: 'cta',
                modalText: 'Sign up for interactive content, exercises, and games to strengthen your creative business!'
            },
        ]

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderModal() {
        return this.modal.map(modal => {
            return (
                <Row key={modal.reactId}>
                    <Col>
                        <Button onClick={() => this.handleShow(modal.reactId)}>
                            <h1>{modal.buttonText}</h1>
                        </Button>
                        <Modal
                            show={this.state.show === modal.reactId} onHide={this.handleClose}>
                                <ModalHeader closeButton close={this.handleClose}></ModalHeader>
                                <ModalBody>
                                    <p>{modal.modalText}</p>
                                </ModalBody>
                            </Modal>
                    </Col>
                </Row>
            )
        })
    }

    validate(firstName, lastName, emailAddress, referred) {

        const errors = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            referred: '',
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        if (this.state.touched.emailAddress && !emailAddress.includes('@')) {
            errors.emailAddress = 'Email should contain a @';
        }

        
        if (this.state.touched.referred) {
            if (referred.length < 1) {
                errors.referred = 'Please put a reference. Put N/A if not avaialble.';
            }
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }



    handleClose() {
        this.setState({
            show: null
        });
    }

    handleShow(id) {
        this.setState({show: id})
    }

    render() {

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.emailAddress, this.state.referred); 

        return (
            <div>
                {this.renderModal()}
            </div>
            
        )
    }
}



export default CTAModalTest;