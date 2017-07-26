import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {//the arguments come from react-router
	//check if user is logged in; currentUser object will be null if nobody is logged in
	if (!firebase.auth().currentUser) {
		replace('/');
	}
	next();
};

//redirect-to-todos page, if logged in middleware 
var redirectIfLoggedIn = (nextState, replace, next) => {//the arguments come from react-router
	//check if user is logged in; currentUser object will be null if nobody is logged in
	if (firebase.auth().currentUser) {
		replace('todos');
	}
	next();
};

export default (
	<Router history = {hashHistory}>
		<Route path = '/'> 
			<Route path = 'todos' component = {TodoApp} onEnter = {requireLogin}></Route>
			<IndexRoute component = {Login} onEnter = {redirectIfLoggedIn}/>
		</Route>
	</Router>
);