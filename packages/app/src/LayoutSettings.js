import React from "react";
import actionSprite from "@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg";
import customSprite from "@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg";
import doctypeSprite from "@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg";
import standardSprite from "@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg";
import utilitySprite from "@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg";
import IconSettings from "@salesforce/design-system-react/components/icon-settings";

const LayoutSettings = ({ children }) => (
  <IconSettings
    actionSprite={actionSprite}
    customSprite={customSprite}
    doctypeSprite={doctypeSprite}
    standardSprite={standardSprite}
    utilitySprite={utilitySprite}
  >
    {children}
  </IconSettings>
);
export default LayoutSettings;
