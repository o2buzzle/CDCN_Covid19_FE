import { Container, Typography } from "@mui/material";
import React from "react";

function Team() {
  return (
    <div>
      <header
        style={{
          background: "#17a2b8",
          height: "200px",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          paddingBottom: "3rem",
          paddingTop: "3rem",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            color: "white",
            position: "relative",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          OUR TEAM
        </h1>
      </header>
      <Container style={{ backgroundColor: "#c2c2b0" }}>
        <Typography variant="h4" align="center">
          Bùi Khánh Huyền
        </Typography>
        <Typography variant="h4" align="center">
          Lê Trường Giang
        </Typography>
        <Typography variant="h4" align="center">
          Vũ Lê Mai
        </Typography>
        <Typography variant="h4" align="center">
          Trần Hoàng Bảo Long
        </Typography>
      </Container>
    </div>
  );
}

export default Team;
