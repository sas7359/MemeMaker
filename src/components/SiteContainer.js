import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Page imports
import Home from '../pages/Home';
import Library from '../pages/Library';

function SiteContainer() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/library' component={Library}></Route>
      </Switch>
    </div>
  );
}

export default SiteContainer;