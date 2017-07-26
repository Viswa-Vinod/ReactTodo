var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
	//handleSearch is no longer required with redux in place
	// handleSearch : function() {
	// 	var showCompleted = this.refs.showCompleted.checked;
	// 	var searchText = this.refs.searchText.value;

	// 	this.props.onSearch(showCompleted, searchText);
	// },
	
	render: function () {
		var {dispatch, showCompleted, searchText} = this.props;
		return (
			<div className = "container__header">
				<div>
					<input type="search" ref="searchText" placeholder = "search todos" 
					value = {searchText} onChange={()=>{
						var searchText = this.refs.searchText.value;
						
						dispatch(actions.setSearchText(searchText))
					}}/>
				</div>
				<div>
					<label>
						<input type="checkbox" checked = {showCompleted} 
						ref="showCompleted" 
						onChange={()=>{
							dispatch(actions.toggleShowCompleted());
						}}/>
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
});

export default connect(
	(state) => {

		return {
			showCompleted: state.showCompleted,
			searchText: state.searchText
		}
	}

	)(TodoSearch);