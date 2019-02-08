import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class ModalExample extends React.Component {
  state = {
    modal: false,
    id: '',
    nama: '',
    datas: []
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  update = id => {
    const data = {
      nama: this.state.nama
    };

    axios
      .put(`https://server-pos.glitch.me/kategori/${id}`, data)
      .then(res => {
        this.props.getData();
        this.toggle();
        return true;
      })
      .catch(err => console.log(err));
  };

  getDataById = () => {
    fetch(`https://server-pos.glitch.me/kategori/${this.props.kode}`)
      .then(res => {
        console.log('ini resss', res);
        return res.json();
      })
      .then(resJson => {
        console.log('ini resjsodddddn', resJson);

        this.setState(prevState => ({
          datas: resJson,
          id: resJson[0].id,
          nama: resJson[0].nama,
          modal: !prevState.modal
        }));
      });
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.getDataById}>
          Edit
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
              disabled
            />

            <input
              type="text"
              name="nama"
              value={this.state.nama}
              onChange={this.handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.update(this.props.kode)}>
              Save
            </Button>
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
