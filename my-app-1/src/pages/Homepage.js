import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
function HomePage() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      <Container sx={{ pt: 6, pb: 6 }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={6} md={6}>
            <Typography
              align="center"
              color="text.primary"
              variant="h3"
              sx={{ pt: 0, pb: 4 }}
            >
              Build ORC with no code
            </Typography>

            <Typography
              align="center"
              color="text.primary"
              variant="h5"
              sx={{ pt: 0, pb: 4 }}
            >
              Description for ORC
            </Typography>

            <Box textAlign="center">
              <Button align="center" color="secondary" sx={{ pt: 0 }}>
                Hello
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box>
              <Typography>Hello</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ pt: 8, pb: 6 }}>
        <Box>
          <Typography align="left" color="text.primary">
            Build ORC with no code
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default HomePage;
