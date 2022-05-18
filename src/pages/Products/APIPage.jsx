import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function APiPage() {
  return (
    /* prettier-ignore */
    <SwaggerUI url={`${process.env.REACT_APP_API_HOST}/openapi.json`} />
  );
}

export default APiPage;
