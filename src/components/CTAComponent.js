import React, { Component }  from 'react';
import { Button } from 'reactstrap';

class CTA extends Component {
    render() {
        return (
            <div className="cta-header">
                <h2>Work of Art: Business Skills for Artists</h2>
                <p className="py-3">
                    Sign up for interactive content, exercises, and games to strengthen your creative business!
                </p>
                <Button className="btn-green">Join Now</Button>
            </div>
        );
    }
}



export default CTA;