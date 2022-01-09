import React, { Component }  from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormFeedback, FormGroup, Label, Input, Col } from 'reactstrap';

class CTA extends Component {

    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,
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
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(firstName, lastName, phoneNum, emailAddress, referred) {

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


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

        render() {

            const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email); 

            return (
                <React.Fragment>
                    <div className="cta-header">
                        <h2>Work of Art: Business Skills for Artists</h2>
                        <p className="py-3">
                            Sign up for interactive content, exercises, and games to strengthen your creative business!
                        </p>
                        <Button className="btn-green" onClick={this.toggleModal}>Join Now</Button>
                    </div>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>SIGN UP TODAY!</ModalHeader>
                        <ModalBody>

                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Col md={6}>
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input type="text" id="firstName" name="firstName" placeholder="First"               value={this.state.firstName}
                                        invalid={errors.firstName}
                                        onBlur={this.handleBlur("firstName")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input type="text" id="lastName" name="lastName" placeholder="Last"                value={this.state.lastName}
                                        invalid={errors.lastName}
                                        onBlur={this.handleBlur("lastName")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col>
                                        <Label htmlFor="emailAddress">Email Address</Label>
                                        <Input type="text" id="emailAddress" name="emailAddress" placeholder="Email Address"                          value={this.state.emailAddress}
                                        invalid={errors.emailAddress}
                                        onBlur={this.handleBlur("emailAddress")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col>
                                        <Label htmlFor="organization">Organization</Label>
                                        <Input type="text" id="organization" name="organization" placeholder="(Optional)" value={this.state.organization} onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col>
                                        <Label htmlFor="referred">Where did you hear about us?</Label>
                                        <Input type="text" id="referred" name="referred" placeholder="Website, event or reference"                        value={this.state.referred}
                                        invalid={errors.referred}
                                        onBlur={this.handleBlur("referred")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.referred}</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </Form>
                            <Button className="btn-orange float-right">Join Now</Button>
                        </ModalBody>
                    </Modal>
                </React.Fragment>
            );
        }
}



export default CTA;