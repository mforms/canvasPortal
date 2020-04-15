import express from "express";
import passport from "passport";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { addJwtStrategy } from "./config/passport";
import { initJWTService } from "./services/jwt.service";
import { initHmacService } from "./services/hmac.service";
import Apps from "./apps";
const init = () => {
  dotenv.config();
  const app = express();
  const { NODE_ENV, ENDPOINT, SECRET, CONSUMER_SECRET } = process.env;
  addJwtStrategy(SECRET);
  initJWTService(SECRET);
  initHmacService(CONSUMER_SECRET);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(passport.initialize());
  app.set("env", NODE_ENV);
  app.set("endpoint", ENDPOINT);
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", ENDPOINT);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PATCH, PUT, POST, GET, DELETE, OPTIONS"
    );
    next();
  });
  Apps(app);
  return app;
};
export default init;
