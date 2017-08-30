var React = require('react');

var styles = require('../styles');

function Header() {
	return(
		<nav className='navbar navbar-inverse' style={styles.navBar}>
			<div className='container-fluid'>
				<div className='navbar-header'>
					<a className='navbar-brand'>
						<span style={styles.navTitle}>Wiki-Viewer</span>
					</a>
				</div>
			</div>
		</nav>
	)
}

module.exports = Header;
