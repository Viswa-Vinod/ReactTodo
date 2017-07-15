var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', ()=> {
	it('should exist', ()=>{
		expect(TodoSearch).toExist();
	});
	
	it('should call onSearch with proper checked value', ()=>{
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoSearch));
		
		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change($el.find('input')[1]);
		expect(spy).toHaveBeenCalledWith(true, '');
		
		todoSearch.refs.showCompleted.checked = false;
		TestUtils.Simulate.change($el.find('input')[1]);
		expect(spy).toHaveBeenCalledWith(false, '');
	});

	it('should call onSearch on entering text', ()=>{
		var searchText = 'dog';
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoSearch));

		todoSearch.refs.searchText.value= searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText)
		expect(spy).toHaveBeenCalledWith(false, 'dog');
	});
});