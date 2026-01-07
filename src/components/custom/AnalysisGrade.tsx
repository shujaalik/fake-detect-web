import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";

interface AnalysisGradeProps {
    analysis: {
        authenticityGrade: string;
        fakePercentage: number;
        originalRating: number;
        adjustedRating: number;
    };
}

export default function AnalysisGrade({ analysis }: AnalysisGradeProps) {
    const getGradeColor = (grade: string) => {
        switch (grade) {
            case "A": return "green.900";
            case "B": return "blue.900";
            case "C": return "yellow.900";
            case "D": return "orange.900";
            case "F": return "red.900";
            default: return "gray.900";
        }
    };

    const getGradeTextColor = (grade: string) => {
        switch (grade) {
            case "A": return "green.200";
            case "B": return "blue.200";
            case "C": return "yellow.200";
            case "D": return "orange.200";
            case "F": return "red.200";
            default: return "gray.200";
        }
    };

    return (
        <Box bg="#171d2b" borderRadius="lg" p={6} mb={6} shadow="lg" border="1px solid" borderColor="whiteAlpha.100">
            <Text fontSize="lg" fontWeight="bold" mb={4} color="white">Review Analysis Results</Text>

            <Flex direction={{ base: "column", md: "row" }} gap={6} align="center">
                {/* Grade Box */}
                <Box
                    bg={getGradeColor(analysis.authenticityGrade)}
                    p={8}
                    borderRadius="md"
                    textAlign="center"
                    minW="200px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                >
                    <Text fontSize="6xl" fontWeight="bold" lineHeight="1" color={getGradeTextColor(analysis.authenticityGrade)}>
                        {analysis.authenticityGrade}
                    </Text>
                    <Text fontSize="sm" color="gray.300" mt={2} fontWeight="medium">Authenticity Grade</Text>
                </Box>

                {/* Stats Grid */}
                <Grid templateColumns="repeat(3, 1fr)" gap={4} flex={1} alignItems="center">
                    <GridItem textAlign="center">
                        <Text fontSize="3xl" fontWeight="bold" color="white">{analysis.fakePercentage}%</Text>
                        <Text fontSize="sm" color="gray.400">Fake Reviews</Text>
                    </GridItem>
                    <GridItem textAlign="center" borderLeft="1px solid" borderRight="1px solid" borderColor="whiteAlpha.200">
                        <Text fontSize="3xl" fontWeight="bold" color="white">{analysis.originalRating}</Text>
                        <Text fontSize="sm" color="gray.400">Original Rating</Text>
                    </GridItem>
                    <GridItem textAlign="center">
                        <Text fontSize="3xl" fontWeight="bold" color={analysis.adjustedRating < 3 ? "red.400" : "green.400"}>
                            {analysis.adjustedRating}
                        </Text>
                        <Text fontSize="sm" color="gray.400">Adjusted Rating</Text>
                    </GridItem>
                </Grid>
            </Flex>

            <Box mt={6} bg="whiteAlpha.50" p={4} borderRadius="md" borderLeft="4px solid" borderColor="blue.400">
                <Text fontSize="sm" color="gray.300">
                    <strong>Analysis Summary:</strong> Analysis of reviews suggests a high concentration of suspicious patterns.
                    The global patterns indicate extremely high 5-star concentration ({analysis.fakePercentage > 50 ? "Suspicious" : "Normal"})
                    and discrepancy between verified and unverified purchases.
                </Text>
            </Box>
        </Box>
    );
}
