import { Box } from "@chakra-ui/react"
import HeroSection from "./components/custom/HeroSection"
import Footer from "./components/custom/Footer"
import HowItWorksSection from "./components/custom/HowItWorksSection"

function App() {

  return (
    <Box backgroundColor="#0f111aff" color="white" px="5">
      <HeroSection />
      <HowItWorksSection />
      <Footer />
    </Box>
  )
}

export default App
