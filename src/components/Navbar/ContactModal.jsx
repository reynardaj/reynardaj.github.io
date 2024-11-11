import React, { useState } from "react";
import { Button, Modal, Box, Typography, Link, Divider } from "@mui/material";
import {
  Email,
  LinkedIn,
  GitHub,
  WhatsApp,
  Instagram,
} from "@mui/icons-material";

const contacts = [
  {
    name: "WhatsApp",
    link: "https://wa.me/6287836014481/?text=Hello%21%20Nice%20to%20meet%20you%21",
    icon: <WhatsApp />,
  },
  {
    name: "Email",
    link: "mailto:reynard.joshua4949@gmail.com",
    icon: <Email />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/reynard_aj",
    icon: <Instagram />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/reynard-amadeus-joshua",
    icon: <LinkedIn />,
  },
  { name: "GitHub", link: "https://github.com/reynardaj", icon: <GitHub /> },
];

const ContactModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Contact Me
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {contacts.map((contact) => (
            <Link
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              variant="body1"
              color="text.primary"
              underline="hover"
              sx={{ display: "flex", alignItems: "center", gap: 1, height: 40 }}
            >
              {contact.icon}
              {contact.name}
            </Link>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ContactModal;
