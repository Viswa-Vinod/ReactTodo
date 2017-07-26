import firebase, {firebaseRef, githubProvider} from 'app/firebase/'; 
//since the file is called index.js it can be left out from the path
import moment from 'moment';

export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	}
}

export var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	}
}


//boilerplate action generator that returns a function
// export var startAddTodo = (text) => {
// 	return (dispatch, getState)=>{

// 	};
// }

export var startAddTodo = (text) => {
	return (dispatch, getState)=>{
		var todo = {	//todo does not require an id now since firebase will generate one on its own						   
					  text, //es6 syntax for text:text
					  completed: false,
					  createdAt: moment().unix(),
					  completedAt: null //firebase does not accept undefined. So set it to null
					}
		var todoRef = firebaseRef.child('todos').push(todo);
		return todoRef.then(()=>{
			dispatch(addTodo({
				...todo,
				id:todoRef.key
			}))
		})
	};
}
export var addTodos = (todos) => {
	//console.log(todos);
	return {
		type: 'ADD_TODOS',
		todos
	}
}

export var startAddTodos = () => {
	return (dispatch, getState) => {

		var todosRef = firebaseRef.child('todos').once('value');
		return todosRef.then(
			(snapshot) => {
				
				var todos = snapshot.val() || {};
				var arrTodos = [];
				for (var todoID in todos) {
					
					arrTodos = [...arrTodos, {
							id: todoID,
							...todos[todoID]
							
						}];
				}
				
				dispatch(addTodos(arrTodos));						
		
			}, (e)=> {
				console.log('Unable to fetch todos from firebase: ', e)
			}
			);
		
	};
};

export var toggleShowCompleted = () => {

	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	}
}

export var updateTodo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id,
		updates
	}
}

export var startToggleTodo = (id,completed)=> {
	return (dispatch, getState) => {
		var todoRef = firebaseRef.child(`todos/${id}`);
		var updates = {
			completed,
			completedAt: completed? moment().unix():null
		};
		return todoRef.update(updates).then(()=>{
			dispatch(updateTodo(id, updates));
		});
	};
};

export var startLogin = () => {
	return (dispatch, getState)=> {
		return firebase.auth().signInWithPopup(githubProvider).then((result)=>{
			console.log('Auth worked: ',result);
		}, (err)=>{
			console.log('Unable to auth: ', err);
		})
	}
}
export var startLogout = () => {
	return (dispatch, getState)=> {
		return firebase.auth().signOut().then(()=>{
			console.log('Logged Out');
		})
	}
}