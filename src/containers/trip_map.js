import React, { Component } from 'react';
import { connect } from 'react-redux';

class TripMap extends Component {
  render() {
    if(!this.props.experience) {
      return <div>Selected a Trip</div>
    }
    return (
      <div>
        <div>{this.props.experience.city}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    experience: state.activeTrip
  }
}
export default connect(mapStateToProps)(TripMap);
