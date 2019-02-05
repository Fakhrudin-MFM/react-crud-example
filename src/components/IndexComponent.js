import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component1';
import Component3 from './Component1';
import SC1 from './SComponent1';
import SC2 from './SComponent1';
import SC3 from './SComponent1';
import Crud from './Crud';

class IndexComponent extends Component {
  state = {
    nama: 'Danil',
    semester: 6,
    mobil: ['Honda', 'Suzuki', 'Toyota'],
    motor: ['Honda', 'Suzuki', 'Yamaha'],
    hape: ['Asus', 'Oppo', 'Samsung'],
    laptop: ['Asus', 'Lenovo', 'Samsung'],
    buah: ['Apel', 'Mangga', 'Durian'],
    makanan: ['Sate', 'Bakso', 'Sayur Kol'],
    inputan: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = () => {
    const newData = [...this.state.mobil];
    newData.push(this.state.inputan);
    this.setState({
      mobil: newData,
      inputan: ''
    });
  };

  render() {
    return (
      <div>
        <Crud />
        <h1>halo {this.state.nama}</h1>
        <Component1
          nama="Mobil"
          nilai={this.state.mobil}
          handleChange={this.handleChange}
          inputan={this.state.inputan}
          addTodo={this.addTodo}
        />
        <Component2 nama="Motor" nilai={this.state.motor} />
        <Component3 nama="HP" nilai={this.state.hape} />
        <SC1 nama="Laptop" nilai={this.state.laptop} />
        <SC2 nama="Buah" nilai={this.state.buah} />
        <SC3 nama="Makanan" nilai={this.state.makanan} />
      </div>
    );
  }
}

export default IndexComponent;
