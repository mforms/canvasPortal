import { Express, Request, Response } from "express";
import SignedRequest from "./SignedRequest";
const CanvasAuth = (app: Express) => {
  app.post("/canvas", SignedRequest);
  //   app.post("/canvas", (req: Request, res: Response) => res.send("ok"));
};
export default CanvasAuth;
