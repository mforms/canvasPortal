import React from "react";
const Hello = ({
  match: {
    params: { id, sObjectName },
  },
  location,
}) => {
  console.log({ location });
  return <div>Hello</div>;
};
export default Hello;
