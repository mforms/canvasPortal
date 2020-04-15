export const decode = (value: string) => {
    return Buffer.from(value, "base64").toString();
};
