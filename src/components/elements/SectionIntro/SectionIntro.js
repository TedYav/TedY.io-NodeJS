import React from 'react';
import cx from 'classnames';

const SectionIntro = ({bigText, littleText}) => (
	<section className={cx('section', 'section-intro')}>
		<div className="container">
			<h2 className="text-center">{bigText}</h2>
			<p className={cx('text-center', 'text-muted')}>{littleText}</p>
		</div>
	</section>
);

export default SectionIntro;