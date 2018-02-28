import React, { Component } from 'react';
import Login from './components/Login.js';
import Marketing from './components/Marketing.js';

class App extends Component {
  render() {
    return (
      <div>
				<div className="visible-xs visible-sm hidden-md hidden-lg">
					<Login
						loginText="Sign In"
						registerText="Register"
						helpText="Help"/>
				</div>
				<div className="hidden-sm visible-md visible-lg hidden-xs">
					<Marketing
						loginText="Sign In"
						registerText="Register"
						helpText="Forgot password or username?"
						marketingTextOne="Smarter Product Reporting."
						marketingTextTwo="Easier Marketing."/>
				</div>
      </div>
    );
  }
}

export default App;
