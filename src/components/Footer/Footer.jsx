import React from "react";
import { Box, Grid, Typography, IconButton, Link } from "@mui/material";
import {
  WhatsApp,
  MailOutline,
  LinkedIn,
  Instagram,
  GitHub,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      sx={{
        bgcolor: "primary.main",
        p: 5,
        height: 200,
        mt: 8,
      }}
    >
      <Grid item>
        <Box display="flex" flexDirection="column" alignItems="start">
          <Typography variant="footerHeading" sx={{ ml: 1 }}>
            Follow Me
          </Typography>
          <Box display="flex" gap={0}>
            <IconButton
              href="https://wa.me/6287836014481/?text=Hello%21%20Nice%20to%20meet%20you%21"
              target="_blank"
              rel="noopener noreferrer"
              color="onPrimary"
            >
              <WhatsApp />
            </IconButton>
            <IconButton
              href="mailto:reynard.joshua4949@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              color="onPrimary"
            >
              <MailOutline />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/reynard-amadeus-joshua"
              target="_blank"
              rel="noopener noreferrer"
              color="onPrimary"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/reynard_aj"
              target="_blank"
              rel="noopener noreferrer"
              color="onPrimary"
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://github.com/reynardaj"
              target="_blank"
              rel="noopener noreferrer"
              color="onPrimary"
            >
              <GitHub />
            </IconButton>
          </Box>
        </Box>
      </Grid>
      <Grid item sx={{ mx: "auto" }}></Grid>
      <Grid item>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="end"
          sx={{ gap: 1 }}
        >
          <Typography variant="footerHeading">Contact Me</Typography>

          <Typography variant="footerText">
            <Link
              href="mailto:reynard.joshua4949@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
            >
              reynard.joshua4949@gmail.com
            </Link>
          </Typography>
          <Typography variant="footerText">
            <Link
              href="https://wa.me/6287836014481/?text=Hello%21%20Nice%20to%20meet%20you%21"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
            >
              +6287836014481
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
