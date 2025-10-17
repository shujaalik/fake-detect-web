import { Box, Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react'
import { TypeAnimation } from "react-type-animation"
import Navbar from './Navbar'
import { LuLink } from 'react-icons/lu'

const HEADINGS = [
    "curious minds",
    1000,
    "conscious consumers",
    1000,
    "smart shoppers",
    1000,
]

const HeroSection = () => {
    return <>
        <Flex
            zIndex={9}
            position="relative"
            style={{
                backgroundImage: `radial-gradient(#edf2f710 1.2px, #00000000 1.2px)`,
                backgroundSize: `10px 10px`,
                borderBottom: "1px solid #edf2f720"
            }}
            w="full" minH="100vh" flexDirection={"column"}>
            <Navbar />
            <Flex direction={"column"} textAlign={"center"} alignItems="center" pt={"10vh"}>
                <Text fontSize="5xl" fontWeight="semibold">A fake-review detector</Text>
                <Text fontSize="5xl" fontWeight="semibold">for <Text color="primary" textTransform={"capitalize"} fontWeight={"bold"} display="inline">
                    <TypeAnimation
                        sequence={HEADINGS}
                        repeat={Infinity}
                    />
                </Text>
                </Text>
                <Text fontSize="5xl" fontWeight="semibold">who believe in <Text display="inline" fontWeight="bold">honest reviews!</Text></Text>
                <Text mt="5" fontSize="">Drop a product link to instantly check if its reviews are trustworthy.</Text>
                <Box maxW="700px" w="100%" mt="8">
                    <InputGroup
                        backgroundColor="#2D3748"
                        borderRadius="full"
                        endElement={<Button mr="1" colorPalette={"cyan"} borderRadius={"full"} px="3">Analyze</Button>}
                        startElement={<Box ml="3">
                            <LuLink />
                        </Box>}>
                        <Input size="xl" borderRadius="full" placeholder="Paste product link here" colorPalette={"cyan"} />
                    </InputGroup>
                </Box>
                <Box>
                    <Text mt="5" fontSize="sm" color="gray.400">Supported platforms: Amazon, Best Buy, Daraz, and many more</Text>
                </Box>
            </Flex>
        </Flex>
        <Box
            zIndex="8"
            position="absolute"
            bottom="0"
            left="0"
            width="100%"
            height="100%"
            margin="0"
            background="radial-gradient(circle at top, #edf2f720 0%, transparent 33%)"
        />
    </>
}

export default HeroSection