import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


function RenderUnitInfo({unit}) {
    
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mt-2">
                            <img src={unit.image} className="unit-img" width="100%" alt={unit.name} />
                            <Button className="btn btn-orange text-white mt-2 btn-block">Login to Download</Button>
                    </div>
                    <div className="col-md-9">
                        <h4 className="unit-h4">{unit.title1}</h4>
                        <p>{unit.description1}</p>
                        <h4 className="unit-h4">{unit.title2}</h4>
                        <p>{unit.description2}</p>
                        <h4 className="unit-h4">{unit.title3}</h4>
                        <p>{unit.description3}</p>
                        <h4 className="unit-h4">{unit.title4}</h4>
                        <p>{unit.description4}</p>
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
                        <RenderUnitInfo unit={props.unit} />
                    </div>
                </div>
            </React.Fragment>
    );
}
    return <div />
}


export default UnitInfo;