import React from 'react';
import { Card, CardTitle, CardBody, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderFeatured({current}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col md-3">
                    <Card>
                        <CardTitle>
                            <h2 class="h2-card">{current.name}</h2>
                        </CardTitle>
                        <CardBody>
                            {current.description}
                        </CardBody>
                        <CardImg width="100%" src={current.image} alt={current.name} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

function OrgPortal(props) {

    const orgFeatured = props.current.map(current => {
        if(current.featured) {
            return (
                <div key={current.id} className="col-md-4 mb-4 mx-auto">
                    <RenderFeatured current={current} />
                </div>
            );
        }
        
    })
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
                <div className="row">
                    {orgFeatured}
                </div>
            </div>
        </React.Fragment>
        
    )
}


export default OrgPortal;