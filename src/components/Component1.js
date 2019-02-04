import React from 'react';

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Daftar {this.props.nama}</h2>
        <input type="text" />
        <button>Tambah {this.props.nama}</button>
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
