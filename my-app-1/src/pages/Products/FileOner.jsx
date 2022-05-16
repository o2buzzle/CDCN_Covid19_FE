/* eslint-disable */
import { Button, Stack, TextField } from "@mui/material";
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
    const newFormData = new FormData();
    formData = newFormData;
    setIsFilePicked(false);
    setInputOCR("");
    setOutputOCR("");
    setOutputNER();
    setInputSubmitted(false);
  };
  const handleFileTextSubmission = () => {
    console.log(selectedFile);
    formData.append("file", selectedFile);
    fetch("http://oner.buzzle.works:8000/ner/file_upload", {
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
    console.log(selectedFile);
    formData.append("file", selectedFile);
    fetch("http://oner.buzzle.works:8000/ocr/file_upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        let tempResult = "";
        result.map((i) =>
          i.confidence > 80 ? (tempResult += i.text + " ") : tempResult
        );
        console.log(tempResult);
        setInputOCR(tempResult);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleNERSubmission = () => {
    fetch("http://oner.buzzle.works:8000/ner/text_upload", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ text: inputOCR }),
    })
      .then((response) => response.json())
      .then((result) => {
        let tempResult = [];
        result.map((i) => tempResult.push([i.token, i.prediction]));
        console.log(tempResult);
        setOutputNER(tempResult);
        setInputSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="baseline">
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
                      <span style={{ color: patient_id }}>
                        {" "}
                        {i[0].replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"NAME"}>
                      <span style={{ color: name }}>
                        {" "}
                        {i[0].replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"AGE"}>
                      <span style={{ color: age }}>
                        {" "}
                        {i[0].replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"GENDER"}>
                      <span style={{ color: gender }}>
                        {" "}
                        {i[0].replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"JOB"}>
                      <span style={{ color: job }}>
                        {" "}
                        {i[0].replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"ORGANIZATION"}>
                      <span style={{ color: organization }}>
                        {" "}
                        {i[0].replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"LOCATION"}>
                      <span style={{ color: location }}>
                        {" "}
                        {i[0].replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"DATE"}>
                      <span style={{ color: date }}>
                        {" "}
                        {i[0].replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"SYMTOM_AND_DISEASE"}>
                      <span style={{ color: symtom_and_disease }}>
                        {" "}
                        {i[0].replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"TRANSPORTATION"}>
                      <span style={{ color: transportation }}>
                        {" "}
                        {i[0].replace("_", " ")}
                      </span>
                    </Case>
                    <Default>
                      <span style={{ color: "black" }}>
                        {" "}
                        {i[0][0] === "<" ? null : i[0].replace("_", " ")}
                      </span>
                    </Default>
                  </Switch>
                ))}
              </div>
            ) : (
              <div>Chưa có kết quả</div>
            )}
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          {" "}
          <label htmlFor="contained-button-file">
            <input
              type="file"
              name="file"
              id="contained-button-file"
              style={{ display: "none" }}
              onChange={handleSelectedFile}
            />
            <Button variant="contained" component="span">
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
            }}
            variant="contained"
            size="medium"
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
            }}
            variant="contained"
            onClick={handleNERSubmission}
          >
            Submit NER
          </Button>
          <Button
            style={{
              borderRadius: 4,
              color: "white",
              align: "center",
              fontSize: "12px",
              margin: "12px",
            }}
            variant="contained"
            onClick={handleClearOutput}
          >
            Clear output
          </Button>
        </Stack>
        <div>
          {isFilePicked ? (
            <div>
              <p> {selectedFile.name}</p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
        </div>
      </Grid>
      <Grid item>
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
                  fontSize: "12px",
                  height: "50px",
                  width: "200px",
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
                  fontSize: "12px",
                  height: "50px",
                  width: "200px",
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
                  fontSize: "12px",
                  height: "50px",
                  width: "200px",
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
                  fontSize: "12px",
                  height: "50px",
                  width: "200px",
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
                  fontSize: "12px",
                  height: "50px",
                  width: "200px",
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
                  fontSize: "12px",
                  height: "50px",
                  width: "200px",
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
                  fontSize: "12px",
                  height: "50px",
                  width: "200px",
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
                  fontSize: "12px",
                  height: "50px",
                  width: "200px",
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
                  fontSize: "12px",
                  height: "50px",
                  width: "200px",
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
                  fontSize: "12px",
                  height: "50px",
                  width: "200px",
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
