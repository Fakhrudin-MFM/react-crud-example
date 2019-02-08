import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  state = {
    modal: false,
    id: '',
    nama: ''
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createData = () => {
    const data = {
      id: this.state.id,
      nama: this.state.nama
    };

    fetch('https://server-pos.glitch.me/kategori', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log('res 1', res);
        this.props.getData();
        this.toggle();
        return res.json();
      })

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Tambah
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="nama"
              value={this.state.nama}
              onChange={this.handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.createData}>
              Save
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
