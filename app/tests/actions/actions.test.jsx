var expect = require('expect');
var actions = require('actions');


describe('Actions', ()=>{
	it('should generate search text action', ()=>{
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		};

		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});

	it('should generate add Todo action', ()=>{
		var action = {
			type: 'ADD_TODO',
			text: 'Thing to do'
		};

		var res = actions.addTodo(action.text);

		expect(res).toEqual(action);
	});

	it('should generate addTodos action', ()=>{
		var action = {
			type: 'ADD_TODOS',
			todos: 
			[{id: 1, text: 'task1', completed: false, completedAt: undefined, createdAt: 300},
			{id: 2, text: 'task2', completed: false, completedAt: undefined, createdAt: 50}] 
		};

		var res = actions.addTodos(action.todos);
		expect(res).toEqual(action);
	});

	it('should generate toggle show completed action', ()=>{
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		};

		var res = actions.toggleShowCompleted();

		expect(res).toEqual(action);
	});

	it('should generate toggle todo action', ()=>{
		var action = {
			type: 'TOGGLE_TODO',
			id: 1
		};

		var res = actions.toggleTodo(action.id);

		expect(res).toEqual(action);
	});
});