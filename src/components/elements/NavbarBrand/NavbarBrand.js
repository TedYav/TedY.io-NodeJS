import React from 'react';
import classnames from 'classnames';
import Link from '../Link';

const NavbarBrand = (props) => {
  return (
    <div className="navbar-header">
	    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
		    <span className="icon-bar"></span> 
		    <span className="icon-bar"></span> 
		    <span className="icon-bar"></span> 
	    </button>
	    <Link className="navbar-brand" to="/">TeomanDavid</Link>
	</div>
  );
}

export default NavbarBrand;
