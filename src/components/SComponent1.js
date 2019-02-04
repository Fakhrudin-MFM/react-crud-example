import React from 'react';

const StatelessC1 = props => {
  return (
    <div>
      <h2>Daftar Nama {props.nama}</h2>
      <ul>
        {props.nilai.map((nilai, index) => {
          return (
            <li key={index}>
              {props.nama} {nilai}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StatelessC1;
