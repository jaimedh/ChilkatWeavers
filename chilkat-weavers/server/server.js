const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const usersRoutes = require('./routes/users');
const photosRoutes = require('./routes/photos');
const postRoutes = require('./routes/posts');
const cors = require('cors');
const knex =  require('knex')(require('./knexfile').development) ;
const PORT = process.env.PORT || 8082;

app.use(cors({origin:true, credentials:true}));
app.use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true ,
}))
app.use(passport.initialize()) // init passport on every route call
app.use(passport.session())    //allow passport to use "express-session"


//Get the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET from Google Developer Console
const GOOGLE_CLIENT_ID = ""
const GOOGLE_CLIENT_SECRET = ""

const authUser = (request, _accessToken, _refreshToken, profile, done) => {
  console.log("line 27 profile",profile)
  done(null, profile)

  knex('users')
   .select('google_id')
  // .join("usersinfo", "usersinfo.users_id", "users.id") // join users table
  // .where({ google_id: profile.id })
  .then((response) => {
    console.log('line 35 response', response);
     console.log("profile.id",profile.id);
    if (!response.length) {
      console.log('line 38 user not found');
     
      knex('users')
        .insert({
          google_id: profile.id,
          name: profile.displayName,
        })
        .then((req, response) => {
          console.log('line 44 user created', response);
          // req.session.user = response.shift();
        })
        .catch((err) => console.log(err));
    } else {
      console.log('line 49 user found', response);
      done(null, response.shift());
    }
  })
  .catch((err) => {
    console.log('error finding user', err);
  });
  }

//Use "GoogleStrategy" as the Authentication Strategy
passport.use
  (new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8082/auth/callback",
    passReqToCallback: true
  }, authUser));


passport.serializeUser( (user, done) => { 
    // console.log(`\n--------> Serialize User:`)
    // console.log(user.id)

     // The USER object is the "authenticated user" from the done() in authUser function.
     // serializeUser() will attach this user to "req.session.passport.user.{user}", so that it is tied to the session object for each session.  

    done(null, user)
} )


passport.deserializeUser((user, done) => {
        // console.log("\n--------- Deserialized User:")
        // console.log(user)
        knex('users')
      .where({ google_id:user.id })
      .then((user) => {
        done(null, user);
      });
        // This is the {user} that was saved in req.session.passport.user.{user} in the serializationUser()
        // deserializeUser will attach this {user} to the "req.user.{user}", so that it can be used anywhere in the App.

        // done (null, user)
}) 


app.use(express.json());
app.use(express.static("./public"));

app.get('/auth',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  });
app.get('/auth/profile', (req, res) => {
  console.log('line 107', req.user)
  if (req.user) {
    res.json(req.user.shift())
  }
  // 
  else res.send('user not found');
})
// logout, ends session
app.get('/auth/logout', (req, res) => {
  req.logOut();
  req.session.destroy((err) => {
    res.redirect(req.headers.referer);
  });
});

app.use('/users', usersRoutes);
app.use('/images', photosRoutes);
app.use('/posts', postRoutes);

app.listen(PORT, () => {
    console.log('app is running on port ' + PORT);
});
