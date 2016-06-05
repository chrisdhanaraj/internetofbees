import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './styles.scss';

const App = (props) => (
  <div className="bees">
    <header className="navigation">
      <div className="navigation__logo">
        <p>Internet of Bees</p>
      </div>

      <div className="navigation__menu">
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/profile">Apiaries</Link></li>
          <li><Link to="/profile">Alerts</Link></li>
          <li><Link to="/profile">Logout</Link></li>
        </ul>
      </div>
    </header>
    <main className="main">
      {props.children}
    </main>
  </div>
);

App.PropTypes = {
  children: React.PropTypes.node,
};

export default App;
