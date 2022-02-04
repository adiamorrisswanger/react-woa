import React from 'react';
import { Card, CardTitle, CardBody, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function OrgPortal(props) {
    return (
        <React.Fragment>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/home'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Organizations Portal
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="container artistportal-div">
                <div className="row">
                    <div className="col">
                        <h2>Organizations Portal</h2>
                        <p>
                            On this page, you'll find information about the Work of Art: Business Skills for Artists toolkit, the Work of Art Intensive, where you can learn how to facilitate the Work of Art workshops, bookable workshops and panels, and our current roster of workshop facilitators.
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    )
}


export default OrgPortal;