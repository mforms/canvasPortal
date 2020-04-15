import jwt from "jsonwebtoken";
let JWT_SECRET: string;
export const initJWTService = (secret: string) => (JWT_SECRET = secret);
export const sign = (value: object) => {
    return jwt.sign(value, JWT_SECRET);
};
export const verify = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
};
