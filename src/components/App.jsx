import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Home from './Home';
import TripPlanner from './TripPlanner';
import MasterTripList from '../containers/MasterTripList';
import TripsNew from './trip_new';
import MasterTrips from '../containers/NewTripList';
import constants from '../constants';
import * as actions from './../actions';
import PropTypes from 'prop-types';


class App extends Component {

  componentWillMount() {
   const { dispatch } = this.props;
  const { firebaseNewTripListener } = actions;
  dispatch(firebaseNewTripListener());
}

  render(){
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/trip' render={() => <TripPlanner />} />
          <Route path='/experiences' render={() => <MasterTripList />} />
          <Route path='/trips/new' render={() => <TripsNew />} />
          <Route path='/trips' render={() => <MasterTrips  tripList={this.props.savedTrips} />} />
        </Switch>
      </div>
    );
  }
}
App.propTypes = {
  savedTrips: PropTypes.object
};

const mapStateToProps = state => {
  return {
    savedTrips: state.savedTrips
  };
};

export default withRouter (connect(mapStateToProps)(App));
