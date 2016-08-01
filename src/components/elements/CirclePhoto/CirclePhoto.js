import React from 'react';
import cx from 'classnames';

const CirclePhoto = ({imageName, imageAlt="", extraClasses = []}) => {
	extraClasses.push('circle-image');
	let imageUrl = require(`../../../public/images/${imageName}`);
	return (
		<div className={cx(extraClasses)}>
			<img src={imageUrl} alt={imageAlt} />
		</div>
	);
}

export default CirclePhoto;