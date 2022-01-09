import React, { Component }  from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormFeedback, FormGroup, Label, Input, Col } from 'reactstrap';

class CTA extends Component {

    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
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
                            <Form>
                                <FormGroup row>
                                    <Col md={6}>
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input type="text" id="firstName" name="firstName" placeholder="First" />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input type="text" id="lastName" name="lastName" placeholder="Last" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col>
                                        <Label htmlFor="emailAddress">Email Address</Label>
                                        <Input type="text" id="emailAddress" name="emailAddress" placeholder="Email Address" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col>
                                        <Label htmlFor="organization">Organization</Label>
                                        <Input type="text" id="organization" name="organization" placeholder="(Optional)" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col>
                                        <Label htmlFor="referred">Where did you hear about us?</Label>
                                        <Input type="text" id="referred" name="referred" placeholder="Website, event or reference" />
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