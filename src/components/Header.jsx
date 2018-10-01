import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <style>{`
          .header {
          }
          button {
            color: black;
          }
     `}</style>
      <div className='header'>
        <h1>Colombia Trip Planner</h1>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/trip">Trip Planner</Link></button>
        <button><Link to="/triplist">Your Trip List</Link></button>
        <button><Link to="/experiences">Experiences</Link></button>
        <button><Link to="/trips/new">Add an Experience</Link></button>
      </div>
    </div>
  );
};

export default Header;
