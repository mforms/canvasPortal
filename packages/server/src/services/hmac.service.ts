import crypto from "crypto";
import { decode } from "./base64.service";
let AUTH_SECRET: string;
export const initHmacService = (secret: string) => (AUTH_SECRET = secret);
export const verifyHash = async (
  value: string,
  expectedEncryptedValue: string
) => {
  return new Promise((resolve, reject) => {
    if (!AUTH_SECRET) reject("MFORMS ERROR: AUTH");
    const hmac = crypto.createHmac("sha256", AUTH_SECRET);
    hmac.on("readable", () => {
      const data = hmac.read();
      if (data) {
        const encryptedValue = data.toString();
        if (encryptedValue === decode(expectedEncryptedValue)) resolve();
        else reject("SECURITY ERROR");
      }
      reject("NO DATA");
    });
    hmac.write(value);
    hmac.end();
  });
};
