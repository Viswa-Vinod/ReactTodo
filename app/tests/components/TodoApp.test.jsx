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
	});

	it('should toggle completed value when handleToggle called', ()=>{
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos:
			[
				{id:1, text: 'test todo', completed: true},
				{id:2, text: 'test todo2', completed: false}
			]
		});

		todoApp.handleToggle(1);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[1].completed).toBe(false);
			
	})
});