import React from 'react';
import cx from 'classnames';

const CirclePhoto = ({imageName, attributes={}, extraClasses = []}) => {
	extraClasses.push('circle-image');
	let imageUrl = require(`../../../public/images/${imageName}`);
	return (
		<div className={cx(extraClasses)}>
			<img src={imageUrl} {...attributes} />
		</div>
	);
}

export default CirclePhoto;