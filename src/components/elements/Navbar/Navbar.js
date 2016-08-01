/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import NavbarBrand from '../NavbarBrand';
import NavbarMenu from '../NavbarMenu';

const Navbar = ({currentPage}) => {
  return (
    <div className={classnames('navbar', 'navbar-dual', 'navbar-inverse', 'navbar-fixed-top', 'headroom', 'ontop-now')}>
      <div className="container">
        <NavbarBrand />
        <NavbarMenu currentPage={currentPage} />
      </div>
    </div>
  );
}

Navbar.propTypes = {
	currentPage : React.PropTypes.string
}

export default Navbar;
