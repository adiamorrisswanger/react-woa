import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); 

class Contact extends Component {

    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        this.props.postContact(values);
        this.props.resetFeedbackForm();
    }

    render() {

        return(
            <div className="container contact-div">
                <div className="row">
                    <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Contact Us</h2>
                    <hr />
                    </div>
                </div>
                <div className="contact-container">
                    <Form model="contactForm" onSubmit={values => this.handleSubmit(values)}>

                    <Row className="form-group">
                        <Col md={6}>
                             <Label htmlFor="firstName">First Name</Label>
                                    <Control.text model=".firstName" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }} />
                                   <Errors
                                    className="text-danger"
                                    model=".firstName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: "Required",
                                        minLength: "You must enter at least two characters.",
                                        maxLength: "You must enter 15 characters or less."
                                    }}
                                   />
                                </Col>

                                <Col md={6}>
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Control.text model=".lastName" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }} />
                                    <Errors
                                         className="text-danger"
                                         model=".lastName"
                                         show="touched"
                                         component="div"
                                         messages={{
                                             required: "Required",
                                             minLength: "You must enter at least two characters.",
                                             maxLength: "You must enter 15 characters or less."
                                         }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={6}>
                                    <Label htmlFor="phoneNum">Phone</Label>
                                    <Control.text model=".phoneNum" type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="5558675309"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }} />
                                    <Errors 
                                         className="text-danger"
                                         model=".phoneNum"
                                         show="touched"
                                         component="div"
                                         messages={{
                                             required: "Required",
                                             minLength: "Must enter at least ten numbers.",
                                             maxLength: "Must enter 15 numbers or less.",
                                             isNumber: "Must be a number."
                                         }}                         
                                    />
                                </Col>
    
                                <Col md={6}>
                                    <Label htmlFor="email">Email</Label>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            validEmail: "Must be a valid email address."
                                        }}                                    
                                    />
                                </Col>
                            </Row>

                        <Row className="form-group">
                            <Col md={6}>
                            <div className="row">
                                <Col md={12}>
                                    <Label>Preferred Contact Method</Label>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Please contact me by Phone</option>
                                        <option>Please contact me by Email</option>
                                    </Control.select>
                                </Col>
                            </div>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={10}>
                                <Label htmlFor="message">Message</Label>
                                <Control.textarea model=".message" id="message" name="message" rows="5"
                                className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={10}>
                                <Button type="submit" className="btn btn-green text-white">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Contact;