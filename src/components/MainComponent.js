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
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { UNITS } from '../shared/units.js';
import { CALENDERS } from '../shared/calenders.js';
import { CURRENT } from '../shared/currentworkshops.js';
import { fetchUnits } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        units: state.units,
        calendars: state.calendars,
        workshops: state.workshops
    }
}

const mapDispatchToProps = {
    fetchUnits: () => (fetchUnits()),
    resetFeedbackForm: () => (actions.reset('contactForm'))
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: UNITS,
            calenders: CALENDERS,
            current: CURRENT
        };
    }

    componentDidMount() {
        this.props.fetchUnits();
    }

    render() {

        const HomePage = () => {
            return (
                <Home 
                unit={this.state.units.filter(unit => unit.featured)[0]}     
                unitsLoading={this.state.units.isLoading}
                unitsErrMess={this.state.units.errMess}           
                calender={this.state.calenders.filter(calender => calender.featured)[0]}
                addFeedback={this.props.addFeedback}
                />
    
            );
        };

        const UnitWithId = ({match}) => {
            return (
              <UnitInfo 
                unit={this.state.units.filter(unit => unit.id === +match.params.unitId)[0]}
                isLoading={this.state.units.isLoading}
                errMess={this.state.units.errMess}
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
                    <Route path='/orgportal' render={() => <OrgPortal current={this.state.current} /> } />
                    <Route exact path='/events' render={() => <Events calenders={this.state.calenders}/> } />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact'render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));