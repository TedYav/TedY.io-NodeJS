import React from 'react';
import cx from 'classnames';

const Section = ({classNames, attributes={}, children}) => (
	<section className={cx(classNames)} {...attributes}>
		<div className="container">
			{children}
		</div>
	</section>
);

export default Section;