var React = require('react');

var Header = React.createClass({
	render: function() {
		return(
			<nav className='navbar navbar-inverse' style={{margin:'0px',borderRadius:'0px !important'}} >
				<div className='container-fluid' >
					<div className='navbar-header' >
						<a className='navbar-brand' >
							<span style={{color:'white',fontSize:'25px',letterSpacing:'1px'}} >Search2Read</span>
						</a>
					</div>
				</div>
			</nav>
			)
	}
});

module.exports = Header;