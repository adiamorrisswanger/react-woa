import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderWorkshopInfo({workshop}) {
    
        return (
            <div className="container" key={workshop._id}>
                <div className="row">
                <div className="col-md-3 mt-2">
                            <img src={baseUrl + workshop.image} className="unit-img" width="100%" alt={workshop.name} />
                            <Button className="btn btn-orange text-white mt-2 btn-block" >More Info</Button>
                    </div>
                    <div className="col-md-9">
                        <h4 className="unit-h4">{workshop.name}</h4>
                        <p>{workshop.description}</p>
                    </div>
                </div>
            </div>
        )
    }


function WorkshopInfo(props) {
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
    
    if (props.workshop) {
        return (
            <React.Fragment>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/orgportal">Organization Portal</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.workshop.name}
                    </BreadcrumbItem>
                </Breadcrumb>
            
                <div className="container unit-div">
                    <h2 className="unit-name">{props.workshop.name}: SUMMARY</h2>
                    <hr />
                    <div className="row">
                        <RenderWorkshopInfo 
                            unit={props.workshop}
                            isLoading={props.workshopsLoading}
                            errMess={props.workshopsErrMess} 
                        />
                    </div>
                </div>
            </React.Fragment>
    );
}
    return <div />
}


export default WorkshopInfo;