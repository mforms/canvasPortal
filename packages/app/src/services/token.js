import { parse } from "query-string";
import Cookies from "js-cookie";
export const getTokenFromRequest = (location) => {
  const key = parse(location.search).token;
  const token = Cookies.get(key);
  return token;
};
