import React, { Component } from 'react';
import Add from './Add';
import Update from './Update';

class List extends Component {
  state = {
    datas: []
  };

  getData = () => {
    fetch('https://server-pos.glitch.me/kategori')
      .then(res => {
        console.log('ini res', res);
        return res.json();
      })
      .then(resJson => {
        console.log('ini resjson', resJson);

        this.setState({
          datas: resJson
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  delete = id => {
    fetch(`https://server-pos.glitch.me/kategori/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log('res 1', res);
        this.getData();
        return true;
      })

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Add getData={this.getData} />

        {this.state.datas.length > 0 ? (
          <table>
            {this.state.datas.map(data => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.nama}</td>

                  <td>
                    <Update kode={data.id} getData={this.getData} />
                  </td>

                  <td>
                    <button onClick={() => this.delete(data.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </table>
        ) : (
          <h1>Load</h1>
        )}
      </div>
    );
  }
}

export default List;
