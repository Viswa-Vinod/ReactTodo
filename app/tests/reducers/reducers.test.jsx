var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');



describe('Reducers', ()=>{
	describe('Search Text Reducer', ()=>{
		it('should set search text',()=>{
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};

			var res = reducers.searchTextReducer(df(''), df(action));
			expect(res).toEqual(action.searchText);
		});
	});

	describe('Show Completed Reducer', ()=>{
		it('should toggle showCompleted',()=>{
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};

			var res = reducers.showCompletedReducer(df(false), df(action));
			expect(res).toEqual(true);
		});
	});

	describe('Todos Reducer', ()=>{
		it('should add new todo',()=>{
			var action = {
				type: 'ADD_TODO',
				todo: {id: 123, text: 'dosth',completed: false, createdAt: 324234}
			};

			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);
		});

		it('should toggle todo',()=>{
			var todo = [{
				id: 1,
				text: 'Walk the dog',
				completed: false
				
			}, {
				id: 2,
				text: 'Walk the baby',
				completed: false
			}];

			var action = {
				type: 'TOGGLE_TODO',
				id: 1
			};

			var res = reducers.todosReducer(df(todo),df(action));
			
			expect(res[0].completed).toEqual(true);
			expect(res[0].completedAt).toNotBe(undefined);
		});

		it('should add existing todos',()=>{
			var action = {
				type: 'ADD_TODOS',
				todos: 
				[{id: 1, text: 'task1', completed: false, completedAt: undefined, createdAt: 300},
				{id: 2, text: 'task2', completed: false, completedAt: undefined, createdAt: 50}] 
			};

			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(2);
			expect(res[0].id).toEqual(action.todos[0].id);
		});
	});
});