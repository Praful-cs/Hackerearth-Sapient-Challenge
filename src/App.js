import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GameArena from './components/GameArena';

class App extends React.Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={GameArena} />
        <Redirect to="/" />
      </Switch>
    );
    return(
      <div>
        {routes}
      </div>
    )
  }
}

export default App;
