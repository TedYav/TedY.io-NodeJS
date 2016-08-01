import React from 'react';
import cx from "classnames";

const SectionFeatures = ({bigText, littleText, features}) =>{
	return (
		<section className={cx('section', 'jumbotron')}>
			<div className="container">
				<h3 className={cx('title', 'text-center')}>{bigText}<br />
					<small>{littleText}</small>
				</h3>

				<div className={cx('row', 'topspace-2x')}>
					Nothing to see here yet!
				</div>
			</div>
		</section>
	);
};

export default SectionFeatures;