import React from 'react';
import { Button, Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function RenderUnit({unititem}) {
    return (
        <Card>
            <CardBody>
                <CardImg width="100%" src={unititem.image} alt={unititem.name} />
                <CardText>{unititem.description}</CardText>
                <Button className="btn-block">CHECK IT OUT</Button>
            </CardBody>
        </Card>
    );
}

function RenderCalender({calitem}) {
    return (
        <Card className="mb-3">
            <CardBody>
                <CardTitle><h2>{calitem.date}</h2></CardTitle>
                <CardTitle><h5>{calitem.name}</h5></CardTitle>
                <CardText>{calitem.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderCalender2({calitem2}) {
    return (
        <Card className="mb-3">
            <CardBody>
                <CardTitle><h2>{calitem2.date}</h2></CardTitle>
                <CardTitle><h5>{calitem2.name}</h5></CardTitle>
                <CardText>{calitem2.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props){

    return (
        <React.Fragment>
                <div className="row">
                    <div className="col-6 art-portal-link py-3">
                        <NavLink className="nav-link mx-2 portal-nav-link" to="/home">
                            ARTIST PORTAL
                        </NavLink>
                    </div>
                    <div className="col-6 org-portal-link py-3">
                        <NavLink className="nav-link mx-2 portal-nav-link" to="/home">
                            ORGANIZATION PORTAL
                        </NavLink>
                    </div>
                </div>
            <div className="container home-div">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Featured Unit</h2>
                        <hr />
                        <RenderUnit unititem={props.unit} />
                    </div>
                    <div className="col-md-8">
                        <h2>NEXT CALENDER EVENT</h2>
                        <hr />
                        <RenderCalender calitem={props.calender} />
                        <RenderCalender2 calitem2={props.calender2} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;