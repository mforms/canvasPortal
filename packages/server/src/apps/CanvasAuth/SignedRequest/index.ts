import { Request, Response } from "express";
import { verifyHash } from "../../../services/hmac.service";
import { decode } from "../../../services/base64.service";
import { sign } from "../../../services/jwt.service";
import { generateId } from "../../../services/id.service";

let SignedRequest = async (req: Request, res: Response) => {
  const endpoint = req.app.get("endpoint");
  let payload;
  try {
    const [hashedBase64Context, base64Context] = req.body.signed_request.split(
      "."
    );
    verifyHash(base64Context, hashedBase64Context);
    payload = JSON.parse(decode(base64Context));
  } catch (e) {
    return res.status(401).send();
  }
  //   res.send(payload);
  const username = payload.context.user.userName;
  const path = payload.context.environment.parameters.path;
  const {
    oauthToken,
    refreshToken,
    instanceUrl,
    targetOrigin,
    instanceId,
  } = payload.client;
  const user = {
    username: username,
    userId: payload.context.user.userId,
    orgId: payload.context.organization.organizationId,
    access_token: oauthToken,
    instance_url: instanceUrl,
    refresh_token: refreshToken,
    targetOrigin,
    instanceId,
  };
  const jwtToken = sign(user);
  const cookieId = generateId();
  res.cookie(cookieId, jwtToken, {
    maxAge: 60000,
    httpOnly: false,
    domain: "tldis.icu",
  });
  res.redirect(303, endpoint + path + "?token=" + cookieId);
};

export default SignedRequest;
