import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveTrip } from '../actions';
import PropTypes from 'prop-types';

function MasterTrips(props) {

  return (
    <div>
      <hr/>
      {Object.keys(props.tripList).map(function() {
        var trip = props.tripList;
        return <li className="list-group-item" key={trip.id}>
          {trip.title}
        </li>
      })}
    </div>
  );
}
MasterTrips.propTypes = {
  tripList: PropTypes.object,
  currentRouterPath: PropTypes.string
}

export default MasterTrips;
