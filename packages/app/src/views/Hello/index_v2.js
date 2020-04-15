import React, { useEffect, useState } from "react";
import { getTokenFromRequest } from "../../services/token";
import { describe } from "../../api/sfObject";
import Icon from "@salesforce/design-system-react/components/icon";
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
      <Icon
        assistiveText={{ label: "Account" }}
        category="standard"
        name={sObjectName.toLowerCase()}
        size="small"
      />
      <div>id: {id}</div>
      <div>sObjectName: {sObjectName}</div>
      {objectFields.map((field) => (
        <div>
          {field.label} : {field.name}
          <br />
        </div>
      ))}
    </div>
  );
};
export default Hello;
