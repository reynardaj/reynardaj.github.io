import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Box } from "@mui/material";

// Component to handle scrolling to the top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // Runs every time the pathname changes

  return null; // This component does not render anything
};

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />
        <ScrollToTop />
        <Box sx={{ pt: "80px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </Box>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
