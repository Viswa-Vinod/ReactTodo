module.exports = {
	setTodos: function(todos) {
		if (Array.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos; 
			//if setTodos is called with valid data the valid data will be returned
			//if set Todos is called with invalid data undefined will be returned
		}
	},
	getTodos: function() {
		var strTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(strTodos);
		} catch(e) {

		}

		return Array.isArray(todos)? todos: [];
	}
}