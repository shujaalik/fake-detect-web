import { Box, Flex, Text } from "@chakra-ui/react";

interface TrustGaugeProps {
    score: number;
}

export default function TrustGauge({ score }: TrustGaugeProps) {
    let color = "#ef4444"; // red-500
    if (score >= 50) color = "#eab308"; // yellow-500
    if (score >= 80) color = "#22c55e"; // green-500
    if (score === 100) color = "#06b6d4"; // cyan-500

    // SVG parameters
    const size = 200;
    const strokeWidth = 15;
    const center = size / 2;
    const radius = center - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <Box textAlign="center" py={10}>
            <Flex
                justify="center"
                align="center"
                direction="column"
                borderRadius="full"
                width="fit-content"
                margin="auto"
                position="relative"
            >
                <Box position="relative" w={`${size}px`} h={`${size}px`}>
                    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
                        <circle
                            cx={center}
                            cy={center}
                            r={radius}
                            fill="none"
                            stroke="white"
                            strokeOpacity="0.1"
                            strokeWidth={strokeWidth}
                        />
                        <circle
                            cx={center}
                            cy={center}
                            r={radius}
                            fill="none"
                            stroke={color}
                            strokeWidth={strokeWidth}
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
                        />
                    </svg>
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        w="full"
                        h="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text color="white" fontWeight="bold" fontSize="4xl">
                            {score}%
                        </Text>
                    </Box>
                </Box>
            </Flex>
            <Text mt={4} fontSize="2xl" fontWeight="bold" color={color}>
                {score >= 80 ? "Highly Authentic" : score >= 50 ? "Suspicious" : "Likely Fake"}
            </Text>
            <Text color="gray.400">Trust Score</Text>
        </Box>
    );
}
