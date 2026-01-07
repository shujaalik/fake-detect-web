import { Box, Flex, Text, Image, Button, Link, Badge } from "@chakra-ui/react";
// import { FaExternalLinkAlt } from "react-icons/fa";

interface ProductHeaderProps {
    product: {
        title: string;
        image: string;
        asin: string;
        platform: string;
        productDesc?: string;
        url: string;
    };
    onAnalyzeAnother: () => void;
}

export default function ProductHeader({ product, onAnalyzeAnother }: ProductHeaderProps) {
    return (
        <Box bg="#171d2b" borderRadius="lg" p={6} mb={6} shadow="lg" border="1px solid" borderColor="whiteAlpha.100">
            <Flex direction={{ base: "column", md: "row" }} gap={6} align="start">
                <Box
                    flexShrink={0}
                    w={{ base: "full", md: "150px" }}
                    h={{ base: "auto", md: "150px" }}
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    borderRadius="md"
                    p={2}
                    bg="white" // Keep image bg white so product is visible
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image
                        src={product.image}
                        alt={product.title}
                        maxH="100%"
                        maxW="100%"
                        objectFit="contain"
                    />
                </Box>

                <Flex direction="column" gap={2} flex={1}>
                    <Text fontWeight="bold" fontSize="lg" lineHeight="short" color="white">
                        {product.title}
                    </Text>
                    <Text fontSize="sm" color="gray.400">
                        {product.productDesc || "Logitech G305 LIGHTSPEED Wireless Gaming Mouse, Hero 12K Sensor..."}
                    </Text>
                    <Flex gap={4} mt={1} align="center">
                        <Text fontSize="sm" color="gray.400">ASIN: <Text as="span" fontWeight="semibold" color="gray.200">{product.asin}</Text></Text>
                        <Text fontSize="sm" color="gray.400">Platform: <Badge colorPalette="orange">{product.platform}</Badge></Text>
                    </Flex>

                    <Flex gap={4} mt={4}>
                        <Button
                            size="sm"
                            colorPalette="orange"
                            bg="orange.500"
                            _hover={{ bg: "orange.600" }}
                            asChild
                        >
                            <Link href={product.url} target="_blank" _hover={{ textDecoration: 'none' }}>
                                View on {product.platform}
                            </Link>
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            color="blue.300"
                            borderColor="blue.500"
                            _hover={{ bg: "whiteAlpha.100" }}
                            onClick={onAnalyzeAnother}
                        >
                            Analyze Another Product
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}
