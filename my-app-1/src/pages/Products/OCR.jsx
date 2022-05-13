import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";

const node = [
  {
    value: "PATIENT_ID",
    color: "#5300d9",
  },
  {
    value: "NAME",
    color: "#6a5608",
  },
  {
    value: "AGE",
    color: "#a3f48a",
  },
  {
    value: "GENDER",
    color: "#958bad",
  },
  {
    value: "JOB",
    color: "#99d000",
  },
  {
    value: "ORGANIZATION",
    color: "#70005a",
  },
  {
    value: "LOCATION",
    color: "#00b994",
  },
  {
    value: "DATE",
    color: "#3ad9f1",
  },
  {
    value: "SYMPTOM_AND_DISEASE",
    color: "#4d000c",
  },
  {
    value: "TRANPORTATION",
    color: "#e4b84a",
  },
];

function OCR() {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  // const [jsonText, setJsonText] = React.useState({});

  const onTextInput = (e) => {
    setInput(e.target.value);
  };
  const onButtonClick = () => {
    setOutput(input);
  };

  const handleSubmission = () => {
    /* jsonText = {one: "two", three: "four"}; */

    fetch("https://catfact.ninja/fact", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        // setJsonText(result);
        setOutput(result.fact);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <Grid
      container
      sx={{ flexGrow: 1 }}
      justifyContent="center"
      alignItems="baseline"
      spacing="2"
    >
      <Grid item xs={4}>
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
        <Button
          onClick={() => {
            handleSubmission();
          }}
        >
          Cat
        </Button>
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Output"
          multiline
          rows="5"
          fullWidth
          value={output}
          margin="normal"
        />
      </Grid>
      <Grid item>
        <ButtonGroup
          sx={{
            "& button": { m: 0.4 },
          }}
          variant="contained"
          size="medium"
          disableElevation
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          {node.map((item) => (
            <Button key={item.value} style={{ background: `${item.color}` }}>
              {item.value}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default OCR;
