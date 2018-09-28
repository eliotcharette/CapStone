import React from 'react';

const TripPlanner = () => {
  return (
    <div>
      <style jsx>{`
          

          `}
      </style>
      <div>
        <h1>Start Planning Your Trip!</h1>
        <div className="row">
          <div className="card-body col-md-6">
            <h3>How many weeks do you have?</h3>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="card-body col-md-6">

            <div className="top-left"><h3>What's Your Budget?</h3></div>
            <select>
              <option>Under $1000</option>
              <option>$1000-2000</option>
              <option>$2000-3000</option>
              <option>$300-4000</option>
              <option>$4000+</option>
            </select>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
