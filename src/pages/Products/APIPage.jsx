import React from "react";
import { Container } from "@mui/material";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function APiPage() {
  return (
    <Container>
      <SwaggerUI url={`${process.env.REACT_APP_API_HOST}/openapi.json`} />
    </Container>
  );
}

export default APiPage;
