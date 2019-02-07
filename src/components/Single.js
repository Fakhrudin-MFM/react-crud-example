import React, { Component } from 'react';

class Single extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(
      'https://id.techinasia.com/wp-json/techinasia/3.0/posts/' +
        this.props.match.params.slug
    )
      .then(res => {
        console.log('aaa', res);
        return res.json();
      })
      .then(resJson => {
        console.log('b', resJson);

        this.setState({ data: resJson.posts });
      })
      .catch(err => {
        throw err;
      });
  };

  render() {
    return (
      <div>
        {this.state.data.length > 0 ? (
          <React.Fragment>
            <h1
              dangerouslySetInnerHTML={{ __html: this.state.data[0].title }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: this.state.data[0].content }}
            />
          </React.Fragment>
        ) : (
          <h1>Loading...............</h1>
        )}
      </div>
    );
  }
}

export default Single;
