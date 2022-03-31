import React from 'react';
import { Card, CardTitle, CardBody, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
 

function RenderUnits({unit}) {
    return (
        <Card>
            <Link to={`/artistportal/${unit.id}`} className="card-link" >
                <CardImg width="100%" src={baseUrl + unit.image} alt={unit.name} />
                <CardTitle>
                    <h2 className="h2-card">{unit.name}</h2>
                </CardTitle>
                <CardBody>
                    {unit.description}
                </CardBody>
            </Link>
        </Card>
     
    )
}
function ArtistPortal(props) {   
    const unitDirectory = props.units.units.map(unit => {
        return (
            <div key={unit.id} className="col-md-4 mb-4 mx-auto d-flex align-items-strech">
                <RenderUnits unit={unit} />
            </div>
            );
        }
    );    

    if (props.units.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if (props.units.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.units.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }
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