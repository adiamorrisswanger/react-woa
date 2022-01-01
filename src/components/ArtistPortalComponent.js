import React from 'react';
import Directory from './DirectoryComponent';

function ArtistPortal() {
        return (
            <div>
                
                <h2>Artist Portal</h2>
                <p>Some introductory text</p>
                <Directory units={this.props.unit}/>
            </div>
        )
    }


export default ArtistPortal;