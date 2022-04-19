import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React from "react";

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

function OCR() {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  const onTextInput = (e) => {
    setInput(e.target.value);
  };
  const onButtonClick = () => {
    setOutput(input);
  };
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      <Grid
        container
        sx={{ flexGrow: 1 }}
        justifyContent="center"
        alignItems="baseline"
        spacing="2"
      >
        <Grid item xs={5}>
          <TextField
            multiline
            rows="5"
            label="Input"
            fullWidth
            value={input}
            onChange={onTextInput}
            margin="normal"
          />
          <Button
            variant="contained"
            size="small"
            disabled={!input}
            onClick={() => {
              onButtonClick();
            }}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Output"
            multiline
            rows="5"
            fullWidth
            value={output}
            margin="normal"
          />
        </Grid>
        <Grid item xs>
          <ThemeProvider theme={outerTheme}>
            <ButtonGroup
              sx={{ "& button": { m: 0.4 } }}
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
    </>
  );
}

export default OCR;
