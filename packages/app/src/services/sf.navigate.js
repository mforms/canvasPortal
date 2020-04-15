import Sfdc from "Sfdc";
import * as clientApi from "../api/client";
export const back = async (token) => {
  const {
    data: { client },
  } = await clientApi.get(token);
  Sfdc.canvas.client.publish(client, {
    name: "s1.back",
    payload: {},
  });
};
export const recordHome = async (token, recordId) => {
  const {
    data: { client },
  } = await clientApi.get(token);
  Sfdc.canvas.client.publish(client, {
    name: "s1.navigateToSObject",
    payload: { recordId },
  });
};
