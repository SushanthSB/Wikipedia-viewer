var React = require('react');

var styles = require('../styles');

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
				<div>
					<a style={styles.linkDec} target='_blank' href={`https:\/\/en.wikipedia.org/wiki/${result.title}`} >
						<div  id='itemDiv' style={styles.itemDiv} key={index} >
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
