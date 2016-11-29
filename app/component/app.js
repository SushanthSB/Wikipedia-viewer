var React = require('react');
var Header = require('./header');
var Search = require('./search');
var request = require('superagent');
var SearchResults = require('./searchResults');

var App = React.createClass({
	getInitialState: function() {
		return {
			searchResults: ''
		}
	},

	showResults: function(response) {
			this.setState({
				searchResults:response
			})
		},

	changeState: function(newValue) {
		var url = 'https://en.wikipedia.org/w/api.php?action=query&titles='+newValue+'&prop=revisions&rvprop=content&format=json';

  		$.ajax({
  			type:'Get',
  			dataType:'jsonp',
  			url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+newValue,
  			success: function(response){
  				this.showResults(response);
  			}.bind(this)
  		});

  		document.getElementById('form').style.padding = '50px 0px 10px 0px';
  		document.getElementById('form').style.transition = 'padding 1s';
},
	

	render: function() {
		return(
			<div  >
				<Header />
				<div className = 'col-xs-12 col-sm-12 col-md-12' style={{backgroundColor:'#092b40'}} >
				  <Search onChange={this.changeState} />
				  <SearchResults resultSet={this.state.searchResults} />
				</div>
			</div>
		)
	}
});

module.exports = App;
