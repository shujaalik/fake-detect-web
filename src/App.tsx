import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultsDashboard from "./pages/ResultsDashboard";
// import Footer from "./components/custom/Footer"; // Assuming Footer is compatible or will be re-added if needed

function App() {
  return (
    <BrowserRouter>
      <Box backgroundColor="#0f111aff" color="white" minH="100vh">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/results/:id" element={<ResultsDashboard />} />
        </Routes>
        {/* <Footer /> */}
      </Box>
    </BrowserRouter>
  );
}

export default App;
