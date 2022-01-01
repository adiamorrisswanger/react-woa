import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import ArtistPortal from './ArtistPortalComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
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