import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // get profile information
  }

  render() {
    return (
      <section className="profile">
      </section>
    );
  }
}

export default Profile;
