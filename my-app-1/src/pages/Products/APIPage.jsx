import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function APiPage() {
  return (
    <SwaggerUI url={`http://${process.env.REACT_APP_API_HOST}/openapi.json`} />
  );
}

export default APiPage;
