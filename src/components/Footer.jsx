import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";

const footers = [
  {
    title: "About ONER",
    description: [
      { name: "Team", link: "/about" },
      { name: "Contact us", link: "/contact" },
    ],
  },
  {
    title: "Features",
    description: [
      { name: "OCR", link: "/product" },
      { name: "NER", link: "/product" },
      { name: "API documentation", link: "/product/api-document" },
    ],
  },
  {
    title: "Resources",
    description: [{ name: "Self-hosting guide", link: "/product/tutorial" }],
  },
  // {
  //   title: "Legal",
  //   description: ["Privacy policy", "Terms of use"],
  // },
];
export default function Footer() {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item.name}>
                  <Link
                    style={{ textDecoration: "none" }}
                    href={item.link}
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
