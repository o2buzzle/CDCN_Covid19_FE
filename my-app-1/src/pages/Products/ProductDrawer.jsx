import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { useNavigate } from "react-router-dom";

const lists = [
  { name: "OCR", path: "/" },
  { name: "Installation Guide", path: "/install" },
  { name: "Tutorial", path: "/tutorial" },
  { name: "Model Hub", path: "/model-hub" },
  { name: "API Documentation", path: "/api-document" },
];

function ProductDrawer() {
  const [state, setState] = React.useState(false);
  const nav = useNavigate();

  const toggleDrawer = () => (event) => {
    setState(!state);
  };
  const list = () => (
    <Box role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {lists.map((item) => (
          <ListItem
            button
            key={item.name}
            onClick={() => nav(`/products${item.path}`)}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
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
    </>
  );
}

export default ProductDrawer;
