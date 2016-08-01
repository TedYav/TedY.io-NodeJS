import React from 'react';
import cx from 'classnames';

const Image = React.createClass({
	getInitialState: function() {
		let {hoverSwap, imageName} = this.props;
		let state = {hover: false, imageUrl: require(`../../../public/images/${imageName}`)};
		if(hoverSwap){
			let extension = imageName.substring(imageName.length - 4, imageName.length);
			let baseName = imageName.substring(0, imageName.length - 4);
			state.hoverUrl = require(`../../../public/images/${baseName}-hover${extension}`);
		}
		return state;
	},

	mouseOver: function() {
		this.setState({hover: true});
	},

	mouseOut: function() {
		this.setState({hover: false});
	},

	render: function() {
		let {imageName, hoverSwap=false, imageAlt='', options={}} = this.props;
		return (
			<img src={(this.state.hover && hoverSwap ? this.state.hoverUrl : this.state.imageUrl)} alt={imageAlt} onMouseOver={(hoverSwap ? this.mouseOver : false)} onMouseOut={(hoverSwap ? this.mouseOut : false)} />
		);
	}
});

export default Image;