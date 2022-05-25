import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function submitToTeam() {
  // Do nothing, just like university forms
  /* eslint-disable no-alert */
  alert(
    "Thank you. Your feedback has been recorded.\n\nWe will get back to you soon."
  );
}

export default function Contact() {
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
          Contact
        </h1>
      </header>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography
              variant="h4"
              color="textSecondary"
              component="div"
              gutterBottom
              align="center"
            >
              Get in touch
            </Typography>
            <form onSubmit={submitToTeam}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
