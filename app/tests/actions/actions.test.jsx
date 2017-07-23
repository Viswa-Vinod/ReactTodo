import configureMockStore from 'redux-mock-store';//required to test async action generator startAddTodo

import thunk from 'redux-thunk';//required for async actions that return a function

var expect = require('expect');
var actions = require('actions');
import firebase, {firebaseRef} from 'app/firebase/';

var createMockStore = configureMockStore([thunk]); 
//mock stores are useful because they have a getActions method on them 
//that returns all the actions carried out on them

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
		var todo = {id: 123, completed: false, text: 'do sth1', createdAt: 234324}
		var action = {
			type: 'ADD_TODO',
			todo
		};

		var res = actions.addTodo(action.todo);

		expect(res).toEqual(action);
	});

	it('should create todo and dispatch ADD_TODO', (done)=>{//done is a function. If it is called with arguments then that implies there has been as error
		const store = createMockStore({}); //create mock store with no data
		const todoText = 'My todo item';

		store.dispatch(actions.startAddTodo(todoText)).then(()=>{
			const actions = store.getActions();//returns an array of all the actions that were fired on the mock store
			expect(actions[0]).toInclude({ //toInclude means that at the very least the type key has to be there 
				type: 'ADD_TODO'
			}); 
			expect(actions[0].todo).toInclude({
				text: todoText
			});
			done(); //if this line is not included the test will never finish and there will be a timeout error
		}).catch(done); //if there is an error writing to firebase done will be called with the error object as argument
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

	it('should generate update todo action', ()=>{
		var action = {
			type: 'UPDATE_TODO',
			id: 1,
			updates: {completed: false}
		};

		var res = actions.updateTodo(action.id, action.updates);

		expect(res).toEqual(action);
	});

	describe('Tests with firebase todos', ()=>{
		var testTodoRef;

		beforeEach((done)=>{
			//this lifecycle method will be called before each test to create test todo on firebase
			testTodoRef = firebaseRef.child('todos').push();
			testTodoRef.set({
				text: 'sth',
				completed: false,
				createdAt: 234234
			}).then(() => done());
			
		});

		afterEach((done)=>{
			//this lifecycle method will be called after each test to delete any test todos created on firebase by the test block
			testTodoRef.remove().then(()=>done());
		});

		it('should toggle todo and dispatch UPDATE_TODO action', (done)=>{
			const store = createMockStore({});
			const action = actions.startToggleTodo(testTodoRef.key, true);
			store.dispatch(action).then(()=>{
				const mockActions = store.getActions();
				expect(mockActions[0]).toInclude({
					type: 'UPDATE_TODO',
					id: testTodoRef.key,
				});
				expect(mockActions[0].updates).toInclude({
					completed: true
				});
				expect(mockActions[0].updates.completedAt).toExist();
				done();
			}, done);
		});
	})
});