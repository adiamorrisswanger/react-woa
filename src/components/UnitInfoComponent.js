import React from 'react';



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
            <div>
                <h2>{props.unit.name}</h2>
                <RenderUnitInfo unit={props.unit} />
            </div>
    
        
    );
}
    return <div />
}


export default UnitInfo;