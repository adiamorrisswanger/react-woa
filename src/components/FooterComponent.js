import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="text-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4 pt-3">
                        <img className="img-fluid" src="/images/SpringboardLogo_3color.png" width="80%" alt="Springboard Logo"/>
                    </div>
                    <div className="col-sm-4">
                        <h4>Navigation</h4>
                        <NavLink className="nav-link mx-2" to="/home">
                            Home
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="/about">
                            About Work of Art
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="/artistportal">
                            Artist Portal
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="/events">
                            Upcoming Events
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="/contact">
                            Contact Us
                        </NavLink>
                    </div>
                    <div className="col-sm-4">
                        <h4>Springboard for the Arts</h4>
                        <NavLink className="nav-link mx-2" to="https://springboardforthearts.org">
                            Springboard Home
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="https://springboardforthearts.org/grants-funding/incubator">
                            Incubator Fiscal Sponsorship
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="https://springboardforthearts.org/jobs">
                            Job Board
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="https://springboardexchange.org">
                            Creative Exchange
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="https://springboardforthearts.org/professional-growth/springboard-resource-centers">
                            Resource Center
                        </NavLink>
                    </div>
                </div>
                <hr />
                <div className="row-sm-12">
                    <small>
                        Work of Art: Business Skills for Artists Ⓒ 2021 Springboard for the Arts. All rights reserved.
                    </small>
                </div>  
            </div>
        </footer>
    );
}

export default Footer;