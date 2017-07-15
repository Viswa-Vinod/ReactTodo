var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({

	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [ 
				{
					id: uuid(),
					text: 'walk the dog'
				},
				{
					id: uuid(),
					text: 'Clean the yard'
				},
				{
					id: uuid(),
					text: 'Apply for Jobs'
				},
				{
					id:uuid(),
					text: 'call xyz'
				}

			]
		};
	},
	handleTodo: function (text) {
		
		this.setState({
					todos: [...this.state.todos, {id:uuid(), text:text}]
		});
		//console.log('new todo: '+ text)

	},
	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	render: function() {
		var {todos} = this.state;

		return (
			<div> 
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onNewTodo={this.handleTodo}/>
			</div>
		)
	}
});

module.exports = TodoApp;