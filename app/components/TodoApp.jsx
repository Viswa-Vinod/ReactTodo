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
					text: 'walk the dog',
					completed: false
				},
				{
					id: uuid(),
					text: 'Clean the yard',
					completed: true
				},
				{
					id: uuid(),
					text: 'Apply for Jobs',
					completed: true
				},
				{
					id:uuid(),
					text: 'call xyz',
					completed: false
				}

			]
		};
	},
	handleToggle: function (id) {
		var updatedTodos = this.state.todos.map((todo)=>{
			if (todo.id===id) {
				todo.completed=!todo.completed;
			}
			return todo;
		});

		this.setState({todos: updatedTodos});
	},
	handleTodo: function (text) {
		
		this.setState({
					todos: [...this.state.todos, 
					{id:uuid(), text:text, completed: false}]
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
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onNewTodo={this.handleTodo}/>
			</div>
		)
	}
});

module.exports = TodoApp;