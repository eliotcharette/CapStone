import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveTrip } from '../actions';

class MasterTrips extends Component {
  componentDidMount() {
    this.props.receiveTrip();
  }

  renderTrips() {
    return _.map(this.props.trips, trip => {
      return (
        <li className="list-group-item" key={data.getKey()}>
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
            Add a trip
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
  return { trips: state.savedTrips };
}

export default connect(mapStateToProps, { receiveTrip })(MasterTrips);
