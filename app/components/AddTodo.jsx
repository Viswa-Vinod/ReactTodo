var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
	onSubmit: function (e) {
		e.preventDefault();
		var text = this.refs.todo.value;
		var {dispatch} = this.props;

		if (text.length > 0) {
			this.refs.todo.value = '';
			
			dispatch(actions.addTodo(text)); //dispatch gets attached to the props via the connect() function
		}
		else {
			this.refs.todo.focus();
		}

	},
	render: function () {
		// var {id, text} = this.props;

		return (
			<div className = "container__footer">
				<form onSubmit={this.onSubmit} ref="form">
					<input type="text" placeholder="enter to do" ref="todo"/>
					<button className="button expanded">Submit</button> 
				</form>
			</div>
		);
	}
});

export default connect()(AddTodo);
