import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function APiPage() {
  return <SwaggerUI url="http://oner.buzzle.works:8000/openapi.json" />;
}

export default APiPage;
