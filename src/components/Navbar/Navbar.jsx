import React, { useState, useEffect } from "react";
import { Container, AppBar, Toolbar, Avatar, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logoImage from "../../assets/images/tanda_tangan-removebg.webp";
import theme from "../../styles/theme.js";
import ContactModal from "./ContactModal.jsx";
import ResponsiveNavButton from "./ResponsiveNavButton.jsx";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.surface.main,
        transition: "0.3s ease", // Smooth transition for elevation
      }}
      elevation={scrolling ? 4 : 0}
    >
      <Toolbar
        sx={{
          display: "flex", // Use flexbox for responsive layout
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
        }}
      >
        <Avatar alt="Reynard" src={logoImage} sx={{ width: 60, height: 60 }} />
        <Container sx={{ display: "flex", justifyContent: "center", flex: 1 }}>
          <ResponsiveNavButton
            variant="text"
            size="large"
            component={RouterLink} // Link component for navigation
            to="/" // Path for Home page
            text={"Home"}
            iconType={"home"}
            disableRipple
          >
            Home
          </ResponsiveNavButton>
          <ResponsiveNavButton
            variant="text"
            size="large"
            component={RouterLink} // Link component for navigation
            to="/portfolio" // Path for Portfolio page
            text={"Portfolio"}
            iconType={"portfolio"}
            disableRipple
          ></ResponsiveNavButton>
        </Container>
        <Button variant="contained" size="large" onClick={handleOpen}>
          Contact Me
        </Button>
        <ContactModal open={open} handleClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
