import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from './redux/mapStoreToProps';

// custom styling
import './App.css';

// custom components
import Nav from './components/Nav/Nav';
import About from './views/About/About';
import Home from './views/Home/Home';
import Work from './views/Work/Work';

function App(props) {
  console.log(props);
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect(mapStoreToProps)(App);
