import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './styles.scss';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userId = window.localStorage.getItem('bId');

    // temp while login is fixed
    if (!userId) {
      window.localStorage.setItem('bId', '57534ba876750f3cb159162d');
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="bees">
          <header className="navigation">
            <div className="navigation__logo">
              <p><Link to="/apiaries"><span className="bold">BEE</span>KEEP</Link></p>
            </div>

            <div className="navigation__menu">
              <ul>
                <li><Link activeClassName="active" to="/profile">Profile</Link></li>
                <li><Link activeClassName="active" to="/apiaries">Apiaries</Link></li>
                <li><Link activeClassName="active" to="/logout">Logout</Link></li>
              </ul>
            </div>
          </header>
          <main className="main">
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.PropTypes = {
  children: React.PropTypes.node,
};

export default App;
