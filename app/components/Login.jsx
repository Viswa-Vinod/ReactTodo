import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var Login = React.createClass({
	onLogin () { //es6 syntax for function expression
		var {dispatch} = this.props;
		dispatch(actions.startLogin());
	},
	render: function () {
		return (
			<div>
				<h1 className = 'page-title'>TodoApp</h1>
				<div className='row'>
					<div className = 'column small-centered small-10  medium-6 large-4'>
						<div className = 'callout callout-auth'>
							<h3>Login</h3>
							<p> Login with github account below</p>
							<button className = 'button' onClick={this.onLogin}>Login with github</button>
						</div>
					</div>
				</div>
			</div>
		)
	} 
});

export default Redux.connect()(Login);