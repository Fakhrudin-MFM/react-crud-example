import React from 'react';

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <p>tes data : {this.props.inputan}</p>
        <input
          type="text"
          name={this.props.inputanName}
          value={this.props.inputan}
          onChange={this.props.handleChange}
        />
        <button
          onClick={() =>
            this.props.addTodo(this.props.nama, this.props.inputanName)
          }>
          Tambah {this.props.nama}
        </button>
        <h2>Daftar {this.props.nama}</h2>
        <ul>
          {this.props.nilai.length > 0 ? (
            this.props.nilai.map((nilai, index) => {
              return (
                <li key={index}>
                  {this.props.nama} {nilai}
                  <button
                    onClick={() =>
                      this.props.deleteTodo(index, this.props.nama)
                    }>
                    Delete Data ke {index}{' '}
                  </button>
                </li>
              );
            })
          ) : (
            <h1>Tidak Ada Data</h1>
          )}
        </ul>
      </div>
    );
  }
}

export default Component1;
