var React = require('react');

var AddTodo = React.createClass({
	onSubmit: function (e) {
		e.preventDefault();
		var text = this.refs.todo.value;

		if (text.length > 0) {
			this.refs.todo.value = '';
			this.props.onNewTodo(text);
		}
		else {
			this.refs.todo.focus();
		}

	},
	render: function () {
		// var {id, text} = this.props;

		return (
			<div>
				<form onSubmit={this.onSubmit} ref="form">
					<input type="text" placeholder="enter to do" ref="todo"/>
					<button className="button expanded">Submit</button> 
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;