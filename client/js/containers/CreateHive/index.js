import React, { Component } from 'react';
import './styles.scss';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CreateHive extends Component {
  constructor(props) {
    super(props);

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

    const API = 'http://localhost:3000/api/hive';

    fetch(API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(this.backToDash);
  }

  backToDash = () => {
    this.context.router.push('/apiaries');
  }

  updateState = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  }

  render() {
    return (
      <div className="create-hive">
        <h1 className="create-hive__header headerText">Create a Hive</h1>

        <div className="create-container">
          <div className="form">
            <TextField
              hintText="Hive Name"
              id="name"
              onChange={this.updateState}
              floatingLabelText="Hive Name"
              floatingLabelFixed
            />

            <TextField
              hintText="Hive Image URL"
              id="image"
              onChange={this.updateState}
              floatingLabelText="Hive Image URL"
              floatingLabelFixed
            />

            <TextField
              hintText="Hive Age"
              id="age"
              onChange={this.updateState}
              floatingLabelText="Hive Age"
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

CreateHive.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default CreateHive;
