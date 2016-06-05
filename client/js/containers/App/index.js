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
    console.log(userId);
  }

  logout = () => {
    window.localStorage.clear();
    window.location = '/';
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
                <li><a onClick={this.logout}>Logout</a></li>
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

App.contextTypes = {
  router: React.PropTypes.object.isRequired,
};


export default App;
