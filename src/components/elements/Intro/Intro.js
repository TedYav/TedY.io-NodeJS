import React from 'react';
import cx from 'classnames';
import Section from '../Section';

const Intro = ({bigText, littleText, classNames=['section', 'section-intro']}) => (
	<Section classNames={classNames}>
		<h2 className="text-center">{bigText}</h2>
		<p className={cx('text-center', 'text-muted')}>{littleText}</p>
	</Section>
);

export default Intro;