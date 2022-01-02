import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';


function RenderUnits({unit}) {
    return (
        <React.Fragment>
            <div className="container">
                <Card>
                    <CardTitle>
                        <h2>{unit.name}</h2>
                        </CardTitle>
                    <CardBody>
                        {unit.image}
                        {unit.description}
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}

function ArtistPortal(props) {   
    const unitDirectory = props.units.map(unit => {
        return(
            <div key={unit.id} className="m-3">
                <RenderUnits unit={unit} />
            </div>
            );
        }
    );    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Artist Portal</h2>
                    <p>Some introductory text</p>
                    <hr />
                </div>
            </div>
            <div className="row">
                 <div className="col">
                     {unitDirectory}
                 </div>
            </div>
        </div>
    );
    }
    
      
       


export default ArtistPortal;