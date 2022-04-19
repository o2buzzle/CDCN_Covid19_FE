import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const productpages = [
  {
    name: "OCR",
    link: "/products",
  },
  {
    name: "Price",
    link: "/price",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Signup",
    link: "/signup",
  },
];

function Navbar() {
  const history = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    console.log("open products");
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" style={{ background: "#2E3B55" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
            style={{ display: "inline" }}
          >
            {/* <img src={logo} alt="" /> */}
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handleOpenNavMenu}
              id="products"
            >
              Products
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              {productpages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>

            {productpages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  history(page.link);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
