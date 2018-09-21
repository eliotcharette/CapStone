import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

class App extends React.Component {

  render(){
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}
export default App;
