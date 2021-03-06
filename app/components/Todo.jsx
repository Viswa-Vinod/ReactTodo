
import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import * as actions from 'actions';

//the Todo component is being exported because it will be used in a test file
export class Todo extends React.Component {
	render () {
		var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
		var todoClassName = completed? 'todo todo-completed': 'todo';
		var renderDate =  ()=>{
			var message = 'Created: ';
			var timestamp = createdAt;

			if (completed) {
				message = "Completed: ";
				timestamp = completedAt;
			}
			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		}
		return (
			<div onClick={()=>{
				//this.props.onToggle(id);	

				dispatch(actions.startToggleTodo(id, !completed));
			}} className = {todoClassName}>
				<div>
					<input type="checkbox" checked={completed}/>
				</div>
				<div>
					<p>{text}</p>
					<p className='todo__subtext'>{renderDate()}</p> 
				</div>
				
			</div>
		);
	}
};

export default connect()(Todo);