import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/custom/HeroSection";
import ProgressLoader from "../components/custom/ProgressLoader";
import { api } from "../services/api";

export default function LandingPage() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleAnalyze = async () => {
        if (!url) return;
        setLoading(true);
        try {
            const data = await api.analyzeUrl(url);
            navigate(`/results/${data.id}`, { state: { data } }); // Pass data in state to avoid re-fetching immediatelyurl } });
        } catch (error: any) {
            console.error("Analysis failed", error);
            // Ideally use a toast here. For now alert or just console log.
            // Since we are adding toaster might be too much for this step, let's stick to simple alert via native or chakra text if possible.
            // But Chakra v3 toasters are nice. Let's just use alert for panic or console.
            // Actually, let's just let it fail silently in UI but log it? No user needs feedback.
            // Let's add a simple error state to show below input.
            alert("Analysis failed. Please check the URL and try again.\n" + (error.response?.data?.error || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box bg="#0f111a" minH="100vh" color="white" fontFamily="Poppins">
            {loading && <ProgressLoader />}
            <HeroSection
                url={url}
                setUrl={setUrl}
                onAnalyze={handleAnalyze}
                loading={loading}
            />
        </Box>
    );
}
