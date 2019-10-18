import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Page imports
import Home from '../pages/Home';
import Library from '../pages/Library';
import Editor from '../pages/Editor';

function SiteContainer() {
  return (
    <div className="App">
      <Container variant="light">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/library' component={Library}></Route>
          <Route exact path='/editor' component={Editor}></Route>
        </Switch>
      </Container>
    </div>
  );
}

export default SiteContainer;