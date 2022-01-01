import React from 'react';
import Directory from './DirectoryComponent';

function ArtistPortal() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Artist Portal</h2>
                        <p>Some introductory text</p>
                    </div>
                </div>
                <div className="row">
                    <Directory />   
                </div>
            </div>
        )
    }    
       


export default ArtistPortal;