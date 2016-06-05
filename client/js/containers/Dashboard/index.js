// Many Apiaries

import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import 'whatwg-fetch';
import './styles.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardStyle: true,
      loading: true,
      apiaries: [],
    };
  }

  componentDidMount() {
    // get token from localStorage
    // const token = localStorage.getItem('bToken');
    const id = localStorage.getItem('bId');

    // for now, id = 57534ba876750f3cb159162d
    // id2 = 5753bbc700ad788702dff9d0
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

  toggleCard = () => {
    if (this.state.cardStyle) {
      return;
    }

    this.setState({
      cardStyle: true,
    });
  }

  toggleList = () => {
    if (!this.state.cardStyle) {
      return;
    }

    this.setState({
      cardStyle: false,
    });
  }

  render() {
    const loading = this.state.loading;

    let copy = (
      <section className="dashboard">
        <p>Loading...</p>
      </section>
    );

    if (!loading && this.state.apiaries.length === 0) {
      copy = (
        <p>No apiaries yet!</p>
      );
    } else {
      const cardStyle = this.state.cardStyle;
      const apiaries = this.state.apiaries.map(apiary => {
        const location = {
          pathname: `/apiary/${apiary.name.replace(/ /g, '_').toLowerCase()}`,
          query: {
            apiaryId: apiary._id,
          },
        };

        return (
          <div data-id={apiary._id}>
            <Link
              to={location}
              className="card"
            >
              <Card>
                <CardMedia
                  overlay={<CardTitle title={apiary.name} />}
                >
                  <img role="presentation" src={apiary.image ? apiary.image : '/assets/apiaries.jpg'} />
                </CardMedia>
              </Card>
            </Link>
          </div>
        );
      });

      copy = (
        <div className={cardStyle ? 'card-container card-container--cards' : 'card-container card-cointainer--list'}>
          {apiaries}
        </div>
      );
    }

    return (
      <section className="dashboard">
        <header className="dashboard-nav">
          <h1 className="dashboard-nav__header">Apiaries</h1>

          <div className="add-apiary">
            <Link
              className="block-utility"
              to="/create/apiary"
            >
              <div className="add-apiary__button">
                <p>Add an apiary <i className="fa fa-plus-circle" aria-hidden="true"></i></p>
              </div>
            </Link>
          </div>
        </header>
        {copy}
      </section>
    );
  }
}

export default Dashboard;
