import { Box, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

interface DetailedStatsProps {
    analysis: {
        totalReviews: number;
        realReviews: number;
        fakeReviews: number;
        ratingDiff: number;
    };
}

export default function DetailedStats({ analysis }: DetailedStatsProps) {
    return (
        <Box bg="#171d2b" borderRadius="lg" p={6} shadow="lg" border="1px solid" borderColor="whiteAlpha.100">
            <Text fontSize="lg" fontWeight="bold" mb={4} color="white">Review Statistics</Text>

            <Box bg="blue.900" p={4} borderRadius="md" mb={6} border="1px solid" borderColor="blue.800">
                <Flex gap={3}>
                    <Box color="blue.300" mt={1}>
                        <FaInfoCircle />
                    </Box>
                    <Box>
                        <Text fontSize="sm" fontWeight="bold" color="blue.200" mb={1}>About Review Data Collection</Text>
                        <Text fontSize="xs" color="blue.300" lineHeight="tall">
                            We extract as much review data as the platform makes available at the time of analysis.
                            The amount may vary due to rate limiting or regional restrictions.
                        </Text>
                    </Box>
                </Flex>
            </Box>

            <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={4}>
                <GridItem bg="whiteAlpha.50" p={4} borderRadius="md" textAlign="center" display="flex" flexDirection="column" justifyContent="center">
                    <Text fontSize="2xl" fontWeight="bold" color="blue.300">{analysis.totalReviews}</Text>
                    <Text fontSize="xs" color="gray.400">Reviews Analyzed</Text>
                </GridItem>
                <GridItem bg="green.900" p={4} borderRadius="md" textAlign="center" display="flex" flexDirection="column" justifyContent="center" border="1px solid" borderColor="green.800">
                    <Text fontSize="2xl" fontWeight="bold" color="green.300">{analysis.realReviews}</Text>
                    <Text fontSize="xs" color="gray.400">Genuine Reviews</Text>
                </GridItem>
                <GridItem bg="red.900" p={4} borderRadius="md" textAlign="center" display="flex" flexDirection="column" justifyContent="center" border="1px solid" borderColor="red.800">
                    <Text fontSize="2xl" fontWeight="bold" color="red.300">{analysis.fakeReviews}</Text>
                    <Text fontSize="xs" color="gray.400">Fake Reviews</Text>
                </GridItem>
                <GridItem bg="whiteAlpha.100" p={4} borderRadius="md" textAlign="center" display="flex" flexDirection="column" justifyContent="center">
                    <Text fontSize="2xl" fontWeight="bold" color="gray.200">{analysis.ratingDiff}</Text>
                    <Text fontSize="xs" color="gray.400">Rating Difference</Text>
                </GridItem>
            </Grid>
        </Box>
    );
}
