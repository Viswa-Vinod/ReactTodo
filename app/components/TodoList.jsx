var React = require('react');
import Todo from 'Todo';
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
	render: function () {
		var {todos, showCompleted, searchText} = this.props;

		var renderTodos = () => {
			var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

			if (filteredTodos.length===0) {
				return <p className = 'container__message'> Nothing to do </p>
			}

			return filteredTodos.map((todo)=>{
				return (
					<Todo key={todo.id} {...todo}/>
				);
			});
		};
		return (
			<div> {renderTodos()}</div>
		);
	}
});

export default connect(
		(state) => {
			return state
		}
	)(TodoList);