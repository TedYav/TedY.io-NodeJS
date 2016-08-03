import React from 'react';
import cx from 'classnames';

const CirclePhoto = ({imageName, attributes={}, classNames = []}) => {
	classNames.push('circle-image');
	let imageUrl = require(`../../../public/images/${imageName}`);
	return (
		<div className={cx(classNames)}>
			<img src={imageUrl} {...attributes} />
		</div>
	);
}

export default CirclePhoto;