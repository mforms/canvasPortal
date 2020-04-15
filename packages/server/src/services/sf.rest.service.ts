import ClientOAuth2, { RequestObject, Token } from "client-oauth2";
import axios, { AxiosRequestConfig, Method } from "axios";
export const getRestToken = (accessToken: string, instanceUrl: string) => {
  return new ClientOAuth2({
    authorizationUri: `${instanceUrl}/services/oauth2/authorize`,
    accessTokenUri: `${instanceUrl}/services/oauth2/token`,
    scopes: ["full"],
  }).createToken(accessToken, null, "bearer", {});
};
export const sendRequest = async function (
  request: AxiosRequestConfig,
  token: Token
) {
  console.log(token.sign(request as RequestObject));
  return await axios(token.sign(request as RequestObject));
};
export const getRequest = (url: string): AxiosRequestConfig => ({
  method: "get",
  url: url,
});
export const createRequest = (url: string, data: any): AxiosRequestConfig => ({
  method: "post",
  url,
  data,
});
export const updateRequest = (url: string, data: any): AxiosRequestConfig => ({
  method: "patch",
  url,
  data,
});
