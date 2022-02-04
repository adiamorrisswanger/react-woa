import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderUnitInfo({unit}) {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                            <img src={unit.image} width="100%" alt={unit.name} />
                    </div>
                    <div className="col-md-9">
                        <h3>{unit.title1}</h3>
                        <p>{unit.description1}</p>
                        <h3>{unit.title2}</h3>
                        <p>{unit.description2}</p>
                        <h3>{unit.title3}</h3>
                        <p>{unit.description3}</p>
                        <h3>{unit.title4}</h3>
                        <p>{unit.description4}</p>
                    </div>
                </div>
            </div>
    )
}

function UnitInfo(props) {
    if (props.unit) {
        return (
            <React.Fragment>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/artistportal">Artist Portal</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.unit.name}
                    </BreadcrumbItem>
                </Breadcrumb>
            
                <div className="container">
                    <div className="row">
                        <h2>{props.unit.name}</h2>
                    </div>
                    <div className="row">
                        <RenderUnitInfo unit={props.unit} />
                    </div>
                </div>
            </React.Fragment>
            
    
        
    );
}
    return <div />
}


export default UnitInfo;