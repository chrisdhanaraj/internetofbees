import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import 'whatwg-fetch';
import './styles.scss';

class Apiary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      hives: [],
    };
  }

  componentDidMount() {
    const apiaryId = this.props.location.query.apiaryId;

    fetch(`http://localhost:3000/api/hive?apiaryId=${apiaryId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          hives: data,
          loading: false,
        });
      });
  }

  render() {
    let copy = (<p>Loading...</p>);

    if (!this.state.loading && this.state.hives.length === 0) {
      copy = (<p>You have no hives. Create a hive</p>);
    } else if (!this.state.loading && this.state.hives > 0) {
      const hiveMap = this.state.hives.map(hive => {
        const location = {
          pathname: `/hive/${hive.name.replace(/ /g, '_').toLowerCase()}`,
          query: {
            hiveId: hive._id,
          },
        };

        <Link
          to={location}
          className="card"
        >
          <Card>
            <CardMedia
              overlay={<CardTitle title={hive.name} />}
            >
              <img role="presentation" src='/assets/apiaries.jpg' />
            </CardMedia>
          </Card>
        </Link>
      });


      copy = (
        <div className="">
          {hiveMap}
        </div>
      );
    }

    return (
      <section className="hives">
        <header className="hives-nav">
          <h1 className="hives-nav__header">Apiaries</h1>

          <div className="add-hive">
            <Link
              className="block-utility"
              to="/create/hive"
            >
              <div className="add-hive__button">
                <p>Add a hive <i className="fa fa-plus-circle" aria-hidden="true"></i></p>
              </div>
            </Link>
          </div>
        </header>

        {copy}
      </section>
    );
  }
}

export default Apiary;
