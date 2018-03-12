import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className='site-header col-mid'>
          <h1>Welcome to Chirpr!</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
