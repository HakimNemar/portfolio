import React from 'react';
import './scss/style.css';
import Index from './components/Home/Home';
import Mouse from './components/Mouse/Mouse';
// import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </Router> */}
      <Mouse />
      <Index />
    </>
  );
}

export default App;
