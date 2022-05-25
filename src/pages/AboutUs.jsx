import { Container, Typography } from "@mui/material";
import React from "react";

function AboutUs() {
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
          About Us
        </h1>
      </header>
      <Container>
        <div>
          <Typography align="center" variant="h3" sx={{ p: "30px" }}>
            Our Story
          </Typography>
          <Typography align="center" variant="body1">
            The ONER team was founded in 2022. Our goal is to distribute the
            benefits of AI to the world. We build software with the philosophy
            that it has to be very easy to use while providing state-of-the-art
            performance. This is to maximize AI accessiblity for everyone in
            preparation to the upcoming AI revolution. We want to distribute
            AI-powered technologies to wider audiences by providing no-code AI
            platform for everyone. Our no-code OCR and NER service is launching
            in May, 2022 for customers aiming to apply OCR and NER technology to
            their specific use cases.
          </Typography>
        </div>
      </Container>
      <Container>
        <Typography align="center" variant="h3" sx={{ p: "30px" }}>
          Team Members
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h5" textAlign="center">
              <b> Bui Khanh Huyen</b>
            </Typography>
            <Typography variant="body2" textAlign="center">
              <i>Lead Developer, AI Engineer</i>
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
            }}
          >
            <Typography variant="h5" textAlign="center">
              <b> Le Truong Giang </b>
            </Typography>
            <Typography variant="body2" textAlign="center">
              <i>DevOps, Backend Development</i>
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
            }}
          >
            <Typography variant="h5" textAlign="center">
              <b> Tran Hoang Bao Long </b>
            </Typography>
            <Typography variant="body2" textAlign="center">
              <i>Front End UI/UX Designer</i>
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
            }}
          >
            <Typography variant="h5" textAlign="center">
              <b> Vu Le Mai </b>
            </Typography>
            <Typography variant="body2" textAlign="center">
              <i>Front End Logic Development</i>
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
