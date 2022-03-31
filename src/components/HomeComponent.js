import React from 'react';
import { Button, Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderUnit({unitItem, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
        return (
            
            <React.Fragment>
                <Card>
                <CardImg width="100%" src={baseUrl + unitItem.image} alt={unitItem.name} />
                    <CardBody className="p-4 px-3 bg-ltgrey">
                        <CardText>
                            <h3 className="h2-date">{unitItem.name}</h3>
                            {unitItem.description}</CardText>
                        <Link to={`/artistportal/${unitItem.id}`} className="card-link" ><Button className="btn-block btn-green">Check It Out</Button></Link>
                    </CardBody>
                </Card>
            </React.Fragment>
    
        );
        
    }

function RenderCalendar({calitem, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
    return (
        <React.Fragment>
        <Card className="bg-ltgrey">
        <CardImg width="100%" src={"../../images/Opening-Celebration-02-Destiny-Roberts-1024x707.jpg"} />
            <CardBody>
                <CardTitle><h2 className="h2-date">{calitem.date}</h2></CardTitle>
                <CardTitle><h5>{calitem.name}</h5></CardTitle>
                <CardText>{calitem.description}</CardText>
                <a href={calitem.link} target="_blank" rel="noreferrer"><Button className="btn-orange text-white">Learn More</Button></a>
            </CardBody>
        </Card>
    </React.Fragment>
);
}


function Home(props) {

    console.log(props.calitem)

return (
    <React.Fragment>
    <div className="container portal-div">
        <div className="row portals">
            <div className="art-portal-link col-sm-6">
                <nav className="portal-nav">
                    <NavLink className="nav-link portal-nav-link " to="/artistportal">
                        Artist Portal
                    </NavLink>
                </nav>
            </div>
            <div className="org-portal-link col-sm-6">
                <nav className="portal-nav">
                    <NavLink className="nav-link portal-nav-link" to="/orgportal">
                        Organization Portal
                    </NavLink>
                </nav>
            </div>
        </div>
    </div>

    <div className="container home-div">
        <div className="row">
            <div className="col-lg-4">
                <h2 className="text-center">Featured Unit</h2>
                <hr />
            </div>
            <div className="col-lg-8">
                        <h2 className="text-center">UPCOMING EVENT</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <RenderUnit 
                            unitItem={props.unit}
                            isLoading={props.unitsLoading}
                            errMess={props.unitsErrMess}
                        />
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <hr></hr>
                        <RenderCalendar 
                            calitem={props.calendar}
                            isLoading={props.calendarLoading}
                            errMess={props.calendarErrMess}
                         />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;