const JwtStrategy = require("passport-jwt").Strategy,
	ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};
const { User } = require("../../db");
const passport = require("passport");

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(
	new JwtStrategy(opts, async function (jwt_payload, done) {
		console.log(jwt_payload);
		try {
			const user = await User.findOne({ where: { id: jwt_payload } });
			if (!user) {
				return done(null, false);
			}
			return done(null, user);
		} catch (e) {
			return done(err, false);
		}
	})
);
