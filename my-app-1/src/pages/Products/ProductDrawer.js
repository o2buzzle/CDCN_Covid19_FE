import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

const lists = [
  "OCR",
  "Installation Guide",
  "Tutorial",
  "Model Hub",
  "API Documentation",
];

function ProductDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => (event) => {
    setState(!state);
  };
  const list = () => (
    <Box role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {lists.map((text, index) => (
          <ListItem button key={text} onClick={() => console.log({ text })}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <React.Fragment>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer()}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer()}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
}

export default ProductDrawer;
