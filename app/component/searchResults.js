var React = require('react');
require('../styles/searchResults.css');

var arr;

var SearchResults = React.createClass({

	render: function() {
		arr = [];

		var resultItems = $.map(this.props.resultSet.query, function(result){
			for(prop in result){
				arr.push(result[prop]);
			}
		})

		var items = arr.map(function(result,index){
			return (
				<div className='col-xs-12 col-sm-10 col-md-10 col-lg-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1' key={index}  >
					<a id='linkDec' target='_blank' href={`https:\/\/en.wikipedia.org/wiki/${result.title}`} >
						<div  id='itemDiv'>
							<h3>{result.title}</h3>
							<p>{result.extract}</p>
						</div>
					</a>
				</div>
				);
		})

		return(
			<div>
				{items}
			</div>
			);
	}
})

module.exports = SearchResults;
