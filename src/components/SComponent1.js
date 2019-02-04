import React from 'react';

const StatelessC1 = props => {
  return (
    <div>
      <h2>Daftar Nama {props.nama}</h2>
      <ul>
        {props.nilai.map(nilai => {
          return (
            <li>
              {props.nama} {nilai}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StatelessC1;
