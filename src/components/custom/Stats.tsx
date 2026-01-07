import { SimpleGrid, Box, Text, Flex } from "@chakra-ui/react";

interface StatsProps {
    realCount: number;
    fakeCount: number;
}

export default function Stats({ realCount, fakeCount }: StatsProps) {
    const total = realCount + fakeCount;
    const realPercentage = total === 0 ? 0 : Math.round((realCount / total) * 100);
    const fakePercentage = total === 0 ? 0 : Math.round((fakeCount / total) * 100);

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full" maxW="container.md" mx="auto">
            <Box p={6} bg="whiteAlpha.50" rounded="xl" borderLeft="4px solid" borderColor="green.400">
                <Flex direction="column">
                    <Text color="gray.400" fontSize="sm">Real Reviews</Text>
                    <Text fontSize="4xl" color="white" fontWeight="bold">{realCount}</Text>
                    <Text color="green.400" fontSize="sm">{realPercentage}% of total</Text>
                </Flex>
            </Box>
            <Box p={6} bg="whiteAlpha.50" rounded="xl" borderLeft="4px solid" borderColor="red.400">
                <Flex direction="column">
                    <Text color="gray.400" fontSize="sm">Fake Reviews</Text>
                    <Text fontSize="4xl" color="white" fontWeight="bold">{fakeCount}</Text>
                    <Text color="red.400" fontSize="sm">{fakePercentage}% of total</Text>
                </Flex>
            </Box>
        </SimpleGrid>
    );
}
