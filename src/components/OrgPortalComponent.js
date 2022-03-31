import React from 'react';
import { Card, CardTitle, CardBody, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderFeatured({workshop}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col md-3">
                    <Card>
                        <Link to={`/orgportal/${workshop.id}`} className="card-link">
                            <CardImg width="100%" src={workshop.image} alt={workshop.name} />
                            <CardTitle>
                                <h2 className="h2-card">{workshop.name}</h2>
                            </CardTitle>
                            <CardBody>
                                {workshop.description}
                            </CardBody>
                        </Link>
                   
                       
                    </Card>
                </div>
            </div>
        </div>
    )
}
function OrgPortal(props) {

    const orgFeatured = props.workshops.workshops.map(workshop => {
        if(workshop.featured) {
            return (
                <div key={workshop.id} className="col-md-4 mb-4 mx-auto">
                    <RenderFeatured workshop={workshop} />
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