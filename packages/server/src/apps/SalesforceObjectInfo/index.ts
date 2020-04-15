import { Express } from "express";
import passport from "passport";
import listObjects from "./listObjects";
import describeObject from "./describeObject";
const restrict = passport.authenticate("jwt", { session: false });
const SalesforceObjectInfo = (app: Express) => {
    app.get("/sf/objects", restrict, listObjects);
    app.get("/sf/describe/:name", restrict, describeObject);
};
export default SalesforceObjectInfo;
