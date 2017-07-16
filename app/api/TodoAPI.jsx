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
	},

	filterTodos: function(todos, showCompleted, searchText) {
		var filteredTodos = todos;
		
		//filter by showCompleted
			filteredTodos = filteredTodos.filter((todo)=>{
				return !todo.completed || showCompleted;
			})
		//filter by searchText
			filteredTodos = filteredTodos.filter((todo)=>{
				// if (searchText.length>0) {
				// 	if (todo.text.toLowerCase().indexOf(searchText)==-1) return false
				// 	else return true;	
				// } else return true;
				return searchText.length==0 || todo.text.toLowerCase().indexOf(searchText)>-1;
			})
		//sort Todos with non-completed first
			filteredTodos.sort((a, b)=>{
				if (!a.completed && b.completed) return -1;
				else if (a.completed && !b.completed) return 1
				else return 0;	
			})

		return filteredTodos
	}
}