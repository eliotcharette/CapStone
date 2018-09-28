import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTrip } from '../actions/index';
import { bindActionCreators } from 'redux';
import TripMap from './trip_map';


class MasterTripList extends Component {
  renderList(){
    return this.props.experiences.map((experience) => {
      return (
        <div className="row" onClick={() => this.props.selectTrip(experience)}>
          <div className="col-md-6">
            <li key={experience.name} className="list-group-item">
              <h2>{experience.name}</h2>
              <p>{experience.description}</p>
            </li>
          </div>
          <div className="col-md-6">
            <li className="list-group-item"><h3>{experience.days} days ${experience.price}</h3></li>
          </div>
          <li><TripMap /></li>
          <td></td>
        </div>
      );
    });
  }
  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    experiences: state.experiences
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTrip: selectTrip }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterTripList);
