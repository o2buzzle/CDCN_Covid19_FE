/* eslint-disable */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import overlay from "../image/overlay.png";
import result from "../image/result.png";
import start from "../image/start.png";
import upload from "../image/upload.png";

function HomePage() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ pt: 6, pb: 6 }}
        style={{
          // border: "1px solid grey",
          width: "100%",
          backgroundColor: "rgba(0, 180, 180, 0.1)",
        }}
      >
        <Typography
          align="center"
          color="text.primary"
          variant="h3"
          sx={{ pt: 0, pb: 4 }}
        >
          NER COVID anylazer with build in OCR text
        </Typography>

        <Typography
          align="center"
          color="text.primary"
          variant="h5"
          sx={{ pt: 0, pb: 4 }}
        >
          Our website provide the lasted AI driven NER for the recent raise of
          COVID-19 cases over the world. Recognizing COVID-19 related named
          entities in Vietnamese, consisting of 35K entities over 10K sentences.
          We define 10 entity types with the aim of extracting key information
          related to COVID-19 patients, which are especially useful in
          downstream applications.
        </Typography>

        <Box textAlign="center">
          <Button
            variant="contained"
            align="center"
            color="primary"
            href="/product"
          >
            Try out ours product here
          </Button>
        </Box>
      </Container>
      <Container sx={{ pt: 6, pb: 6 }} style={{ height: "400px" }}>
        <Typography variant="h3" align="center">
          Products
        </Typography>
        <Typography variant="h6">Ours products include</Typography>
        <Typography mt={3} variant="body1">
          State of the art Optical Character Recognition or OCR for short
        </Typography>
        <Typography mt={3} variant="body1">
          NER for recognizing COVID-19 related named entities in Vietnamese
        </Typography>
        {/* <List>
          <ListItemButton>
            <ListItemText
              onClick={() => {
                console.log("h");
              }}
            >
              {" "}
              State of the art Optical Character Recognition or OCR for short{" "}
            </ListItemText>
          </ListItemButton>

          <ListItemText> </ListItemText>
        </List> */}
      </Container>
      <Container maxWidth={false} sx={{ pt: 8, pb: 6 }}>
        <Box
          style={{
            // border: "1px solid grey",
            textAlign: "center",
            width: "100%",
            backgroundColor: "rgba(0, 180, 180, 0.1)",
            borderRadius: "10px",
          }}
        >
          <Typography align="center" color="text.primary" variant="h3">
            Build in OCR
          </Typography>

          <Stack
            sx={{ pt: 4, display: "flex" }}
            direction={{ xs: "column", sm: "row" }}
            spacing={6}
            justifyContent="center"
          >
            <div>
              <img src={upload} alt="overlay" />
              <Typography
                style={{ color: "#053664" }}
                align="center"
                variant="h5"
              >
                {" "}
                Upload
              </Typography>
            </div>
            <div>
              <img src={start} alt="overlay" />
              <Typography
                style={{ color: "#005E7C" }}
                align="center"
                variant="h5"
              >
                {" "}
                Start OCR
              </Typography>
            </div>

            <div>
              <img src={result} alt="overlay" />
              <Typography
                style={{ color: "#087758" }}
                align="center"
                variant="h5"
              >
                {" "}
                Result
              </Typography>
            </div>

            <div style={{ alignContent: "center", alignItems: "center" }}>
              <img src={overlay} alt="overlay" />
              <Typography
                style={{ color: "#00A987" }}
                align="center"
                variant="h5"
              >
                {" "}
                Overlay
              </Typography>
            </div>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
