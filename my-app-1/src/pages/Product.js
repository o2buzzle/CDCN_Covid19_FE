import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

const outerTheme = createTheme({
  palette: {
    number1: {
      main: "#5300d9",
    },
    number2: {
      main: "#6a5608",
    },
    number3: {
      main: "#a3f48a",
    },
    number4: {
      main: "#958bad",
    },
    number5: {
      main: "#99d000",
    },
    number6: {
      main: "#70005a",
    },
    number7: {
      main: "#00b994",
    },
    number8: {
      main: "#3ad9f1",
    },
    number9: {
      main: "#4d000c",
    },
    number10: {
      main: "#e4b84a",
    },
  },
});

const node = [
  {
    value: "PATIENT_ID",
    color: "number1",
  },
  {
    value: "NAME",
    color: "number2",
  },
  {
    value: "AGE",
    color: "number3",
  },
  {
    value: "GENDER",
    color: "number4",
  },
  {
    value: "JOB",
    color: "number5",
  },
  {
    value: "ORGANIZATION",
    color: "number6",
  },
  {
    value: "LOCATION",
    color: "number7",
  },
  {
    value: "DATE",
    color: "number8",
  },
  {
    value: "SYMPTOM_AND_DISEASE",
    color: "number9",
  },
  {
    value: "TRANPORTATION",
    color: "number10",
  },
];

function MainPage() {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  const onTextInput = (e) => {
    setInput(e.target.value);
  };
  const onButtonClick = () => {
    setOutput(input);
  };
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Typography variant="h1" color="text.secondary" align="center">
        Hello
      </Typography>
      <Grid container justifyContent="center" spacing="1">
        <Grid item xs={4}>
          <TextField
            multiline
            rows="5"
            label="Input"
            fullWidth
            value={input}
            onChange={onTextInput}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Output"
            multiline
            rows="5"
            fullWidth
            value={output}
          />
        </Grid>
        <Grid item xs>
          <ThemeProvider theme={outerTheme}>
            <ButtonGroup
              sx={{ "& button": { m: 0.5 } }}
              variant="contained"
              size="medium"
              disableElevation
              orientation="vertical"
              aria-label="vertical outlined button group"
            >
              {node.map((item) => (
                <Button key={item.value} color={item.color}>
                  {" "}
                  {item.value}{" "}
                </Button>
              ))}
            </ButtonGroup>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        size="small"
        disabled={!input}
        onClick={() => {
          onButtonClick();
        }}
      >
        Hello
      </Button>
    </React.Fragment>
  );
}

export default MainPage;
