import React from 'react';
import { Button, Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RenderUnit({unititem}) {
    return (
    
        <Card>
            <CardImg width="100%" src={unititem.image} alt={unititem.name} />
            <CardBody className="text-white p-4 px-3 featured-card">
                <CardText>{unititem.description}</CardText>
                <Link to={`/artistportal/${unititem.id}`} className="card-link" ><Button className="btn-block">Check It Out</Button></Link>
            </CardBody>
        </Card>
        
    );
}

function RenderCalender({calitem}) {
    return (
        <Card className="mb-3 bg-ltgrey">
            <CardBody>
                <CardTitle><h2>{calitem.date}</h2></CardTitle>
                <CardTitle><h5>{calitem.name}</h5></CardTitle>
                <CardText>{calitem.description}</CardText>
                <a href={calitem.link}><Button className="btn btn-orange text-white">Learn More</Button></a>
            </CardBody>
        </Card>
    );
}


function Home(props){

    return (
        <React.Fragment>
            <div className="container home-div">
                <div className="row">
                    <div className="col-md-4">
                        <h2 class="text-center">Featured Unit</h2>
                        <hr></hr>
                        <RenderUnit unititem={props.unit} />
                    </div>
                    <div className="col-md-8">
                        <h2 class="text-center">NEXT CALENDER EVENT</h2>
                        <hr></hr>
                        <RenderCalender calitem={props.calender} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;