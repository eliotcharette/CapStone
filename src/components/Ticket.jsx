import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){
  return (
    <div>
      <style jsx>{`
          .color-toggle {
          background-color: lightgreen;
          color: blue;
        }
        .color-toggle:hover {
          background-color: pink;
          color: red;
        }
        `}</style>
      <div className="color-toggle"><h3>{props.location} - {props.names}</h3>
        <h4>{props.formattedWaitTime}</h4>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Ticket;
