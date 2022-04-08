import React, { Component }  from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
//const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
//const validPass = val => /^[A-Za-z0-9_-]+[^A-Za-z0-9_]+[A-Za-z0-9_]{8,}+[^A-Za-z0-9]{1,}$/i.test(val);

class CTA extends Component {

    
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,
            firstName: '',
            lastName: '',
            username:'',
            emailAddress: '',
            organization: '',
            referred: '',
            touched: {
                firstName: false,
                lastName: false,
                username: false,
                emailAddress: false,
                referred: false
            }
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
        this.toggleModal();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

        render() {

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
                            <Form model="signUpForm" onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col md={6}>
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Control.text
                                            model=".firstName"
                                            id="firstName" 
                                            name="firstName" 
                                            placeholder="First"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least two characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Control.text 
                                            model=".lastName"
                                            id="lastName" 
                                            name="lastName" 
                                            placeholder="Last"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least two characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor="username">Username</Label>
                                        <Control.text 
                                            model=".username"
                                            id="username" 
                                            name="username" 
                                            placeholder="Username"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".username"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least two characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                {/* <Row className="form-group">
                                    <Col md={6}>
                                        <Label htmlFor="password">Please choose a password:</Label>
                                        <Control.text
                                            model=".password"
                                            id="password"
                                            name="password"
                                            placeholder="Required"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validPass
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".password"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validPass: 'Must be at least 8 characters long, include at least one number, one uppercase letter, and one special character'
                                            }}
                                        
                                        />
                                    </Col>
                                </Row> */}
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="emailAddress">Email Address</Label>
                                        <Control.text 
                                            model=".emailAddress"
                                            id="emailAddress" 
                                            name="emailAddress" 
                                            placeholder="Email Address"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".emailAddress"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validemail: 'Invalid email address'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="organization">Organization</Label>
                                        <Control.text
                                            model=".organization"
                                            id="organization" 
                                            name="organization" 
                                            placeholder="(Optional)" 
                                            className="form-control"
                                            validators={{
                                                maxLength: maxLength(30)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".organization"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                maxLength: 'Must be less than 30 characters'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="referred">Where did you hear about us?</Label>
                                        <Control.text
                                            model="referred" 
                                            id="referred" 
                                            name="referred" 
                                            placeholder="Website, event or reference (Optional)"
                                            className="form-control"
                                            validators={{
                                                maxLength: maxLength(30)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".referred"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                maxLength: 'Must be less than 30 characters'
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form>
                            <Button type="submit" className="btn-orange float-right" >Join Now</Button>
                        </ModalBody>
                    </Modal>
                </React.Fragment>
            );
        }
}



export default CTA;