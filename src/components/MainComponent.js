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
import WorkshopInfo from './WorkshopInfoComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { fetchWorkshops, fetchUnits, loginUser, logoutUser, postContact, postUser } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        units: state.units,
        calendars: state.calendars,
        workshops: state.workshops,
        auth: state.auth,
        users: state.users
    };
};

const mapDispatchToProps = {
    postContact: contact => (postContact(contact)),
    fetchUnits: () => (fetchUnits()),
    //fetchCalendars: () => (fetchCalendars()),
    resetFeedbackForm: () => (actions.reset('contactForm')),
    fetchWorkshops: () => (fetchWorkshops()),
    loginUser: creds => (loginUser(creds)),
    logoutUser: () => (logoutUser()),
    postUser: user => {postUser(user)}
};

class Main extends Component {
   

    componentDidMount() {
        this.props.fetchUnits();
        this.props.fetchWorkshops();
        //this.props.fetchCalendars();
    }

    render() {

        const HomePage = () => {
            return (
                <Home 
                unit={this.props.units.units.filter(unit => unit.featured)[0]}     
                unitsLoading={this.props.units.isLoading}
                unitsErrMess={this.props.units.errMess}    
                /* calendar={this.props.calendars.calendars.filter(calendar => calendar.featured)[0]}
                calendarsLoading={this.props.calendars.isLoading}
                calendarsErrMess={this.props.calendars.errMess} */       
                />
                
            );
            
        };
        

        const UnitWithId = ({match}) => {
            return (
              <UnitInfo 
                unit={this.props.units.units.filter(unit => unit.id === +match.params.unitId)[0]}
                isLoading={this.props.units.isLoading}
                errMess={this.props.units.errMess}
                />
            );
          };

          const WorkshopWithId = ({match}) => {
            return (
              <WorkshopInfo 
                workshop={this.state.workshops.workshops.filter(workshop => workshop.id === +match.params.workshopId)[0]}
                isLoading={this.state.workshops.isLoading}
                errMess={this.state.workshops.errMess}
                />
            );
          }; 

          const PrivateRoute = ({ component: Component, ...rest }) => (
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
          ); 

        return(
            <div>
                <Header 
                    auth={this.props.auth}
                    loginUser={this.props.loginUser}
                    logoutUser={this.props.logoutUser}
                    postUser={this.props.postUser}
                />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/artistportal' render={() => <ArtistPortal units={this.props.units} /> } /> 
                    <Route path='/artistportal/:unitId' component={UnitWithId} />
                    <Route path='/orgportal' render={() => <OrgPortal workshops={this.props.workshops} /> } />
                    <Route path='/orgportal/:workshopId' component={WorkshopWithId} /> 
                    <Route exact path='/events' render={() => <Events calendars={this.props.calendars}/> } />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact'render={() => <Contact postContact={this.props.postContact} resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        );
    }
} 


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));