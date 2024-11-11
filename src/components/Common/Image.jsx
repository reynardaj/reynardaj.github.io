// src/components/common/Image.jsx

import React from "react";
import { Box } from "@mui/material";

const Image = ({ src, alt, width, height, ...props }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: width || "100%",
        height: height || "auto",
        objectFit: "cover",
        ...props.sx,
      }}
      {...props}
    />
  );
};

export default Image;
