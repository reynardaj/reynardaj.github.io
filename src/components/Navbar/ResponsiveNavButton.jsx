import React from "react";
import { IconButton, Button, useMediaQuery } from "@mui/material";
import theme from "../../styles/theme.js";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const ResponsiveNavButton = ({ text, iconType, ...props }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Map icon types to their components
  const iconComponents = {
    home: HomeIcon,
    portfolio: BusinessCenterIcon,
  };

  // Get the icon component based on the iconType prop
  const IconComponent = iconComponents[iconType];

  return isSmallScreen ? (
    <IconButton {...props}>{IconComponent && <IconComponent />}</IconButton>
  ) : (
    <Button variant="text" {...props}>
      {text}
    </Button>
  );
};

export default ResponsiveNavButton;
