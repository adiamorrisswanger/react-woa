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
import { fetchUnits, loginUser, logoutUser } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        calenders: state.calenders,
        currentworkshop: state.currentworkshop,
        units: state.units
    };
};

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home 
                unit={this.props.units.filter(unit => unit.featured)[0]}                
                calender={this.props.calenders.filter(calender => calender.featured)[0]}
                />
            );
        };

        const UnitWithId = ({match}) => {
            return (
              <UnitInfo 
                unit={this.props.units.filter(unit => unit.id === +match.params.unitId)[0]}
                />
            );
          }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/artistportal' render={() => <ArtistPortal units={this.props.units} /> } /> 
                    <Route path='/artistportal/:unitId' component={UnitWithId} />
                    <Route path='/orgportal' render={() => <OrgPortal currentworkshop={this.props.currentworkshop} /> } />
                    <Route exact path='/events' render={() => <Events calenders={this.props.calenders}/> } />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact'component={Contact} />
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));