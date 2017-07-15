var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [ 
				{
					id: 1,
					text: 'walk the dog'
				},
				{
					id: 2,
					text: 'Clean the yard'
				},
				{
					id: 3,
					text: 'Apply for Jobs'
				},
				{
					id:4,
					text: 'call xyz'
				}

			]
		};
	},
	handleTodo: function (text) {
		var {todos} = this.state;
		var id_lasttodo = todos[todos.length - 1].id;
		todos.push({id: id_lasttodo +1, text: text})
		this.setState({
					todos: todos
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