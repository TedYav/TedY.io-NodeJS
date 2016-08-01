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

const title = 'Home';

const Home = (props, context) => {
  context.setTitle(title);
  return (
    <div className="page-home">
      <Navbar currentPage="Home" />
      <Header />
      <SectionIntro bigText="I make websites" littleText="My name is Ted and I write code and this is some cool stuff here!" />
      <SectionFeatures bigText="Here's what I do." littleText="Click each link to learn more." features={[]} />
    </div>
  );
}

Home.contextTypes = { setTitle: PropTypes.func.isRequired};

export default Home;