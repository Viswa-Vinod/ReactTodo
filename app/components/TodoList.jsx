import React from 'react';
import Todo from 'Todo';
import {connect} from 'react-redux';
import TodoAPI from 'TodoAPI';


//export var TodoList = React.createClass({
export class TodoList extends React.Component {
	render () {
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
};

export default connect(
		(state) => {
			return state
		}
	)(TodoList);