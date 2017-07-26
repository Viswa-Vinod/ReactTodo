
import React from 'react';
import * as Redux  from 'react-redux';
//the below two variables are no longer required after wiring up to firebase
// var uuid = require('node-uuid');
// var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';


//var TodoAPI = require('TodoAPI'); --> not required with redux

export var TodoApp = React.createClass({
	//getInitialState is not required with redux
	// getInitialState: function () {
	// 	return {
	// 		showCompleted: false,
	// 		searchText: '',
	// 		todos: TodoAPI.getTodos()
	// 	};
	// },
	//componentDisUpdate is not required with redux
	// componentDidUpdate: function () {
	// 	TodoAPI.setTodos(this.state.todos);
	// },

	//handleToggle no longer required after react-redux added
	// handleToggle: function (id) {
	// 	var updatedTodos = this.state.todos.map((todo)=>{
	// 		if (todo.id===id) {
	// 			todo.completed=!todo.completed;
	// 			todo.completedAt = todo.completed? moment().unix():undefined;
	// 		}
	// 		return todo;
	// 	});

	// 	this.setState({todos: updatedTodos});
	// },

	//handleTodo is not required with redux
	// handleTodo: function (text) {
		
	// 	this.setState({
	// 				todos: [...this.state.todos, 
	// 						{
	// 						  id:uuid(), 
	// 						  text:text, 
	// 						  completed: false,
	// 						  createdAt: moment().unix(),
	// 						  completedAt: undefined
	// 						}
	// 					   ]
	// 	});
	// 	//console.log('new todo: '+ text)

	// },

	//handleSearch is not required with Redux
	// handleSearch: function (showCompleted, searchText) {
	// 	this.setState({
	// 		showCompleted: showCompleted,
	// 		searchText: searchText.toLowerCase()
	// 	});
	// },

	onLogout (e) {//es6 syntax for function expressions
		var {dispatch} = this.props;
		e.preventDefault();
		dispatch(actions.startLogout());

	},
	render: function() {

		//these vars are not required with redux
		// var {todos, showCompleted, searchText} = this.state;
		// var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div> 
				<div className='page-actions'>
					<a href='#' onClick = {this.onLogout}>Logout</a>
				</div>
				<h1 className = 'page-title'>Todo App</h1>
				<div className = 'row'>
					<div className = 'column small-centered small-11 medium-6 large-5'>
						<div className = 'container'>
							<TodoSearch/>
							<TodoList/> 
							<AddTodo/>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

//module.exports = TodoApp;
export default Redux.connect()(TodoApp);