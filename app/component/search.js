var React = require('react');
require('../styles/search.css');

{/*var cancelIcon = {
	borderRadius:'1px',
	marginTop:'400px',
	position:'absolute',
	color:'red'
}*/}
var SearchValue;

var Search = React.createClass({

	handleClick: function() {
		this.refs.searchIcon.style.opacity = '0';
		this.refs.searchIcon.style.transition = 'opacity 0.5s'
		this.refs.searchBar.style.opacity = '1';
		this.refs.searchBar.style.transition='opacity 1s';
		this.refs.searchBar.focus();
	},

handleEnter: function(target) {
	if(target.charCode == 13) {
		var sbValue = document.getElementById('search-bar').value;
		this.props.onChange(sbValue);
		}
},

	render: function() {
		return(
			<div className='col-xs-12 col-sm-6 col-md-6 col-lg-4 col-sm-offset-3 col-md-offset-3 col-lg-offset-4' >
					<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group text-center' id ='form' >
						<a href='https://en.wikipedia.org/wiki/Special:Random' className='control-label random-search' target='blank' >Click here for a random article</a>
						<div >
							<input ref='searchBar' id='search-bar' type='text' className='form-control' onKeyPress={this.handleEnter}  />
							{/*<span style={cancelIcon} className='glyphicon glyphicon-minus' ></span>*/}
							<span ref='searchIcon' id='search-icon' className='glyphicon glyphicon-search' onClick={this.handleClick}  ></span>
						</div>
						<span className='control-label random-search' >Click icon to search</span>
					</div>
			</div>
		);
	}
});

module.exports = Search;
