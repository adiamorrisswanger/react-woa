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
import { fetchWorkshops, loginUser, logoutUser, postContact } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        units: state.units,
        calendars: state.calendars,
        workshops: state.workshops,
        auth: state.auth
    };
};

const mapDispatchToProps = {
    postContact: (firstName, lastName, phoneNum, email, contactType, message) => {postContact(firstName, lastName, phoneNum, email, contactType, message)},
    //fetchUnits: () => (fetchUnits()),
    resetFeedbackForm: () => (actions.reset('contactForm')),
    //fetchCalendars: () => (fetchCalendars()),
    fetchWorkshops: () => (fetchWorkshops()),
    loginUser: creds => (loginUser(creds)),
    logoutUser: () => (logoutUser()),
};

class Main extends Component {
   

    componentDidMount() {
        //this.props.fetchUnits();
        //this.props.fetchCalendars();
        this.props.fetchWorkshops();
    }

    render() {

        const HomePage = () => {
            return (
                <Home 
                unit={this.props.units.units.filter(unit => unit.featured)[0]}     
                unitsLoading={this.props.units.isLoading}
                unitsErrMess={this.props.units.errMess}           
                calendar={this.props.calendars.calendars.filter(calendar => calendar.featured)[0]}
                calendarLoading={this.props.calendars.isLoading}
                calendarErrMess={this.props.calendars.errMess}
                />
                
            );
        };
        //console.log(this.props.calendar);

        const UnitWithId = ({match}) => {
            return (
              <UnitInfo 
                unit={this.state.units.filter(unit => unit.id === +match.params.unitId)[0]}
                isLoading={this.state.units.isLoading}
                errMess={this.state.units.errMess}
                />
            );
          };

          /* const PrivateRoute = ({ component: Component, ...rest }) => (
              <Route {...rest} render={props => (
                  this.props.auth.isAuthenticated 
                    ? <Component {...props} /> 
                    : <Redirect to={{
                        pathname: '/home',
                        state: { from: props.location }
                        }}
                    />
                )}
            />
          ); */

        return(
            <div>
                <Header 
                    auth={this.props.auth}
                    loginUser={this.props.loginUser}
                    logoutUser={this.props.logoutUser}/>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/artistportal' render={() => <ArtistPortal units={this.props.units} /> } /> 
                    <Route path='/artistportal/:unitId' component={UnitWithId} />
                    <Route path='/orgportal' render={() => <OrgPortal current={this.props.current} /> } />
                    <Route exact path='/events' render={() => <Events calendars={this.props.calendars}/> } />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact'render={() => <Contact postContact={this.props.postContact} resetFeedbackForm={this.props.resetFeedbackForm}/>} />
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));