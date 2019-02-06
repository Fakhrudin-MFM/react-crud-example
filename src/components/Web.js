import React, { Component } from 'react';
// import axios from 'axios'
import Navigasi from './Navigasi';
import Kartu from './Kartu';
import { Container, Row } from 'reactstrap';

class Web extends Component {
  state = {
    datas: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    console.log('get Data Running');
    fetch(
      'https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15'
    )
      .then(res => {
        // console.log('aaa', res)
        return res.json();
      })
      .then(resJson => {
        this.setState({ datas: resJson.posts });
      })
      .catch(err => {
        throw err;
      });
  };

  render() {
    return (
      <Container>
        <Navigasi />
        <Row>
          {this.state.datas.length > 0 ? (
            this.state.datas.map(data => {
              console.log('data hasil map', data);
              return <Kartu data={data} />;
            })
          ) : (
            <h1>Loading..............</h1>
          )}
        </Row>
      </Container>
    );
  }
}

export default Web;
