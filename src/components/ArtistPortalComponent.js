import React from 'react';
import { Card, CardTitle, CardBody, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

 

function RenderUnits({unit}) {
    return (
        <Card>
            <Link to={`/artistportal/${unit.id}`} className="card-link" >
                <CardImg width="100%" src={unit.image} alt={unit.name} />
                <CardTitle>
                    <h2 class="h2-card">{unit.name}</h2>
                </CardTitle>
                <CardBody>
                    {unit.description}
                </CardBody>
            </Link>
        </Card>
     
    )
}

function ArtistPortal(props) {   
    const unitDirectory = props.units.map(unit => {
        return (
            <div key={unit.id} className="col-md-4 mb-4 mx-auto d-flex align-items-strech">
                <RenderUnits unit={unit} />
            </div>
            );
        }
    );    
    return (
        
        <React.Fragment>
            <Breadcrumb>
                 <BreadcrumbItem>
                    <Link to='/home'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Artist Portal
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="container artistportal-div">
                <div className="row">
                    <div className="col">
                        <h2>Artist Portal</h2>
                        <p>On this page, you'll find links to each unit of the Work of Art: Business Skills for Artists
                        curriculum. Inside the unit pages, you'll find videos, exercises, and prompts to get you thinking
                        about and strengthening your
                        creative business.</p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                        {unitDirectory}
                </div>
            </div>
        </React.Fragment>
        
    );
    }
    
      
       


export default ArtistPortal;