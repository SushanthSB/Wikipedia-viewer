var React = require('react');

var arr;
var itemDiv = {
	backgroundColor: 'lavender',
	padding: '10px 30px',
	width:'1000px',
	margin:'10px auto',
	textAlign: 'justify'
}

var linkDec= {
	textDecoration: 'none',
	color:'black'
}

var SearchResults = React.createClass({

	render: function() {
		arr = [];

		var resultItems = $.map(this.props.resultSet.query, function(result){
			for(prop in result){
				arr.push(result[prop]);
			}
		})

		var items = arr.map(function(result,index){
			console.log(result);
			return (
				<div>
					<a style={linkDec} target='_blank' href={`https:\/\/en.wikipedia.org/wiki/${result.title}`} >
						<div  id='itemDiv' style={itemDiv} key={index} >
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