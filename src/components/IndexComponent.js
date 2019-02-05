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
    inputan: '',
    imobil: '',
    imotor: '',
    ihape: '',
    ilaptop: '',
    ibuah: '',
    imakanan: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = param => {
    let newState;
    switch (param) {
      case 'mobil':
        newState = [...this.state.mobil];
        break;
      case 'motor':
        newState = [...this.state.motor];
      default:
        break;
    }

    const newData = newState;
    newData.push(this.state.inputan);
    this.setState({
      [param]: newData,
      inputan: ''
    });
    console.log('cek param', param);
  };

  render() {
    return (
      <div>
        <Crud />
        <h1>halo {this.state.nama}</h1>
        <Component1
          nama="mobil"
          nilai={this.state.mobil}
          handleChange={this.handleChange}
          inputan={this.state.inputan}
          addTodo={this.addTodo}
        />

        <Component2
          nama="motor"
          nilai={this.state.motor}
          handleChange={this.handleChange}
          inputan={this.state.inputan}
          addTodo={this.addTodo}
        />
        <Component3 nama="HP" nilai={this.state.hape} />
        <SC1 nama="Laptop" nilai={this.state.laptop} />
        <SC2 nama="Buah" nilai={this.state.buah} />
        <SC3 nama="Makanan" nilai={this.state.makanan} />
      </div>
    );
  }
}

export default IndexComponent;
