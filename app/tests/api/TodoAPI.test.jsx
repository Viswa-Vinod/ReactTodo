var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=> {
	beforeEach(()=>{
		localStorage.removeItem('todos');
	});
	it('should exist', ()=>{
		expect(TodoAPI).toExist();
	});
	describe('set Todos', ()=>{
		it('should set valid todos array', ()=>{
			var todos = [{id:23, text: 'test all files', completed: false}];
			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));
			expect(actualTodos).toEqual(todos);
		}) 

		it('should not set invalid todos array', ()=>{
			var badTodos = {a:'b'};
			TodoAPI.setTodos(badTodos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));
			expect(actualTodos).toBe(null);
		});
	});

	describe('get todos', ()=>{
		it('should return empty array for bad localStorage data', ()=>{
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});
		it('should return todo if valid array in localStorage', ()=>{
			var todos = [{id:23, text: 'test all files', completed: false}];
			localStorage.setItem('todos', JSON.stringify(todos));
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual(todos);
		});
	});
});