var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//var {Todo} = require('Todo');
import {Todo} from 'Todo';
import * as actions from 'actions';

describe('Todo',()=> {
	it('should exist', () => {
		expect('Todo').toExist();
	});

	it('should dispatch startToggleTodo action on click', ()=>{
		var spy = expect.createSpy();
		var todoData = {id:199, text: 'sample todo', completed: false}
		var action = actions.startToggleTodo(todoData.id, !todoData.completed);
		var todo = TestUtils.renderIntoDocument(
			<Todo {...todoData} dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));
		
		TestUtils.Simulate.click($el[0]);
		
		expect(spy).toHaveBeenCalledWith(action);
	})
});