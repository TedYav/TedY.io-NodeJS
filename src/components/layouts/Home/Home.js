/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

const title = 'Home';

function Home(props, context) {
  console.log("RENDERING HOME: home.css output coming, then props");
  console.dir(s);
  console.dir(props);
  context.setTitle(title);
  return (
    <div>
      Testing home!
    </div>
  );
}

Home.propTypes = {
  
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired};

export default withStyles(s)(Home);
