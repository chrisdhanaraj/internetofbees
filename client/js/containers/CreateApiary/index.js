import React, { Component } from 'react';
import './styles.scss';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CreateApiary extends Component {
  constructor(props) {
    super(props);

    this.bId = window.localStorage.getItem('bId');

    this.state = {
      name: '',
      image: '',
      zipCode: '',
    };

    this.style = {
      display: 'inline-block',
      width: '150px',
      marginTop: '25px',
    };
  }

  submit = () => {
    const body = Object.assign(this.state, {
      owner: this.bId,
    });

    const API = 'http://localhost:3000/api/apiary';

    fetch(API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(res => res.json())
    .then(this.backToDash);
  }

  backToDash = () => {
    this.context.router.push('/apiaries');
  }

  updateState = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value.trim(),
    });
  }

  render() {
    return (
      <div className="create-apiary">
        <h1 className="create-apiary__header headerText">Create an Apiary</h1>

        <div className="create-container">
          <div className="form">
            <TextField
              hintText="Apiary Name"
              id="name"
              onChange={this.updateState}
              floatingLabelText="Apiary Name"
              floatingLabelFixed
            />

            <TextField
              hintText="Apiary Image URL"
              id="image"
              onChange={this.updateState}
              floatingLabelText="Apiary Image URL"
              floatingLabelFixed
            />

            <TextField
              hintText="Zip Code"
              id="zipCode"
              onChange={this.updateState}
              floatingLabelText="Zip Code"
              floatingLabelFixed
            />

            <RaisedButton label="Save" onClick={this.submit} style={this.style} />
          </div>


          <div className="create-container-image">

          </div>
        </div>
      </div>
    );
  }
}

CreateApiary.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default CreateApiary;
