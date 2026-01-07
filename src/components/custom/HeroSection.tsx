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

interface HeroSectionProps {
    url: string;
    setUrl: (url: string) => void;
    onAnalyze: () => void;
    loading: boolean;
}

const HeroSection = ({ url, setUrl, onAnalyze, loading }: HeroSectionProps) => {
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
                <Text fontSize="5xl" fontWeight="semibold">for <Text
                    as="span"
                    style={{
                        background: "linear-gradient(90deg, rgba(38, 79, 225, 1) 0%, rgba(190, 82, 153, 1) 50%, rgba(38, 79, 225, 1) 98%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        display: "inline-block"
                    }}
                    textTransform={"capitalize"}
                    fontWeight={"bold"}
                >
                    <TypeAnimation
                        sequence={HEADINGS}
                        repeat={Infinity}
                        cursor={false}
                    />
                </Text>
                </Text>
                <Text fontSize="5xl" fontWeight="semibold">who believe in <Text display="inline" fontWeight="bold">honest reviews!</Text></Text>
                <Text mt="5" fontSize="">Drop a product link to instantly check if its reviews are trustworthy.</Text>
                <Box maxW="700px" w="100%" mt="8">
                    <InputGroup
                        backgroundColor="#171d2b"
                        borderRadius="full"
                        endElement={
                            <Button
                                mr={1}
                                backgroundColor="#194de7"
                                _hover={{ backgroundColor: "#163ed1" }}
                                color="white"
                                borderRadius="full"
                                px={6}
                                onClick={onAnalyze}
                                loading={loading}
                            >
                                Analyze!
                            </Button>
                        }
                        startElement={
                            <Box ml={3} color="gray.500">
                                <LuLink />
                            </Box>
                        }
                    >
                        <Input
                            size="xl"
                            borderRadius="full"
                            placeholder="Paste product link here"
                            colorPalette={"blue"}
                            color="white"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && onAnalyze()}
                            _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3182ce" }}
                        />
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
            background="radial-gradient(circle at top, #edf2f70b 0%, transparent 33%)"
        />
    </>
}

export default HeroSection