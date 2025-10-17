import { Box, Flex, Image, Text } from "@chakra-ui/react"
import Step01 from '../../assets/step-01.png'
import Step02 from '../../assets/step-02.png'
import Step03 from '../../assets/step-03.png'
import Line from '../../assets/line.png'

const HowItWorksSection = () => {
    return <Flex w="full" minH="70vh" justifyContent="center">
        <Flex mt="10vh" flexDirection="column" pb="20">
            <Box textAlign="center">
                <Text fontSize="5xl" fontWeight="semibold" fontFamily={"Lora"}>How It Works</Text>
                <Text>
                    Learn how to use our fake-review detector to make informed purchasing decisions.
                </Text>
            </Box>
            <Flex gap="5" mt="10" alignItems="center" justifyContent="center" position="relative" flexDirection={{ base: "column", lg: "row" }}>
                <Step1 />
                <Step2 />
                <Step3 />
                <Image
                    display={{ base: "none", lg: "block" }}
                    h="100px"
                    src={Line} alt="Decorative Line" position="absolute" zIndex={8} top="11" />
            </Flex>
        </Flex>
    </Flex>
}

const Step1 = () => {
    return <Flex gap="-5" direction="column" justifyContent={"center"} alignItems={"center"} maxW="300px">
        <Box h="auto" w="250px">
            <img src={Step01} alt="Step 1" />
        </Box>
        <Box px="5" textAlign={"center"}>
            <Text fontSize="4xl" fontWeight="bold" opacity={0.7}>01</Text>
            <Text>Find a product you want to buy on supported e-commerce platforms like Amazon, Best Buy, Daraz, and more.</Text>
        </Box>
    </Flex>
}
const Step2 = () => {
    return <Flex gap="-5" direction="column" justifyContent={"center"} alignItems={"center"} maxW="300px">
        <Box h="auto" w="250px">
            <img src={Step02} alt="Step 2" />
        </Box>
        <Box px="5" textAlign={"center"}>
            <Text fontSize="4xl" fontWeight="bold" opacity={0.7}>02</Text>
            <Text>Upload the product link to our platform and let our AI analyze it for potential fake reviews.</Text>
        </Box>
    </Flex>
}
const Step3 = () => {
    return <Flex gap="-5" direction="column" justifyContent={"center"} alignItems={"center"} maxW="300px">
        <Box h="auto" w="250px">
            <img src={Step03} alt="Step 3" />
        </Box>
        <Box px="5" textAlign={"center"}>
            <Text fontSize="4xl" fontWeight="bold" opacity={0.7}>03</Text>
            <Text>Review the analysis results and make an informed decision about your purchase.</Text>
        </Box>
    </Flex>
}

export default HowItWorksSection