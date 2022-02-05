import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CTA from './CTAComponent';


class Header extends Component {
    
    constructor(props) {
        super(props);

        
        this.state = {
          isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }


    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>

                <Navbar expand="md">
                    <div className="container">
                        <NavbarBrand href="/"><img src="/images/WoALogo-2020-SM.png" alt="Work of Art Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}  />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link mx-2" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link mx-2" to="/artistportal">
                                        Artist Portal
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link mx-2" to="/orgportal">
                                        Organizations Portal
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link mx-2" to="/about">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link mx-2" to="/events">
                                        Events
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link mx-2" to="/contact">
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron fluid>
                    <CTA />
                </Jumbotron>

            </React.Fragment>
        );
    }
}

export default Header;