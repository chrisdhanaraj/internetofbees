import React, { Component } from 'react';
import 'whatwg-fetch';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      apiaries: [],
    };
  }

  componentDidMount() {
    // get token from localStorage
    // const token = localStorage.getItem('bToken');
    // const id = localStorage.getItem('bId');

    // for now, id = 57534ba876750f3cb159162d
    const id = '57534ba876750f3cb159162d';
    // if no token, redirect to login
    // fetch apiaries if they exist
    this.getApiaries(`http://localhost:3000/api/apiary?id=${id}`);
  }

  getApiaries = (url) => {
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          apiaries: data,
          loading: false,
        });
      });
  };

  render() {
    const loading = this.state.loading;

    if (loading) {
      return (
        <section className="dashboard">
          <p>Loading...</p>
        </section>
      );
    } else {
      const apiaries = this.state.apiaries.map(apiary => {
        return (
          <div className="card">
            <p className="card__name">{apiary.name}</p>
            <div className="card__circle"></div>
          </div>
        );
      });

      return (
        <section className="dashboard">
          {apiaries}
        </section>
      );
    }
  }
}

export default Dashboard;
