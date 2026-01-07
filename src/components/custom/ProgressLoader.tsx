
import { Box, Text, Progress, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_MESSAGES = [
    "Connecting to platform...",
    "Bypassing bot detection...",
    "Locating product reviews...",
    "Extracting review data...",
    "Analyzing sentiment patterns...",
    "Detecting fake patterns...",
    "Calculating trust score...",
    "Finalizing analysis report...",
];

export default function ProgressLoader() {
    const [progress, setProgress] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((old) => {
                if (old >= 95) return old;
                // Slow down as we get closer to 90%
                const increment = old < 30 ? 2 : old < 60 ? 1 : 0.2;
                return Math.min(old + increment, 95);
            });
        }, 100);

        const messageInterval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
        }, 3500);

        return () => {
            clearInterval(interval);
            clearInterval(messageInterval);
        };
    }, []);

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            w="100vw"
            h="100vh"
            bg="rgba(15, 17, 26, 0.95)"
            zIndex="9999"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backdropFilter="blur(10px)"
        >
            <VStack gap={6} w="full" maxW="md" px={6}>
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    bgGradient="to-r" gradientFrom="blue.400" gradientTo="purple.500"
                    bgClip="text"
                    textAlign="center"
                >
                    Analyzing Product
                </Text>

                <Box w="full" position="relative">
                    <Progress.Root value={progress} size="lg" colorPalette="blue" borderRadius="full">
                        <Progress.Track bg="whiteAlpha.100">
                            <Progress.Range borderRadius="full" />
                        </Progress.Track>
                    </Progress.Root>
                </Box>

                <Box h="24px" overflow="hidden" position="relative" w="full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={messageIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{ position: 'absolute', width: '100%', textAlign: 'center' }}
                        >
                            <Text color="gray.400" fontSize="md">
                                {LOADING_MESSAGES[messageIndex]}
                            </Text>
                        </motion.div>
                    </AnimatePresence>
                </Box>

                <Text fontSize="xs" color="gray.500" mt={4}>
                    This may take up to a minute depending on the number of reviews.
                </Text>
            </VStack>
        </Box>
    );
}
