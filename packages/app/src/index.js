import React from "react";
import { render } from "react-dom";
import "@salesforce/canvas-js-sdk";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";
import settings from "@salesforce/design-system-react/components/settings";

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

const mount = document.createElement("div");
root.setAttribute("id", "mount");
document.body.appendChild(mount);
settings.setAppElement("#mount");

render(
  <Router>
    <Route path="/" component={Main} />
  </Router>,
  root
);
