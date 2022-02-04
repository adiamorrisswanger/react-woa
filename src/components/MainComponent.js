import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Events from './EventsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import ArtistPortal from './ArtistPortalComponent';
import OrgPortal from './OrgPortalComponent';
import UnitInfo from './UnitInfoComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UNITS } from '../shared/units.js';
import { CALENDERS } from '../shared/calenders.js';
import { CURRENT_WORKSHOPS } from '../shared/currentworkshops';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: UNITS,
            calenders: CALENDERS,
            currentWorkshops: CURRENT_WORKSHOPS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home 
                unit={this.state.units.filter(unit => unit.featured)[0]}                
                calender={this.state.calenders.filter(calender => calender.featured)[0]}
                calender2={this.state.calenders.filter(calender => calender.featured)[1]}
                />
    
            );
        };

        const UnitWithId = ({match}) => {
            return (
              <UnitInfo 
                unit={this.state.units.filter(unit => unit.id === +match.params.unitId)[0]}
                />
            );
          }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/artistportal' render={() => <ArtistPortal units={this.state.units} /> } /> 
                    <Route path='/artistportal/:unitId' component={UnitWithId} />
                    <Route path='/orgportal' component={OrgPortal} />
                    <Route exact path='/events' render={() => <Events calenders={this.state.calenders}/> } />
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