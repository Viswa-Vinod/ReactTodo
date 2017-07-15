var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', ()=> {
	it('should exist', ()=>{
		expect(AddTodo).toExist();
	});
	
	it('should call onNewTodo on valid todo entered', ()=>{
		var spy = expect.createSpy();
		var AddTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(AddTodo));

		AddTodo.refs.todo.value = 'some todo';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith('some todo');
	});

	it('should not call onNewTodo on invalid todo entered', ()=>{
		var spy = expect.createSpy();
		var AddTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(AddTodo));

		AddTodo.refs.todo.value= '';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
});