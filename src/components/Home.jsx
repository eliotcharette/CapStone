import React from 'react';
import plan from '../assets/home-plan.jpg';
import experience from '../assets/home-experiences.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <style jsx>{`
          .img {
            width: 100%;
            height: 100%;
          }
          .top-left {
            position: absolute;
            top: 100px;
            left: 100px;
            color: grey;
            background-color: #F2DFDB;
            opacity: .9;
          }

          `}
      </style>
      <div>
        <div className="row">
          <div className="card-body col-md-6">
            <Link to="/trip"><img src={plan} className="img" /></Link>
            <div className="top-left"><h1>Plan a Trip</h1></div>
          </div>
          <div className="card-body col-md-6">
            <Link to="/experiences"><img src={experience} className="img" /></Link>
            <div className="top-left"><h1>View Experiences</h1></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
