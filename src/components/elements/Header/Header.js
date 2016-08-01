/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';

const Header = () => {
  return (
    <header className={cx('head','head-default')}>
		<div className="container">
			<h1 className={cx('lead', 'text-center')}>TeomanDavid.com</h1>
			<p className={cx('tagline', 'text-center')}>The personal website of Teoman (Ted) David Yavuzkurt.</p>
		</div>
	</header>
  );
}

export default Header;
