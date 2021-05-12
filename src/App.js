import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import NaviBar from './components/NaviBar';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <NaviBar />
      <Jumbotron />
      <Layout>
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
{/* <Route path = "/about" component = {About} />
<Route path = "/contact" component = {Contact} /> */}