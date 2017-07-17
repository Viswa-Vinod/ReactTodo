var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp',()=> {
	it('should exist', () => {
		expect('TodoApp').toExist();
	});

	it('should add todo to the todos state on handleTodo', () => {
		
		var todo = 'lay bed'
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		
		todoApp.setState({todos: []});
		todoApp.handleTodo(todo);

		expect(todoApp.state.todos[0].text).toBe(todo);
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('should toggle completed value when handleToggle called', ()=>{
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos:
			[
				{id:1, text: 'test todo', completed: true, createdAt: 123, completedAt:456},
				{id:2, text: 'test todo2', completed: false, createdAt: 234, completedAt: undefined}
			]
		});

		todoApp.handleToggle(1);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toBeA('undefined');
		expect(todoApp.state.todos[1].completed).toBe(false);

		todoApp.handleToggle(1);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
			
	});


});