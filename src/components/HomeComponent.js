import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Home(props) {
    return (
        <React.Fragment>
            <div class="row portals">
                <div class="art-portal-link col-sm-6">
                    <Nav>
                        <NavItem>
                            <NavLink className="nav-link portal-nav-link mx-auto" to="/artistportal">
                                ARTIST PORTAL
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <div class="org-portal-link col-sm-6">
                    <Nav class="nav portal-nav">
                    <NavItem>
                            <NavLink className="nav-link portal-nav-link mx-auto" to="/artistportal">
                                ORGANIZATION POTRAL (COMING SOON)
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;