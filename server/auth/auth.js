import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import jwt from 'jwt-simple';
import moment from 'moment';
import axios from 'axios';

import { findAuthorizedUser, createAuthorizedUser } from './queries';
import { jwtSecret, githubClientSecret, githubClientId, allowedOrg } from '../utils/envDefaults';

// referenced: https://github.com/cfsghost/passport-github/blob/master/examples/login/app.js
// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.
passport.serializeUser((user, done) => {
  // console.log('USER IN SERIALIZE: ', user);
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  // console.log('OBJ IN DESERIALIZE: ', obj);
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: githubClientSecret,
  clientSecret: githubClientId,
  callbackURL: 'http://localhost:1337/auth/github/callback',
  scope: ['user', 'read:org']
}, (accessToken, refreshToken, profile, done) => {
  // If we've made it to this point...we have successfully authenticated with github...
  // Now, lets reach out to see what organizations the user is in
  axios.get('https://api.github.com/user/orgs', {
    params: { access_token: accessToken }
  }).then(res => {
    // res.data will contain an array of org objects that look like:
    // {
    //   login: 'hrr13-thedreamteam',
    //   id: 17730304,
    //   url: 'https://api.github.com/orgs/hrr13-thedreamteam',
    //   repos_url: 'https://api.github.com/orgs/hrr13-thedreamteam/repos',
    //   events_url: 'https://api.github.com/orgs/hrr13-thedreamteam/events',
    //   hooks_url: 'https://api.github.com/orgs/hrr13-thedreamteam/hooks',
    //   issues_url: 'https://api.github.com/orgs/hrr13-thedreamteam/issues',
    //   members_url: 'https://api.github.com/orgs/hrr13-thedreamteam/members{/member}',
    //   public_members_url: 'https://api.github.com/orgs/hrr13-thedreamteam/public_members{/member}',
    //   avatar_url: 'https://avatars.githubusercontent.com/u/17730304?v=3',
    //   description: null
    // }

    // TODO: Find/Create user and give them token whether or not
    // they have correct org. If they have the correct org, set their
    // authLevel to 'admin'
    const hasOrg = res.data.some(org => org.login === allowedOrg);
    const { id: githubId, login, avatar_url, name, email } = profile._json;

    // make sure the user belongs to the correct org
    if (hasOrg) {
      // look up user in DB
      return findAuthorizedUser({ githubId })
        .then(res => {
          // return it if it exists...
          if (res.length) {
            return done(null, res[0]);
          }
          // If it doesn't exist, add it
          return createAuthorizedUser({
            githubId, login, avatar_url, name, email, authLevel: 'admin'
          }).then(res => done(null, res.changes[0].new_val));
        });
    }
    console.log(
      `User ${login} (${name}) attempted to log in, but was not
      a member of the correct github organization`
    );

    // If they are not from correct org, return nothing so
    // they get redirected to /login
    return done(null, null, 'No valid github org');
  })
  .catch(err => console.log(err));
}));

export default function applyAuth(app) {
  app.use(passport.initialize());

  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
      const expires = moment().add(2, 'days').valueOf();
      const token = jwt.encode({
        iss: req.user.id,
        exp: expires
      }, jwtSecret);

      res.redirect(`/catch/?token=${token}`);
    }
  );
}
