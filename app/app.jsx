
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//var TodoApp = require('TodoApp');
import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';

//no longer required after app is connected to firebase
// store.subscribe(()=>{
// 	var state = store.getState();
// 	console.log('New state: ', store.getState());
// 	TodoAPI.setTodos(state.todos);
// });

//no longer required after app is connected to firebase
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

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

ReactDOM.render(
			<Provider store={store}>
				<Router history = {hashHistory}>
					<Route path = '/'> 
						<Route path = 'todos' component = {TodoApp}></Route>
						<IndexRoute component = {Login}/>
					</Route>
				</Router>
			</Provider>,
			document.getElementById('app')
);