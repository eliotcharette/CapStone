import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import TripPlanner from './TripPlanner';
import MasterTripList from '../containers/MasterTripList';
import UserTripList from './UserTripList';

export default class App extends Component {

  render(){
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/trip' render={()=><TripPlanner />} />
          <Route path='/experiences' render={()=><MasterTripList />} />
          <Route path='/triplist' render={()=><UserTripList />} />
        </Switch>
      </div>
    );
  }
}
