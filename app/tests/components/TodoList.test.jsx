var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var {Provider} = require('react-redux');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList'; //handles ES6 default export from TodoList.jsx
import ConnectedTodo, {Todo} from 'Todo';



describe('TodoList',()=> {
	it('should exist', () => {
		expect('TodoList').toExist();
	});
	it('should render one Todo component for each todo item', () => {
		var todos = [
		{id:1, text: 'dosth1', completed:false, completedAt: undefined, createdAt: 500}, 
		{id:2, text: 'dosth2', completed:false, completedAt: undefined, createdAt: 800}
		];

		var store = configure({
			todos    //note this is ES6 syntax for todos: todos
		});
		var provider = TestUtils.renderIntoDocument(
				<Provider store = {store}>
					<ConnectedTodoList/>
				</Provider>
			);
		
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0] ;
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

		expect(todosComponents.length).toBe(todos.length);
	});
	it('should render empty message when no todos exist', () => {
		var todos = [];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
		var $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);
	});
});