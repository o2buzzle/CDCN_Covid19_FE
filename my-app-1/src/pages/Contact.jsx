import { TextField } from "@mui/material";
import React from "react";

export default function Contact() {
  const [nameInput, setNameInput] = React.useState("");
  const onTextInput = (e) => {
    setNameInput(e.target.value);
    console.log(e.target.value);
  };
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
      <form
        style={{
          margin: "20px 0",
          width: "80%",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "12px 20px",
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          label="Full Name"
          value={nameInput}
          margin="normal"
          sx={{ padding: "10px" }}
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Full Name"
          value=""
          sx={{ padding: "10px" }}
        />
      </form>
    </div>
  );
}
