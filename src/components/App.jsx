import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import TripPlanner from './TripPlanner';
import MasterTripList from './MasterTripList';
import UserTripList from './UserTripList';

class App extends React.Component {

  render(){
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/trip' render={()=><TripPlanner />} />
          <Route path='/experiences' render={()=><MasterTripList />} />
          <Route path='/triplist' render={()=><UserTripList />} />
        </Switch>
      </div>
    );
  }
}
export default App;
