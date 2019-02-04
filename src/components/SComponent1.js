import React from 'react';

const StatelessC1 = props => {
  return (
    <div>
      <h2>Daftar Nama {props.nama}</h2>
      <ul>
        <li>
          {props.nama} {props.laptop[0]}
        </li>
        <li>
          {props.nama} {props.laptop[1]}
        </li>
        <li>
          {props.nama} {props.laptop[2]}
        </li>
      </ul>
    </div>
  );
};

export default StatelessC1;
