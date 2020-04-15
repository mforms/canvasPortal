import https from "https";
import fs from "fs";
import init from "./init";
const app = init();
const { NODE_ENV, PORT, CERT_PATH } = process.env;
if (NODE_ENV === "DEV") {
  https
    .createServer(
      {
        key: fs.readFileSync(`${CERT_PATH}privkey1.pem`),
        cert: fs.readFileSync(`${CERT_PATH}fullchain1.pem`),
      },
      app
    )
    .listen(PORT);
} else {
  app.listen(PORT, () => {
    console.log(" Started %d in %s mode", PORT, NODE_ENV);
  });
}
