import React, { Component } from 'react';

class Crud extends Component {
  state = {
    todo: ['Sholat Tahajud', 'Sholat Duha', 'Belajar React'],
    kegiatan: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = () => {
    const newData = [...this.state.todo];
    newData.push(this.state.kegiatan);
    this.setState({
      todo: newData,
      kegiatan: ''
    });
  };

  deleteTodo = index => {
    const newData = [...this.state.todo];
    newData.splice(index, 1);

    this.setState({
      todo: newData
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="kegiatan"
          onChange={this.handleChange}
          value={this.state.kegiatan}
        />

        <button onClick={this.addTodo}>Tambah</button>

        <h1>To Do List</h1>
        <ul>
          {this.state.todo.map((todo, index) => {
            return (
              <li key={index}>
                {todo}
                <button onClick={() => this.deleteTodo(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
        <h1>==================================</h1>
      </div>
    );
  }
}

export default Crud;
