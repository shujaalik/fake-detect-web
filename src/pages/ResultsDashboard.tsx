import { Box, Container, VStack, Text, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/custom/Navbar";
import ProductHeader from "../components/custom/ProductHeader";
import AnalysisGrade from "../components/custom/AnalysisGrade";
import DetailedStats from "../components/custom/DetailedStats";
import ProgressLoader from "../components/custom/ProgressLoader";
import { api } from "../services/api";

export default function ResultsDashboard() {
    const { state } = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();

    // Initial state from navigation or null
    const [data, setData] = useState<any>(state?.data || null);
    const [loading, setLoading] = useState(!state?.data);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // If we already have data (from navigation state), don't fetch.
        // Confirm ID matches if possible, or just trust state (optimistic).
        if (state?.data) {
            setData(state.data);
            setLoading(false);
            return;
        }

        // If no data and no ID, go back home
        if (!id) {
            navigate("/");
            return;
        }

        // Fetch by ID
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await api.getAnalysis(id);
                setData(result);
            } catch (err) {
                console.error("Failed to load analysis", err);
                setError("Analysis not found or failed to load.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, state, navigate]);

    if (loading) return <ProgressLoader />;
    if (error) {
        return (
            <Box bg="#f8f9fa" minH="100vh" fontFamily="Poppins">
                <Navbar />
                <Box w="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
                    <Container maxW="container.xl" pt={10} textAlign="center">
                        <Text fontSize="xl" color="red.500" mb={4}>{error}</Text>
                        <Button onClick={() => navigate("/")} colorPalette="blue">Go Home</Button>
                    </Container>
                </Box>
            </Box>
        );
    }
    if (!data) {
        return (
            <Box bg="#f8f9fa" minH="100vh" fontFamily="Poppins">
                <Navbar />
                <Box w="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
                    <Container maxW="container.xl" pt={10} textAlign="center">
                        <Text fontSize="xl" color="gray.600" mb={4}>No analysis data available.</Text>
                        <Button onClick={() => navigate("/")} colorPalette="blue">Go Home</Button>
                    </Container>
                </Box>
            </Box>
        );
    }

    const { product, analysis } = data;
    const shareUrl = window.location.origin + "/results/" + (data.id || id);

    return (
        <Box
            bg="#0f111a"
            minH="100vh"
            fontFamily="Poppins"
            color="white"
            style={{
                backgroundImage: `radial-gradient(#edf2f710 1.2px, #00000000 1.2px)`,
                backgroundSize: `10px 10px`,
            }}
        >
            <Navbar />
            <Box w="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
                <Container maxW="container.lg" pt={10} pb={20}>
                    <VStack gap={6} align="stretch">
                        <Box textAlign="center">
                            <ProductHeader
                                product={product}
                                onAnalyzeAnother={() => navigate("/")}
                            />
                        </Box>

                        <AnalysisGrade analysis={analysis} />

                        <DetailedStats analysis={analysis} />

                        {/* Share Link Section */}
                        <Box bg="#171d2b" borderRadius="lg" p={6} shadow="lg" textAlign="center" border="1px solid" borderColor="whiteAlpha.100">
                            <Text fontSize="sm" fontWeight="bold" mb={2} color="gray.300">Share This Analysis</Text>
                            <Box bg="blackAlpha.300" p={2} borderRadius="md" display="flex" gap={2} maxW="md" mx="auto" border="1px solid" borderColor="whiteAlpha.200">
                                <Text fontSize="sm" color="blue.300" flex={1} truncate>
                                    {shareUrl}
                                </Text>
                                <Button size="xs" colorPalette="blue" onClick={() => navigator.clipboard.writeText(shareUrl)}>Copy Link</Button>
                            </Box>
                        </Box>

                        <Flex justify="center">
                            <Button variant="ghost" color="blue.400" _hover={{ bg: "whiteAlpha.100", color: "blue.300" }} mt={4} onClick={() => navigate("/")} w="fit-content">
                                &larr; Analyze new product
                            </Button>
                        </Flex>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
}
