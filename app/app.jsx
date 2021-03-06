import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import * as actions from 'actions';
//var TodoApp = require('TodoApp');
import {configure} from 'configureStore';
//var store = require('configureStore').configure();

import firebase from 'app/firebase/';
import router from 'app/router/';

var store = configure();
//the onAuthStateChanged is called everytime someone logs in or logs out. When someone logs in
//the user argument is present and when someone logs out the user argument is absent. 
firebase.auth().onAuthStateChanged((user)=>{

	if(user) {
		//console.log('user is:', user.uid);
		store.dispatch(actions.login(user.uid)); //store user info in state
		store.dispatch(actions.startAddTodos());
		hashHistory.push('/todos'); //programmatic navigation
	} else {
		store.dispatch(actions.logout()); //clear user info from state
		hashHistory.push('/');
	}
});

//no longer required after app is connected to firebase
// store.subscribe(()=>{
// 	var state = store.getState();
// 	console.log('New state: ', store.getState());
// 	TodoAPI.setTodos(state.todos);
// });

//no longer required after app is connected to firebase
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));



//Load foundation
//the style and css loader are both required to get this to work.
// The css loader loads in the styles file.
// The style loader ensures these styles are actually used when 
//viewing the application in the browser.
//It's a shortcut for when you want to require/import a file but don't 
//need to create a new variable to store any of the files exports.
//The "name!" syntax is used to tell webpack which loaders to use. 
//The exclamation mark is just the convention they (makers of webpack) picked.
//These two loaders will process the css file and add the styles to the project. 
//The css! loader will run first and then style! will execute.

// require('style!css!foundation-sites/dist/css/foundation.min.css');
//require('style!css!foundation-sites/dist/css/foundation-float.min.css');



//app css; applicationStyles is an alias. Check webpack.config.js.
require('style!css!sass!applicationStyles');


$(document).foundation();

//route auth guard for /todos


ReactDOM.render(
			<Provider store={store}>
				{router}
			</Provider>,
			document.getElementById('app')
);