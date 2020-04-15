import { Express, Request, Response } from "express";
import CanvasAuth from "./CanvasAuth";
import SalesforceObjectInfo from "./SalesforceObjectInfo";

const Apps = (app: Express) => {
  const apps = [CanvasAuth, SalesforceObjectInfo];
  for (const customApp of apps) {
    customApp(app);
  }
  app.get("/", (req: Request, res: Response) => res.send("ok"));
};
export default Apps;
