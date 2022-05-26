/* eslint-disable */
import { Button, Stack, TextField, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import React, { useState } from "react";
import Switch, { Case, Default } from "react-switch-case";

const patient_id = "#5400d9";
const name = "#6a5608";
const age = "#a2f48a";
const gender = "#958bad";
const job = "#9ad000";
const organization = "#700059";
const location = "#00b993";
const date = "#3ad9f1";
const symtom_and_disease = "#4d000b";
const transportation = "#e4b84a";
function FileOner() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [inputOCR, setInputOCR] = useState("");
  const [outputOCR, setOutputOCR] = useState("");
  const [inputSubmitted, setInputSubmitted] = useState(false);
  const [outputNER, setOutputNER] = useState();
  const onTextInput = (e) => {
    setInputOCR(e.target.value);
    console.log(e.target.value);
  };
  let formData = new FormData();
  const handleSelectedFile = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const handleClearOutput = () => {
    if (!confirm("Are you sure you want to clear the output?")) {
      return;
    }
    document.getElementById("resetBtnForm").reset();
    const newFormData = new FormData();
    formData = newFormData;
    setIsFilePicked(false);
    setInputOCR("");
    setOutputOCR("");
    setOutputNER();
    setInputSubmitted(false);
    document.getElementById("ner-mappings-box").style.display = "block";
  };
  const handleFileTextSubmission = () => {
    console.log(selectedFile);
    formData.append("file", selectedFile);
    fetch(`${process.env.REACT_APP_API_HOST}/ner/file_upload`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        let tempResult = [];
        result.map((i) => tempResult.push([i.token, i.prediction]));
        setOutputNER(tempResult);
        setInputSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleOCRSubmission = () => {
    // if (isNaN(selectedFile)) {
    //   console.log("No File");
    //   return;
    // }
    // console.log(selectedFile);
    if (!selectedFile) {
      alert("Please select a file");
      return;
    }
    setInputOCR("Processing...");
    formData.append("file", selectedFile);
    fetch(`${process.env.REACT_APP_API_HOST}/ocr/file_upload`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        let tempResult = "";
        result.map((i) =>
          i.confidence > 80 ? (tempResult += i.text + " ") : tempResult
        );
        setInputOCR(tempResult);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleNERSubmission = () => {
    setOutputNER([["Processing...", "O"]]);
    fetch(`${process.env.REACT_APP_API_HOST}/ner/text_upload`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ text: inputOCR }),
    })
      .then((response) => response.json())
      .then((result) => {
        let tempResult = [];
        result.map((i) => tempResult.push([i.token, i.prediction]));
        // console.log(tempResult);
        setOutputNER(tempResult);
        setInputSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    document.getElementById("ner-mappings-box").style.display = "none";
  };
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="start">
      <Grid item xs={7}>
        <Stack>
          <TextField
            multiline
            rows="7"
            label="Input"
            fullWidth
            value={inputOCR}
            onChange={(e) => setInputOCR(e.target.value)}
          />
          <Box
            style={{
              marginTop: "30px",
              borderRadius: "5px",
              border: "2px solid grey",
              wordWrap: "break-word",
              padding: "18px 18px",
              height: "200px",
              maxHeight: "300px",
              overflowY: "scroll",
            }}
          >
            {inputSubmitted ? (
              <div>
                {outputNER.map((i) => (
                  <Switch condition={i[1].substring(2)}>
                    <Case value={"PATIENT_ID"}>
                      <Tooltip title="PATIENT_ID">
                        <span style={{ color: patient_id, fontWeight: "bold" }}>
                          {" "}
                          {i[0].replaceAll("_", " ")}
                        </span>
                      </Tooltip>
                    </Case>
                    <Case value={"NAME"}>
                      <Tooltip title="NAME">
                        <span style={{ color: name, fontWeight: "bold" }}>
                          {" "}
                          {i[0].replaceAll("_", " ")}
                        </span>
                      </Tooltip>
                    </Case>
                    <Case value={"AGE"}>
                      <Tooltip title="AGE">
                        <span style={{ color: age, fontWeight: "bold" }}>
                          {" "}
                          {i[0].replaceAll("_", " ")}
                        </span>
                      </Tooltip>
                    </Case>
                    <Case value={"GENDER"}>
                      <Tooltip title="GENDER">
                        <span style={{ color: gender, fontWeight: "bold" }}>
                          {" "}
                          {i[0].replaceAll("_", " ")}
                        </span>
                      </Tooltip>
                    </Case>
                    <Case value={"JOB"}>
                      <Tooltip title="JOB">
                        <span style={{ color: job, fontWeight: "bold" }}>
                          {" "}
                          {i[0].replaceAll("_", " ")}
                        </span>
                      </Tooltip>
                    </Case>
                    <Case value={"ORGANIZATION"}>
                      <Tooltip title="ORGANIZATION">
                        <span
                          style={{ color: organization, fontWeight: "bold" }}
                        >
                          {" "}
                          {i[0].replaceAll("_", " ")}
                        </span>
                      </Tooltip>
                    </Case>
                    <Case value={"LOCATION"}>
                      <Tooltip title="LOCATION">
                        <span style={{ color: location, fontWeight: "bold" }}>
                          {" "}
                          {i[0].replaceAll("_", " ")}
                        </span>
                      </Tooltip>
                    </Case>
                    <Case value={"DATE"}>
                      <Tooltip title="DATE">
                        <span style={{ color: date, fontWeight: "bold" }}>
                          {" "}
                          {i[0].replaceAll("_", " ")}
                        </span>
                      </Tooltip>
                    </Case>
                    <Case value={"SYMTOM_AND_DISEASE"}>
                      <Tooltip title="SYMTOM_AND_DISEASE">
                        <span
                          style={{
                            color: symtom_and_disease,
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          {i[0].replaceAll("_", " ")}
                        </span>
                      </Tooltip>
                    </Case>
                    <Case value={"TRANSPORTATION"}>
                      <Tooltip title="TRANSPORTATION">
                        <span
                          style={{ color: transportation, fontWeight: "bold" }}
                        >
                          {" "}
                          {i[0].replaceAll("_", " ")}
                        </span>
                      </Tooltip>
                    </Case>
                    <Case value={"LINEBREAK"}>
                      <br></br>
                    </Case>
                    <Default>
                      <Switch condition={i[0]}>
                        <Case value={","}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {","}
                          </span>
                        </Case>
                        <Case value={"."}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {"."}
                          </span>
                        </Case>
                        <Case value={"?"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {"?"}
                          </span>
                        </Case>
                        <Case value={";"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {";"}
                          </span>
                        </Case>
                        <Case value={"!"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {"!"}
                          </span>
                        </Case>
                        <Case value={"*"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {"*"}
                          </span>
                        </Case>
                        <Case value={"}"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {")"}
                          </span>
                        </Case>
                        <Case value={")"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {")"}
                          </span>
                        </Case>
                        <Case value={"@"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {"@"}
                          </span>
                        </Case>
                        <Case value={"&"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {"&"}
                          </span>
                        </Case>
                        <Case value={"#"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {"#"}
                          </span>
                        </Case>
                        <Case value={"%"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {"%"}
                          </span>
                        </Case>
                        <Case value={"^"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {"^"}
                          </span>
                        </Case>
                        <Case value={":"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {":"}
                          </span>
                        </Case>
                        <Case value={"]"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {"]"}
                          </span>
                        </Case>
                        <Case value={"/"}>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {"/"}
                          </span>
                        </Case>
                        <Default>
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {" "}
                            {i[0][0] === "<" ? null : i[0].replaceAll("_", " ")}
                          </span>
                        </Default>
                      </Switch>
                    </Default>
                  </Switch>
                ))}
              </div>
            ) : (
              <div>Chưa có kết quả</div>
            )}
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" flexWrap="wrap">
          {" "}
          <label htmlFor="contained-button-file">
            <input
              type="file"
              name="file"
              id="contained-button-file"
              style={{ display: "none" }}
              onChange={handleSelectedFile}
            />
            <Button
              style={{
                borderRadius: 4,
                color: "white",
                align: "center",
                fontSize: "12px",
                margin: "12px",
                minWidth: "150px",
              }}
              variant="contained"
              component="span"
            >
              Upload
            </Button>
          </label>
          <Button
            style={{
              borderRadius: 4,
              color: "white",
              align: "center",
              fontSize: "12px",
              margin: "12px",
              minWidth: "150px",
            }}
            variant="contained"
            onClick={handleOCRSubmission}
          >
            Submit OCR
          </Button>
          <Button
            style={{
              borderRadius: 4,
              color: "white",
              align: "center",
              fontSize: "12px",
              margin: "12px",
              minWidth: "150px",
            }}
            variant="contained"
            onClick={handleNERSubmission}
          >
            Submit NER
          </Button>
          <form id="resetBtnForm">
            <Button
              style={{
                borderRadius: 4,
                color: "white",
                align: "center",
                fontSize: "12px",
                margin: "12px",
                minWidth: "150px",
              }}
              variant="contained"
              onClick={handleClearOutput}
            >
              Clear output
            </Button>
          </form>
        </Stack>
        <div>
          {isFilePicked ? (
            <div>
              <p>
                {" "}
                File to upload: {selectedFile.name} (
                {Math.floor(selectedFile.size / 1024)} KB)
              </p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
        </div>
      </Grid>
      <Grid id="ner-mappings-box" item alignItems="start">
        <Box
          sx={{ width: "100%", height: 670, maxWidth: 360, bgcolor: "white" }}
        >
          <List disablePadding={true}>
            <ListItem key="patient_id">
              <ListItemButton
                style={{
                  borderRadius: 10,
                  backgroundColor: patient_id,
                  color: "white",
                  align: "center",
                  height: "50px",
                  width: "250px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                PATIENT_ID
              </ListItemButton>
            </ListItem>
            <ListItem key="name">
              <ListItemButton
                style={{
                  borderRadius: 10,
                  backgroundColor: name,
                  color: "white",
                  align: "center",
                  fontSize: "15px",
                  height: "50px",
                  width: "250px",
                  fontWeight: "bold",
                }}
              >
                NAME
              </ListItemButton>
            </ListItem>
            <ListItem key="age">
              <ListItemButton
                style={{
                  borderRadius: 10,
                  backgroundColor: age,
                  color: "white",
                  align: "center",
                  fontSize: "15px",
                  fontWeight: "bold",
                  height: "50px",
                  width: "250px",
                }}
              >
                AGE
              </ListItemButton>
            </ListItem>
            <ListItem key="gender">
              <ListItemButton
                style={{
                  borderRadius: 10,
                  backgroundColor: gender,
                  color: "white",
                  align: "center",
                  fontSize: "15px",
                  fontWeight: "bold",
                  height: "50px",
                  width: "250px",
                }}
              >
                GENDER
              </ListItemButton>
            </ListItem>
            <ListItem key="job">
              <ListItemButton
                style={{
                  borderRadius: 10,
                  backgroundColor: job,
                  color: "white",
                  align: "center",
                  fontSize: "15px",
                  fontWeight: "bold",
                  height: "50px",
                  width: "250px",
                }}
              >
                JOB
              </ListItemButton>
            </ListItem>
            <ListItem key="organization">
              <ListItemButton
                style={{
                  borderRadius: 10,
                  backgroundColor: organization,
                  color: "white",
                  align: "center",
                  fontSize: "15px",
                  fontWeight: "bold",
                  height: "50px",
                  width: "250px",
                }}
              >
                ORGANIZATION
              </ListItemButton>
            </ListItem>
            <ListItem key="location">
              <ListItemButton
                style={{
                  borderRadius: 10,
                  backgroundColor: location,
                  color: "white",
                  align: "center",
                  fontSize: "15px",
                  fontWeight: "bold",
                  height: "50px",
                  width: "250px",
                }}
              >
                LOCATION
              </ListItemButton>
            </ListItem>
            <ListItem key="date">
              <ListItemButton
                style={{
                  borderRadius: 10,
                  backgroundColor: date,
                  color: "white",
                  align: "center",
                  fontSize: "15px",
                  fontWeight: "bold",
                  height: "50px",
                  width: "250px",
                }}
              >
                DATE
              </ListItemButton>
            </ListItem>
            <ListItem key="symtom_and_disease">
              <ListItemButton
                style={{
                  borderRadius: 10,
                  backgroundColor: symtom_and_disease,
                  color: "white",
                  align: "center",
                  fontSize: "15px",
                  fontWeight: "bold",
                  height: "50px",
                  width: "250px",
                }}
              >
                SYMPTOM_AND_DISEASE
              </ListItemButton>
            </ListItem>
            <ListItem key="transportation">
              <ListItemButton
                style={{
                  borderRadius: 10,
                  backgroundColor: transportation,
                  color: "white",
                  align: "center",
                  fontSize: "15px",
                  fontWeight: "bold",
                  height: "50px",
                  width: "250px",
                }}
              >
                TRANSPORTATION
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
}

export default FileOner;
