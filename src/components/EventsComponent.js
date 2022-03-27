import React from 'react';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

function Events(props) {
    const eventDirectory = props.calenders.map(calender => {
        return(
            <div key={calender.id} className="m-3">
                <RenderEvents calender={calender} />
            </div>
        );
    });

    return(
        <div className="container calender-div">
            <div className="row">
                <div className="col">
                    <h2>Calender of Events</h2>
                    <hr />
                </div>   
            </div>
            <div className="row">
                <div className="col">
                    {eventDirectory}
                </div>
            </div>
        </div>
    );
}

function RenderEvents({calender}) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <Card className="col-md-12 p-3 bg-ltgrey">
                        <CardTitle>
                            <h2 className="h2-date ml-3 my-0 mt-2">{calender.date}</h2>
                        </CardTitle>
                        <CardBody>
                            <h5 className="card-title">{calender.name}</h5>
                            <p className="card-text">{calender.description}</p>
                            <a href={calender.link}><Button className="btn btn-orange text-white">Learn More</Button></a>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
}
       


export default Events;