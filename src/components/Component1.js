import React from 'react';

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <p>tes data : {this.props.inputan}</p>
        <input
          type="text"
          name="inputan"
          value={this.props.inputan}
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.addTodo}>Tambah {this.props.nama}</button>
        <h2>Daftar {this.props.nama}</h2>
        <ul>
          {this.props.nilai.map((nilai, index) => {
            return (
              <li key={index}>
                {this.props.nama} {nilai}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Component1;
