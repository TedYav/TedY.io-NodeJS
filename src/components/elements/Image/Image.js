import React from 'react';
import cx from 'classnames';

const Image = React.createClass({
	getInitialState: function() {
		let {hoverSwap, name} = this.props;
		let state = {hover: false, imageUrl: require(`../../../public/images/${name}`)};
		if(hoverSwap){
			let extension = name.substring(name.length - 4, name.length);
			let baseName = name.substring(0, name.length - 4);
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
		let {props = {}, hoverSwap} = this.props;
		return (
			<img src={(this.state.hover && hoverSwap ? this.state.hoverUrl : this.state.imageUrl)} {...props} onMouseOver={(hoverSwap ? this.mouseOver : false)} onMouseOut={(hoverSwap ? this.mouseOut : false)} />
		);
	}
});

export default Image;