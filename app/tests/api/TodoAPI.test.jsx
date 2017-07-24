var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=> {
	beforeEach(()=>{
		localStorage.removeItem('todos');
	});
	it('should exist', ()=>{
		expect(TodoAPI).toExist();
	});

	//tests for set Todos and get Todos are not required after connecting the app to firebase
	// describe('set Todos', ()=>{
	// 	it('should set valid todos array', ()=>{
	// 		var todos = [{id:23, text: 'test all files', completed: false}];
	// 		TodoAPI.setTodos(todos);

	// 		var actualTodos = JSON.parse(localStorage.getItem('todos'));
	// 		expect(actualTodos).toEqual(todos);
	// 	}) 

	// 	it('should not set invalid todos array', ()=>{
	// 		var badTodos = {a:'b'};
	// 		TodoAPI.setTodos(badTodos);

	// 		var actualTodos = JSON.parse(localStorage.getItem('todos'));
	// 		expect(actualTodos).toBe(null);
	// 	});
	// });

	// describe('get todos', ()=>{
	// 	it('should return empty array for bad localStorage data', ()=>{
	// 		var actualTodos = TodoAPI.getTodos();
	// 		expect(actualTodos).toEqual([]);
	// 	});
	// 	it('should return todo if valid array in localStorage', ()=>{
	// 		var todos = [{id:23, text: 'test all files', completed: false}];
	// 		localStorage.setItem('todos', JSON.stringify(todos));
	// 		var actualTodos = TodoAPI.getTodos();
	// 		expect(actualTodos).toEqual(todos);
	// 	});
	// });

	describe('filter todos', ()=>{
		var todos = [{id: 1, completed: true, text: 'some text1'},
					{id: 2, completed: false, text: 'some text2'},
					{id: 3, completed: true, text: 'some text3'}];

		it('should return all items if show completed is true',()=>{
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});	
		it('should return only uncompleted items if show completed is false',()=>{
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		});		
		it('should sort by completed status', ()=>{
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(false);
		});	
	});

	describe('search todos', ()=>{
		var todos = [{id: 1, completed: true, text: 'some text1'},
					{id: 2, completed: false, text: 'other text2'},
					{id: 3, completed: true, text: 'some text3'}];

		it ('should show all todos when search text is empty', ()=>{
			
			var filteredTodos = TodoAPI.filterTodos(todos, true, '')
			expect(filteredTodos.length).toBe(3);
		});
		it ('should show searched for todos when search text is non-empty', ()=>{
			
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'some')
			expect(filteredTodos.length).toBe(2);
		});
	});
});