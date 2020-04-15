import { Request, Response } from "express";
import {
  getRequest,
  getRestToken,
  sendRequest,
} from "../../services/sf.rest.service";

type SobjectDesc = {
  createable: boolean;
  updateable: boolean;
  name: string;
  label: string;
};
const listObjects = async (req: Request, res: Response) => {
  const user: any = req.user;
  const request = getRequest(
    `${user.instance_url}/services/data/v37.0/sobjects/`
  );
  let token = getRestToken(user.access_token, user.instance_url);

  try {
    const response = await sendRequest(request, token);
    return res.json(
      response.data.sobjects
        .filter((it: SobjectDesc) => it.createable && it.updateable)
        .map((it: SobjectDesc) => ({ name: it.name, label: it.label }))
    );
  } catch (e) {
    return res.json({ errors: e.response.data });
  }
};
export default listObjects;
