import React from 'react';
import cx from 'classnames';

const InnerHeader = ({bigText, littleText}) => (
	<h1 className={cx('page-title', 'text-center', 'topspace-0')}>
		{bigText}
		<span>
			{littleText}
		</span>
	</h1>
);

export default InnerHeader;