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
    mobil: [],
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
    imakanan: '',
    tombol: true
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = (param, param2) => {
    let newState;
    let iState;
    switch (param) {
      case 'mobil':
        newState = [...this.state.mobil];
        iState = this.state.imobil;
        break;
      case 'motor':
        newState = [...this.state.motor];
        iState = this.state.imotor;
        break;
      default:
        break;
    }

    const newData = newState;
    newData.push(iState);
    this.setState({
      [param]: newData,
      [param2]: ''
    });
  };

  deleteTodo = (index, param) => {
    let newState;
    switch (param) {
      case 'mobil':
        newState = [...this.state.mobil];
        break;
      case 'motor':
        newState = [...this.state.motor];
        break;
      default:
        break;
    }

    const newData = newState;
    newData.splice(index, 1);

    this.setState({
      [param]: newData
    });
  };

  getData = (index, param, param2) => {
    let newState;
    switch (param) {
      case 'mobil':
        newState = this.state.mobil[index];
        break;
      case 'motor':
        newState = this.state.motor[index];
        break;
      default:
        break;
    }
    console.log('data', newState);
    this.setState({
      [param2]: newState,
      tombol: false
    });
  };

  updateTodo = (index, param, param2) => {
    let newState;
    let iState;
    switch (param) {
      case 'mobil':
        newState = [...this.state.mobil];
        iState = this.state.imobil;
        break;
      case 'motor':
        newState = [...this.state.motor];
        iState = this.state.imotor;
        break;
      default:
        break;
    }

    const newData = newState;
    newData.splice(1, 1, iState);
    this.setState({
      [param]: newData,
      [param2]: ''
    });
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
          inputan={this.state.imobil}
          inputanName="imobil"
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          getData={this.getData}
          tombol={this.state.tombol}
          updateTodo={this.updateTodo}
        />

        <Component2
          nama="motor"
          nilai={this.state.motor}
          handleChange={this.handleChange}
          inputan={this.state.imotor}
          inputanName="imotor"
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          getData={this.getData}
          tombol={this.state.tombol}
          updateTodo={this.updateTodo}
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
