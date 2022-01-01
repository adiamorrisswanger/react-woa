import React from 'react';

function Contact (props) {
    return(
        <div className="container contact-div">
            <h2>Contact Us</h2>
            <hr />
            <div className="contact-container">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Jane" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputEmail">Address</label>
                        <input type="email" className="form-control" id="inputEmail" name="emailAddress"
                            placeholder="janedoe@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label for="inputNumber">Phone Number</label>
                        <input type="phone" className="form-control" id="inputNumber" name="phoneNumber"
                            placeholder="xxx-xxx-xxxx" />
                    </div>
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-4 pt-0 label">Preferred Contact Method</legend>
                            <div className="col">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                        value="option1" />
                                    <label className="form-check-label" for="inlineRadio1" name="contactByEmail">Email</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                        value="option2" />
                                    <label className="form-check-label" for="inlineRadio2" name="contactByPhone">Phone</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <label for="inputMessage">Message</label>
                        <textarea className="form-control" id="inputMessage" name="theMessage" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-green text-white">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;