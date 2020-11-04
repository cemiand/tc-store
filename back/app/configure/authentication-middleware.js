const passport = require("passport");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../../db/models");

module.exports = (app) => {
  // CONECTANDO PASSPORT
  app.use(cookieParser());
  app.use(
    sessions({
      secret: "TheCrew",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  // ESTRATEGIAS DE AUTENTICACIÓN
  //LOCAL
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      (email, password, done) => {
        User.findOne({ email })
          .then((user) => {
            if (!user) return done(null, false, { message: "Incorrect email" });

            user.comparePassword(password, function (err, isMatch) {
              if (err) throw err;
              if (!isMatch)
                return done(null, false, { message: "Incorrect password" });
              return done(null, user, { message: "User logged in" });
            });
          })
          .catch(done);
      }
    )
  );
  // FACEBOOK
  // GOOGLE

  // CONECTAR PASSPORT CON LAS SESSIONS CONFIGURADAS EN EXRESS
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) =>
    User.findById(id)
      .then((user) => done(null, user)) // req.user = user
      .catch(done)
  );
};
