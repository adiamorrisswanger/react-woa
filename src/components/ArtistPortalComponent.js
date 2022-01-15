import React from 'react';
import { Card, CardTitle, CardBody, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderUnits({unit}) {
    return (
            <div className="container">
                <div className="row ">
                    <div className="col">
                            <Card>
                                <Link to={`/${unit.id}`} className="card-link" >
                                    <CardImg width="100%" src={unit.image} alt={unit.name} />
                                    <CardTitle>
                                        <h2>{unit.name}</h2>
                                    </CardTitle>
                                    <CardBody>
                                        {unit.description}
                                    </CardBody>
                                </Link>
                            </Card>
                    </div>
                </div>
            </div>
    )
}

function ArtistPortal(props) {   
    const unitDirectory = props.units.map(unit => {
        return (
            <div key={unit.id} className="col-md-4 mb-4 mx-auto">
                <RenderUnits unit={unit} />
            </div>
            );
        }
    );    
    return (
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
    );
    }
    
      
       


export default ArtistPortal;