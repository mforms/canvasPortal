import axios from "axios";

const serverUrl = "https://dev.tldis.icu:3000";
export const buildAuthHeader = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const describe = async (name, token) => {
  return await axios.get(
    `${serverUrl}/sf/describe/${name}`,
    buildAuthHeader(token)
  );
};
export const list = async (token) => {
  return await axios.get(`${serverUrl}/sf/objects`, buildAuthHeader(token));
};
