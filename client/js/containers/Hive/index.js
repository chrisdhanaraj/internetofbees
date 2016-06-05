import React, { Component } from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch';

class Hives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hives: [],
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <section className="hives">
      </section>
    );
  }
}

export default Hives;
