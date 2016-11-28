var React = require('react');

var label= {
	fontSize:'18px',
	textDecoration: 'none',
	color:'steelblue'
}

var searchBar = {
	border:'5px solid chocolate',
	borderRadius:'50px',
	marginLeft:'550px',
	padding:'15px 10px',
	width:'250px',
	position:'absolute',
	opacity:'0',
	backgroundColor:'#092b40',
	color:'white'
}

var searchIcon = {
	display:'block',
	color:'chocolate',
	fontSize:'40px',
	marginTop:'20px',
	marginBottom:'20px',
	opacity:'1'
}

{/*var cancelIcon = {
	borderRadius:'1px',
	marginTop:'400px',
	position:'absolute',
	color:'red'
}*/}

var form = {padding:'250px 0px'}

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
			<div>
					<div className='form-group text-center' id ='form' style={form} >
						<a href='https://en.wikipedia.org/wiki/Special:Random' className='control-label' target='blank' style={label} >Click here for a random article</a>
						<div>
							<input ref='searchBar' id='search-bar' type='text' className='form-control' onKeyPress={this.handleEnter} style={searchBar} />
							{/*<span style={cancelIcon} className='glyphicon glyphicon-minus' ></span>*/}
							<span ref='searchIcon' id='search-icon' className='glyphicon glyphicon-search' onClick={this.handleClick} style={searchIcon} ></span>
						</div>
						<span className='control-label' style={label} >Click icon to search</span>
					</div>
			</div>
		);
	}
});

module.exports = Search;
