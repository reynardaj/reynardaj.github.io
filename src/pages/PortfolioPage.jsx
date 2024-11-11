import React from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  Grid,
  useTheme,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

import mainProjectImage from "../assets/images/asphalt-clone-img.webp";
import sideProjectImage1 from "../assets/images/smoke-detector-img.webp";
import sideProjectImage2 from "../assets/images/object-detection-img.webp";
import sideProjectImage3 from "../assets/images/invitation-website-img.webp";
import sideProjectImage4 from "../assets/images/arlene-invitation.webp";
import sideProjectImage5 from "../assets/images/rsvp-scanner.png";

var githubLink = "https://github.com/reynardaj/Asphalt-Website-Clone.git";

const cardData = [
  {
    image: sideProjectImage1,
    title: "Smoke & Vape detection",
    description:
      'The "Smoke Detector for Smokers and Vapers" integrates computer vision, MQ-135 gas sensors, and temperature sensors to accurately detect smoking and vaping.',
    link: "https://drive.google.com/drive/folders/11Nq5UOONzmzpNLdcxjYL8VS8FrirokO5?usp=drive_link",
  },
  {
    image: sideProjectImage2,
    title: "Object detection",
    description:
      "Object detection website for image using YOLOv2 and Streamlit.",
    link: "https://github.com/reynardaj/image-object-detection.git",
  },
  {
    image: sideProjectImage3,
    title: "Sweet seventeen invitation website",
    description:
      "A mobile first design, functional site built with Elementor and various plugins.",
    link: "https://elixir-f5bd32.ingress-earth.ewp.live/",
  },
  {
    image: sideProjectImage4,
    title: "Sweet seventeen invitation website",
    description:
      "A mobile first design, functional site built with vite, react, tailwind, typescript, nodejs.",
    link: "https://arlene.freewebhostmost.com/",
  },
  {
    image: sideProjectImage5,
    title: "RSVP Scanner",
    description:
      "Guest registration scanner, built with React, Node.js, and Express.",
    link: "https://rsvp-qr-scanner-ts.vercel.app/",
  },
];

const PortfolioPage = () => {
  const theme = useTheme(); // Access the theme
  return (
    <Container maxWidth="lg">
      {/* Main Project Section */}
      <Box
        my={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          gap: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Asphalt Website Clone
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Showcasing precision and style in every layer
          </Typography>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Page"
            sx={{ mt: 2 }}
          >
            GitHub Page
          </Button>
        </Box>
        <Card
          sx={{
            boxShadow: 3,
            maxWidth: "100%",
            margin: "0 auto",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={mainProjectImage}
            alt="Main Project Image"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Card>
      </Box>
      {/* Side Projects Section */}
      <Box my={4} sx={{ minHeight: "80vh" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ my: 5 }}
        >
          Side Projects
        </Typography>
        <Grid container spacing={4}>
          {cardData.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={card.image}
                  alt={card.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    startIcon={<LinkIcon />}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Side Project Link"
                    sx={{ my: 1, ml: 1 }}
                  >
                    Project Link
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PortfolioPage;
