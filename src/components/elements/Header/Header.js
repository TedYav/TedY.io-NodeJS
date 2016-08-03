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

const Header = ({children, classes = ['head', 'head-default'], bigText, littleText}) => {
  return (
    <header className={cx(classes)} id="header">
		<div className="container">
			<div className={cx('text-center', 'topspace-2x')}>
				{children}
				<h1 className={cx('lead', 'text-center', 'topspace-0', 'on-top')}>{bigText}</h1>
				<p className={cx('tagline', 'text-center', 'on-top')}>{littleText}</p>	
			</div>
		</div>
	</header>
  );
}

export default Header;
