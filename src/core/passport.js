/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */

import passport from 'passport';
import { Strategy as DummyStrategy } from 'passport-dummy';
// import { auth as config } from '../config';

/**
 * Sign in with Facebook.
 */
passport.use(new DummyStrategy(
  function(done) {
    return done(null, {username: 'dummy'});
  }
));

export default passport;
