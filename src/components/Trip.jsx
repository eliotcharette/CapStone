import React from 'react';
import PropTypes from 'prop-types';

const Trip = (props) => {
  return (
    <div>
      <div className="card">
        <h3 className="card-title">{props.name}</h3>
        <div className="row">
          <div className="col-md-6">
            <img src={props.img} className="img" />
          </div>
          <div className="card-body col-md-6">
            <p><em>{props.description}</em></p>
            <h4>Price: ${props.price}</h4>
            <h4>{props.days} Days</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

Trip.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  img: PropTypes.element,
};
export default Trip;
