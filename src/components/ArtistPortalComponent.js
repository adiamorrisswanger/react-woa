import React from 'react';
<<<<<<< HEAD
import { Card, CardTitle, CardBody, CardImg } from 'reactstrap';
function RenderUnits({unit}) {
    return (
        <React.Fragment>
            <div className="container">
                <Card>
                    <CardImg src={unit.image} alt={unit.name} />
                    <CardTitle>
                        <h2>{unit.name}</h2>
                        </CardTitle>
                    <CardBody>
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
=======
import { Card, CardTitle, CardBody, CardImg, Container, Row, Col } from 'reactstrap';
import CardGroup from 'reactstrap/lib/CardGroup';


function RenderUnits({unit}) {
    return (
 
            <div className="container">
                <div className="row ">
                    <div className="col">
                            <Card>
                                <CardImg width="100%" src={unit.image} alt={unit.name} />
                                <CardTitle>
                                    <h2>{unit.name}</h2>
                                    </CardTitle>
                                <CardBody>
                                    
                                    {unit.description}
                                </CardBody>
                            </Card>
                    </div>
                </div>
            </div>
    )
}

function ArtistPortal(props) {   
    const unitDirectory = props.units.map(unit => {
        return(
            <div key={unit.id} className="col-md-4 mb-4 mx-auto">
>>>>>>> 896aae3e2c2469be7de58aa373dee388530559b3
                <RenderUnits unit={unit} />
            </div>
            );
        }
<<<<<<< HEAD
    );
=======
    );    
>>>>>>> 896aae3e2c2469be7de58aa373dee388530559b3
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
<<<<<<< HEAD
                 <div className="col">
                     {unitDirectory}
                 </div>
=======
                     {unitDirectory}
>>>>>>> 896aae3e2c2469be7de58aa373dee388530559b3
            </div>
        </div>
    );
    }
<<<<<<< HEAD
=======
    
      
       


>>>>>>> 896aae3e2c2469be7de58aa373dee388530559b3
export default ArtistPortal;