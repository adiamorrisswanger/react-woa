import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderUnitInfo({unit}) {
    
        return (
            <div className="container" key={unit.id}>
                <div className="row">
                <div className="col-md-3 mt-2">
                            <img src={baseUrl + unit.image} className="unit-img" width="100%" alt={unit.name} />
                            <Button className="btn btn-orange text-white mt-2 btn-block">Login to Download</Button>
                    </div>
                    <div className="col-md-9">
                        <h4 className="unit-h4">{unit.name}</h4>
                        <p>{unit.description}</p>
                    </div>
                </div>
            </div>
        )
    }


function UnitInfo(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{this.props.errMess}</h4>
                    </div>
                    
                </div>
            </div>
        )
    }
    
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
            
                <div className="container unit-div">
                    <h2 className="unit-name">{props.unit.name}: SUMMARY</h2>
                    <hr />
                    <div className="row">
                        <RenderUnitInfo 
                            unit={props.unit}
                            isLoading={props.unitsLoading}
                            errMess={props.unitsErrMess} 
                        />
                    </div>
                </div>
            </React.Fragment>
    );
}
    return <div />
}


export default UnitInfo;