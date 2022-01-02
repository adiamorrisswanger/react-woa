import React, { Component } from 'react';
import { UNITS } from '../shared/units';
import Directory from './DirectoryComponent';

class ArtistPortal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: UNITS
        }
    }    
    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Artist Portal</h2>
                        <p>Some introductory text</p>
                    </div>
                </div>
                <div className="row">
                     {this.renderDirectory}
                </div>
            </div>
        )
    }
    
    }    
       


export default ArtistPortal;