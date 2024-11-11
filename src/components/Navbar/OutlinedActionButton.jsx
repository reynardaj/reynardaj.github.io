import React from "react";
import { Button } from "@mui/material";

const OutlinedActionButton = ({ onClick, children }) => (
  <Button variant="outlined" size="large" onClick={onClick}>
    {children}
  </Button>
);

export default OutlinedActionButton;
