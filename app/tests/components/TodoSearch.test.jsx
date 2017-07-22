var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

//var TodoSearch = require('TodoSearch');
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', ()=> {
	it('should exist', ()=>{
		expect(TodoSearch).toExist();
	});
	
	it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', ()=>{
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoSearch));
		
		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change($el.find('input')[1]);
		expect(spy).toHaveBeenCalledWith(action);
		
		todoSearch.refs.showCompleted.checked = false;
		TestUtils.Simulate.change($el.find('input')[1]);
		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should dispatch SET_SEARCH_TEXT on input change', ()=>{
		var searchText = 'dog';
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText
		};


		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoSearch));

		todoSearch.refs.searchText.value= searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText)
		expect(spy).toHaveBeenCalledWith(action);
	});
});