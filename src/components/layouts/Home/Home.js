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
import Intro from '../../elements/Intro';
import Features from '../../elements/Features';
import CirclePhoto from '../../elements/CirclePhoto';
import Contact from '../../elements/Contact';
import Section from '../../elements/Section';

const title = 'Home';

const data = {
	headerText: "Hi, I'm Ted.",
	headerSubtext: "Software Developer. Innovator. Future Social Entrepreneur.",
	photo: "ted-mini.jpg",
	photoAttributes: {alt: "Ted Yavuzkurt"},
	introText: "A little bit about me.",
	introContent: "My name is Ted and I write code and this is some cool stuff here! All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy. All work and no play makes Ted a dull boy.",
	featureCaption: "This site is powered by",
	features: [
	{
		link: 'https://facebook.github.io/react/',
		image : {
			name: 'tech-logos/react.png',
			hoverSwap: true,
			props: {
			alt: 'ReactJS',
			title: 'ReactJS',
			width: 100,
			height: 100
			}
		}
	},
	{
		link: 'http://redux.js.org/',
		image : {
			name: 'tech-logos/redux.png',
			hoverSwap: true,
			props: {
			alt: 'Redux',
			title: 'Redux',
			width: 100,
			height: 100			
			}
		}
	},
	{
		link: 'https://nodejs.org/en/',
		image : {
			name: 'tech-logos/nodejs.png',
			hoverSwap: true,
			props: {
			alt: 'NodeJS',
			title: 'NodeJS',
			width: 100,
			height: 100
			}
		}
	},
	{
		link: 'https://www.mongodb.com/',
		image : {
			name: 'tech-logos/mongodb.png',
			hoverSwap: true,
			props: {
			alt: 'MongoDB',
			title: 'MongoDB',
			width: 100,
			height: 100
			}
		}
	},
	{
		link: 'http://getbootstrap.com/2.3.2/',
		image : {
			name: 'tech-logos/bootstrap.png',
			hoverSwap: true,
			props: {
			alt: 'Bootstrap',
			title: 'Bootstrap',
			width: 100,
			height: 100
			}
		}
	},
	{
		link: 'https://webpack.github.io/',
		image : {
			name: 'tech-logos/webpack.png',
			hoverSwap: true,
			props: {
			alt: 'Webpack Module Bundler',
			title: 'Webpack Module Bundler',
			width: 100,
			height: 100
			}
		}
	}
]};

const Home = (props, context) => {
  context.setTitle(title);
  return (
    <div className="page-home">
      <Navbar currentPage="Home" />
      <Header classes={['head-skinny', 'head-default']} bigText={data.headerText} littleText={data.headerSubtext}>
      	<CirclePhoto imageName={data.photo} attributes={data.photoAttributes} />
      </Header>
      <Intro bigText={data.introText} littleText={data.introContent} />
      <Features numPerRow="6" bigText={data.featureCaption} features={data.features} />
      <Contact />
    </div>
  );
}

Home.contextTypes = { setTitle: PropTypes.func.isRequired};

export default Home;