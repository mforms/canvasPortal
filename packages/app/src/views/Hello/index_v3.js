import React, { useEffect, useState, Fragement } from "react";
import { getTokenFromRequest } from "../../services/token";
import { describe } from "../../api/sfObject";
import Icon from "@salesforce/design-system-react/components/icon";
import PageHeader from "@salesforce/design-system-react/components/page-header";
const Hello = ({
  match: {
    params: { id, sObjectName },
  },
  location,
}) => {
  const [objectFields, setObjectFields] = useState([]);
  const GetObjectInfo = async (token) => {
    const {
      data: { fields },
    } = await describe(sObjectName, token);
    setObjectFields(fields);
  };
  useEffect(() => {
    const token = getTokenFromRequest(location);
    if (token) {
      GetObjectInfo(token);
    }
  }, []);

  return (
    <div>
      <article className="slds-card">
        <PageHeader
          icon={
            <Icon
              category="standard"
              name={sObjectName.toLowerCase()}
              style={{
                backgroundColor: "#ea7600",
                fill: "#ffffff",
              }}
              title={sObjectName}
            />
          }
          title={sObjectName}
          truncate
          variant="object-home"
        />
        <div
          className="slds-card__body slds-card__body_inner"
          style={{ height: "400px", overflow: "auto" }}
        >
          {objectFields.map((field, index) => (
            <p key={index}>{field.label + " : " + field.name}</p>
          ))}
        </div>
      </article>
    </div>
  );
};
export default Hello;
