import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle } from 'reactstrap';

function RenderDirectoryItem(unit) {
    return (
        <Card>
            <Link to={`/diretory/${unit.id}`}>
                <CardImg width="100%" src={unit.image} alt={unit.name} />
                <CardTitle>{unit.name}</CardTitle>
            </Link>
        </Card>
    )
}

function Directory(props) {
    
    const units = props.units.map(unit => {
        return (
            <div key={unit.id} className="col-md-5 m-1">
                <RenderDirectoryItem unit={unit} />
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {units}
                </div>
            </div>
        </div>
    )
}



export default Directory;