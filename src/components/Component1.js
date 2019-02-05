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

        {this.props.tombol ? (
          <button
            onClick={() =>
              this.props.addTodo(this.props.nama, this.props.inputanName)
            }>
            Tambah {this.props.nama}
          </button>
        ) : (
          <button onClick={() => this.props.updateTodo()}>Update</button>
        )}

        <h2>Daftar {this.props.nama}</h2>
        <ul>
          {this.props.nilai.length > 0 ? (
            this.props.nilai.map((nilai, index) => {
              return (
                <li key={index}>
                  {this.props.nama} {nilai}
                  <button
                    onClick={() =>
                      this.props.getData(
                        index,
                        this.props.nama,
                        this.props.inputanName
                      )
                    }>
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      this.props.deleteTodo(index, this.props.nama)
                    }>
                    Delete
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
