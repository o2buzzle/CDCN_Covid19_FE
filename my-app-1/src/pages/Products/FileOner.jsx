/* eslint-disable */
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import React, { useState } from "react";

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
  const fileInput = React.useRef();
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
  const handleOCRSubmission = () => {
    if (selectedFile) console.log(selectedFile);
    // let formData = new FormData();
    formData.append("file", selectedFile);
    fetch(
      "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed",
      {
        method: "GET",
        //   body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        let tempResult = "";
        // eslint-disable-next-line no-confusing-arrow, no-return-assign
        result.map(
          (i) =>
            // eslint-disable-next-line prettier/prettier
            //   i.confidence > 80 ? (tempResult += i.text) : tempResult
            (tempResult += i.id)
        );
        console.log(tempResult);
        setOutputOCR(tempResult);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleNERSubmission = () => {
    if (inputOCR) {
      setInputSubmitted(true);
      setOutputNER("abc");
      //   fetch("http://oner.buzzle.works:8000/NER/file_upload", {
      //     method: "POST",
      //     body: inputOCR,
      //   })
      //     .then((response) => response.json())
      //     .then((result) => {
      //       setOutputNER(result);
      //     })
      //     .catch((error) => {
      //       console.error("Error:", error);
      //     });
      console.log("NER");
    }
  };
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="baseline">
      <Grid item xs={4}>
        <TextField
          multiline
          rows="5"
          label="Input"
          fullWidth
          value={inputOCR}
          onChange={onTextInput}
        />
        {/* <input type="text" id="fname" name="fname" /> */}
        <Button onClick={() => fileInput.current.click()}>Upload</Button>
        <input
          ref={fileInput}
          type="file"
          name="file"
          style={{ display: "none" }}
          onChange={handleSelectedFile}
        />
        {isFilePicked ? (
          <div>
            <p />
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}

        <button onClick={handleOCRSubmission}>Submit OCR</button>
        <button onClick={handleNERSubmission}>Submit NER</button>
        <button onClick={handleClearOutput}>Clear output</button>
      </Grid>
      <Grid item xs={4}>
        {/* <TextField
          label="Output"
          multiline
          rows="5"
          fullWidth
          value={outputOCR}
        >
          <p> áđâsđâsđâsađáád</p>
        </TextField> */}
        <Box
          style={{
            border: "2px solid green",
            wordWrap: "break-word",
            maxWidth: "900px",
            padding: "18px 18px",
          }}
        >
          {inputSubmitted ? (
            <Grid item xs={2} sm={4} md={8}>
              <Box
                style={{
                  border: "1px solid grey",
                  wordWrap: "break-word",
                  maxWidth: "900px",
                  padding: "18px 18px",
                  display: "flex",
                }}
              >
                {outputNER.map((i) => (
                  <Switch condition={i.predictions.substring(2)}>
                    <Case value={"PATIENT_ID"}>
                      <span style={{ color: patient_id }}>
                        {" "}
                        {i.tokens.replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"NAME"}>
                      <span style={{ color: name }}>
                        {" "}
                        {i.tokens.replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"AGE"}>
                      <span style={{ color: age }}>
                        {" "}
                        {i.tokens.replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"GENDER"}>
                      <span style={{ color: gender }}>
                        {" "}
                        {i.tokens.replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"JOB"}>
                      <span style={{ color: job }}>
                        {" "}
                        {i.tokens.replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"ORGANIZATION"}>
                      <span style={{ color: organization }}>
                        {" "}
                        {i.tokens.replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"LOCATION"}>
                      <span style={{ color: location }}>
                        {" "}
                        {i.tokens.replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"DATE"}>
                      <span style={{ color: date }}>
                        {" "}
                        {i.tokens.replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"SYMTOM_AND_DISEASE"}>
                      <span style={{ color: symtom_and_disease }}>
                        {" "}
                        {i.tokens.replace("_", " ")}
                      </span>
                    </Case>
                    <Case value={"TRANSPORTATION"}>
                      <span style={{ color: transportation }}>
                        {" "}
                        {i.tokens.replace("_", " ")}
                      </span>
                    </Case>
                    <Default>
                      <span style={{ color: "black" }}>
                        {" "}
                        {i.tokens[0] === "<" ? null : i.tokens}
                      </span>
                    </Default>
                  </Switch>
                ))}
              </Box>
            </Grid>
          ) : (
            <div>Chưa có kết quả</div>
          )}
        </Box>
      </Grid>
      <Grid item>
        <Box
          sx={{ width: "100%", height: 670, maxWidth: 360, bgcolor: "white" }}
        >
          <List disablePadding={true}>
            <ListItem>
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
            <ListItem>
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
            <ListItem>
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
            <ListItem>
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
            <ListItem>
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
            <ListItem>
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
            <ListItem>
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
            <ListItem>
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
            <ListItem>
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
            <ListItem>
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
