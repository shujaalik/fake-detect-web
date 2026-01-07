import { Box, SimpleGrid, Icon, Text, Stack } from "@chakra-ui/react";
import { features } from "../../data/features";

const Feature = ({ title, text, icon }: { title: string; text: string; icon: any }) => {
    return (
        <Stack
            bg="whiteAlpha.100"
            p={8}
            rounded="xl"
            align="center"
            gap={4}
            _hover={{ bg: "whiteAlpha.200", transform: "translateY(-5px)" }}
            transition="all 0.3s"
        >
            <Icon as={icon} w={10} h={10} color="cyan.400" />
            <Text fontWeight="bold" fontSize="xl">
                {title}
            </Text>
            <Text color="gray.400" textAlign="center">
                {text}
            </Text>
        </Stack>
    );
};

export default function FeaturesSection() {
    return (
        <Box p={4} py={20}>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
                {features.map((feature, index) => (
                    <Feature
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        text={feature.description}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
}
