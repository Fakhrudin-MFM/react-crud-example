import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import SC1 from './SComponent1';
import SC2 from './SComponent2';
import SC3 from './SComponent3';

class IndexComponent extends Component {
  state = {
    nama: 'Danil',
    semester: 6,
    mobil: ['Honda', 'Suzuki', 'Toyota'],
    laptop: ['Asus', 'Lenovo', 'Samsung']
  };

  render() {
    return (
      <div>
        <h1>halo {this.state.nama}</h1>
        <Component1 nama="Mobil" nilai={this.state.mobil} />
        <Component2 />
        <Component3 />
        <SC1 nama="Laptop" nilai={this.state.laptop} />
        <SC2 />
        <SC3 />
      </div>
    );
  }
}

export default IndexComponent;
