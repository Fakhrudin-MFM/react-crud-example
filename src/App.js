import React, { Component } from 'react';
// import IndexComponent from './components/IndexComponent';
import Web from './components/Web';
import { Route } from 'react-router-dom';
import Single from './components/Single';
import Navigasi from './components/Navigasi';

class App extends Component {
  render() {
    return (
      <div>
        <Navigasi />
        <Route path="/" component={Home} exact />
        <Route path="/web" component={Web} exact />
        <Route path="/web/:slug" component={Single} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

const Home = () => {
  return <h1>Ini home</h1>;
};

const About = () => {
  return <h1>Ini About</h1>;
};

export default App;
