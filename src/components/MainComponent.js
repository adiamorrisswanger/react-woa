import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Events from './EventsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import ArtistPortal from './ArtistPortalComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UNITS } from '../shared/units.js';
import { CALENDERS } from '../shared/calenders.js';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: UNITS,
            calenders: CALENDERS
        }
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/artistportal' render={() => <ArtistPortal /> } />
                    <Route path='/events' render={() => <Events calenders={this.state.calenders}/> } />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact'component={Contact} />
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;