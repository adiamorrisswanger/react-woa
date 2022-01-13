import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import CardTitle from 'reactstrap/lib/CardTitle';


function RenderUnitInfo({unit}) {
    return (
        <div>
            <Card>
                <CardImg top src={unit.image} alt={unit.name} />
                    <CardTitle>{unit.name}</CardTitle>
                    <CardBody>
                        <CardText>
                            {unit.longDescription}
                        </CardText>
                    </CardBody>
            </Card>
        </div>
            
    )
}

function UnitInfo(props) {
    if (props.unit) {
        return (
            <div>
                <h2>{props.unit.name}</h2>
                <RenderUnitInfo unit={props.unit} />
            </div>
    
        
    )
}
    return <div />
}


export default UnitInfo;