// src/HomePage.jsx
import { React } from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  useTheme,
  Button,
} from "@mui/material";

import reynardImage from "../assets/images/profile-img.webp";
import aboutImage from "../assets/images/home-img-2.webp";

const HomePage = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        my={4}
        sx={{
          minHeight: "60vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: { sm: 2, md: 16 },
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            padding: 2,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Hi, I'm Reynard
          </Typography>
          <Typography variant="body1" gutterBottom>
            As a dedicated computer science student with a passion for AI,
            machine learning, web design, web programming, and cryptocurrencies,
            I’m constantly exploring new technologies and honing my skills.
            Fluent in English and Mandarin, and a native Indonesian speaker, I
            bring a global perspective and a drive for innovation to all my
            projects. Dive into my portfolio to see how my skills and enthusiasm
            transform ideas into impactful solutions.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              size="large"
              href="/cv.pdf"
              download="CV_Reynard_Amadeus_Joshua.pdf"
              disableRipple
            >
              Download CV
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Reynard"
            src={reynardImage}
            sx={{
              width: { xs: 250, md: 350 },
              height: { xs: 250, md: 350 },
            }}
          />
        </Box>
      </Box>

      {/* About Me Section */}
      <Box
        my={4}
        sx={{
          minHeight: "60vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: { sm: 2, md: 16 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Avatar
          alt="About me"
          src={aboutImage}
          sx={{ width: { xs: 250, md: 350 }, height: { xs: 250, md: 350 } }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            padding: 2,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            About me
          </Typography>
          <Typography variant="body1" gutterBottom>
            I’m Reynard Amadeus Joshua, a computer science student fueled by a
            deep curiosity for technology and an eagerness to learn. My
            interests span AI, machine learning, web design, and web
            programming, as well as the evolving landscape of cryptocurrencies.
            My multilingual abilities—proficient in English and Mandarin, and
            native in Indonesian—allow me to collaborate effectively across
            diverse teams and projects.
            <br></br>
            <br></br>I thrive on tackling challenges and continually expanding
            my skill set. My commitment to learning new technologies and my
            drive for productivity ensure that I approach each project with both
            creativity and precision. Explore my portfolio to discover how my
            expertise and passion come together to create innovative and
            engaging solutions.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
