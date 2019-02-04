import React from 'react';

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Daftar {this.props.nama}</h2>
        <ul>
          <li>
            {this.props.nama} {this.props.nilai[0]}
          </li>
          <li>
            {this.props.nama} {this.props.nilai[1]}
          </li>
          <li>
            {this.props.nama} {this.props.nilai[2]}
          </li>
        </ul>
      </div>
    );
  }
}

export default Component1;
