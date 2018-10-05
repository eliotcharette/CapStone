import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrips } from '../actions';
import PropTypes from 'prop-types';

class MasterTrips extends Component {
  componentWillMount() {
    this.props.fetchTrips();
  }

  renderTrips() {
    return _.map(this.props.trips, trip => {
      if(!trip){
    return <div>Loading. . .</div>
  }
      return (
        <li className="list-group-item" key={trip.id}>
          {trip.title}
        </li>
      );
    });
  }

  render() {

    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/trips/new">
            Add a Trip
          </Link>
        </div>
        <h3>Trips</h3>
        <ul className="list-group">
          {this.renderTrips()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { trips: state.trips };
}

export default connect(mapStateToProps, { fetchTrips })(MasterTrips);
