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

const title = 'Home';

const Home = (props, context) => {
  context.setTitle(title);
  return (
    <div>
      <Navbar activePage="Home" />
      
    </div>
  );
}

Home.contextTypes = { setTitle: PropTypes.func.isRequired};

export default Home;