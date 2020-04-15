import { Request, Response } from "express";
import {
  getRequest,
  getRestToken,
  sendRequest,
} from "../../services/sf.rest.service";

const describeObject = async (req: Request, res: Response) => {
  const objectName = req.params.name;
  const user: any = req.user;
  const request = getRequest(
    `${user.instance_url}/services/data/v37.0/sobjects/${objectName}/describe/`
  );
  let token = getRestToken(user.access_token, user.instance_url);
  try {
    const response = await sendRequest(request, token);
    return res.json(response.data);
  } catch (e) {
    return res.json({ errors: e.response.data });
  }
};
export default describeObject;
