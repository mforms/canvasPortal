import passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
/**
 * Bearer Token Auth
 */
export const addJwtStrategy = (secret: string) => {
  const jwtStrategy = new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secret,
    },
    function (jwtPayload: any, cb: any) {
      return cb(undefined, jwtPayload);
    }
  );
  passport.use(jwtStrategy);
};
