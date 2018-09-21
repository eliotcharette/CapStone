import React, { Component } from 'react';
import { connect } from 'react-redux';


class MasterTripList extends Component {
  renderList(){
    return this.props.experiences.map((experience) => {
      return (
        <div className="row">
          <div className="col-md-6">
            <li key={experience.name} className="list-group-item">
              <h2>{experience.name}</h2>
              <p>{experience.description}</p>
            </li>
          </div>
          <div className="col-md-6">
            <li className="list-group-item"><h3>{experience.days} days ${experience.price}</h3></li>
          </div>
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
export default connect(mapStateToProps)(MasterTripList);
