import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>

                <Navbar sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand href="/"><img src="/images/WoALogo-2020-SM.png" alt="NuCamp Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link mx-2" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link mx-2" to="/home">
                                        Artist Portal
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link mx-2" to="/home">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link mx-2" to="/home">
                                        Events
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link mx-2" to="/home">
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron fluid>
                    <div className="cta-header">
                        <h2>Work of Art: Business Skills for Artists</h2>
                        <p className="py-3">
                            Sign up for interactive content, exercises, and games to strengthen your creative business!
                        </p>
                    </div>
                </Jumbotron>

            </React.Fragment>
        );
    }
}

export default Header;