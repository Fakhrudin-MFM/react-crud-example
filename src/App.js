import React, { Component } from 'react';
// import IndexComponent from './components/IndexComponent';
import Web from './components/Web';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/web" component={Web} />
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
