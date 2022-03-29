import React from 'react';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

function Events(props) {
    const eventDirectory = props.calendars.map(calendar => {
        return(
            <div key={calendar.id} className="m-3">
                <RenderEvents calendar={calendar} />
            </div>
        );
    });

    return(
        <div className="container calendar-div">
            <div className="row">
                <div className="col">
                    <h2>Calendar of Events</h2>
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

function RenderEvents({calendar}) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <Card className="col-md-12 p-3 bg-ltgrey">
                        <CardTitle>
                            <h2 className="h2-date ml-3 my-0 mt-2">{calendar.date}</h2>
                        </CardTitle>
                        <CardBody>
                            <h5 className="card-title">{calendar.name}</h5>
                            <p className="card-text">{calendar.description}</p>
                            <a href={calendar.link}><Button className="btn btn-orange text-white">Learn More</Button></a>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
}
       


export default Events;