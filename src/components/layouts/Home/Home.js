/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Navbar from '../../elements/Navbar';
import Header from '../../elements/Header';
import SectionIntro from '../../elements/SectionIntro';
import SectionFeatures from '../../elements/SectionFeatures';
import CirclePhoto from '../../elements/CirclePhoto';

const title = 'Home';

const features = [
	{
		title : '',
		description : '',
		image : 'tech-logos/react.png',
		imageAlt: 'ReactJS',
		imageUrl: ''
	},
	{
		title : '',
		description : '',
		image : 'tech-logos/redux.png',
		imageAlt: 'Redux',
		imageUrl: ''
	},
	{
		title : '',
		description : '',
		image : 'tech-logos/nodejs.png',
		imageAlt: 'NodeJS',
		imageUrl: ''
	},
	{
		title : '',
		description : '',
		image : 'tech-logos/mongodb.png',
		imageAlt: 'MongoDB',
		imageUrl: ''
	}
]

const Home = (props, context) => {
  context.setTitle(title);
  return (
    <div className="page-home">
      <Navbar currentPage="Home" />
      <Header classes={['head-skinny', 'head-default']} bigText="Hi, I'm Ted." littleText="Software Developer. Innovator. Future Social Entrepreneur.">
      	<CirclePhoto imageName="ted-mini.jpg" imageAlt="Ted Yavuzkurt" />
      </Header>
      <SectionIntro bigText="A little bit about me." littleText="My name is Ted and I write code and this is some cool stuff here! All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy." />
      <SectionFeatures hover={true} numPerRow="6" bigText="Here's what I do." littleText="Click each link to learn more." features={features} />
    </div>
  );
}

Home.contextTypes = { setTitle: PropTypes.func.isRequired};

export default Home;