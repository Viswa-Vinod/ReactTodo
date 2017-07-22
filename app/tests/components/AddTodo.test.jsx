var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var {AddTodo} = require('AddTodo'); //gets unconnected AddTodo component

describe('AddTodo', ()=> {
	it('should exist', ()=>{
		expect(AddTodo).toExist();
	});
	
	it('should dispatch ADD_TODO when valid todo entered', ()=>{
		var spy = expect.createSpy();
		var action = {
			type: 'ADD_TODO',
			text: 'some todo'
		}
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todo.value = 'some todo';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should not dispatch ADD_TODO when invalid todo entered', ()=>{
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todo.value= '';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
});