import passport from 'passport';
// import {Strategy as GitHubStrategy} from 'passport-github2';
import {Strategy as GitHubStrategy} from 'passport-github';
import axios from 'axios';

// From passport-github example

export default function(app) {

  // Passport session setup.
  //   To support persistent login sessions, Passport needs to be able to
  //   serialize users into and deserialize users out of the session.  Typically,
  //   this will be as simple as storing the user ID when serializing, and finding
  //   the user by ID when deserializing.  However, since this example does not
  //   have a database of user records, the complete GitHub profile is serialized
  //   and deserialized.
  passport.serializeUser( (user, done) => {
    // console.log('USER IN SERIALIZE: ', user);
    done(null, user);
  });

  passport.deserializeUser( (obj, done) => {
    // console.log('OBJ IN DESERIALIZE: ', obj);
    done(null, obj);
  });

  // Use the GitHubStrategy within Passport.
  //   Strategies in Passport require a `verify` function, which accept
  //   credentials (in this case, an accessToken, refreshToken, and GitHub
  //   profile), and invoke a callback with a user object.
  passport.use(new GitHubStrategy({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:1337/auth/github/callback",
      scope: [ 'user:email', 'read:org', 'notifications', 'public_repo' ]
    }, (accessToken, refreshToken, profile, done) => {
      // asynchronous verification, for effect...
      process.nextTick( () => {
        // console.log('accessToken: ', accessToken);
        // console.log('refreshToken: ', refreshToken);
        // console.log('profile: ', profile);

        console.log(passport);
        // If we've made it to this point...we have successfully authenticated with github...
        // axios.get(profile._json.organizations_url)
        //   .then(res => {
        //     console.log(res);
        //   })
        //   .catch(err => console.log(err))
        // look up user in DB
          // If they exist...
            // check if they are allowed
              // if they are allowed, give them a JWT
              // If not make sure they're from correct org
                // If they are from the correct org, give them a JWT
                // If not, refuse
          // If they don't exist...
            // make sure they're from correct org
            // add them

        // To keep the example simple, the user's GitHub profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the GitHub account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  ));

  app.use(passport.initialize());

  // GET /auth/github
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  The first step in GitHub authentication will involve redirecting
  //   the user to github.com.  After authorization, GitHub will redirect the user
  //   back to this application at /auth/github/callback
  app.get('/auth/github',
    passport.authenticate('github'),
    function(req, res){
      // The request will be redirected to GitHub for authentication, so this
      // function will not be called.
    });

  // GET /auth/github/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function will be called,
  //   which, in this example, will redirect the user to the home page.
  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      // console.log(passport);
      res.redirect('/');
    });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
}
