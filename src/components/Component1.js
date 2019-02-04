import React from 'react';

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Daftar {this.props.nama}</h2>
        <ul>
          {this.props.nilai.map(nilai => {
            return (
              <li>
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
