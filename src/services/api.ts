import axios from 'axios';

const API_URL = 'http://localhost:3000/scrapers'; // Pointing to the scrapers prefix

const transformBackendData = (backendData: any) => {
    const totalScraped = backendData.analysis?.totalScraped || 0;
    const fakeCount = backendData.analysis?.fakeCount || 0;
    const fakePercentage = totalScraped > 0 ? (fakeCount / totalScraped) * 100 : 0;
    
    // Derive Grade
    let grade = "F";
    const score = backendData.analysis?.trustScore || 0;
    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B";
    else if (score >= 70) grade = "C";
    else if (score >= 60) grade = "D";
    else grade = "F";

    // Parse Original Rating
    let originalRating = 0;
    if (backendData.product.rating) {
        const ratingVal = backendData.product.rating;
        if (typeof ratingVal === 'number') {
        originalRating = ratingVal;
        } else if (typeof ratingVal === 'string') {
        const match = ratingVal.match(/(\d+(\.\d+)?)/);
        if (match) originalRating = parseFloat(match[0]);
        }
    }

    // Calculate Adjusted Rating
    const adjustedRating = (originalRating * (score / 100));
    const ratingDiff = (adjustedRating - originalRating).toFixed(2);

    return {
        id: backendData.analysisId, // Capture ID
        product: {
            title: backendData.product.title,
            image: backendData.product.image,
            asin: "N/A", 
            platform: backendData.product.platform,
            productDesc: backendData.product.title,
            url: backendData.url || ""
        },
        analysis: {
            trustScore: score,
            authenticityGrade: grade,
            fakePercentage: parseFloat(fakePercentage.toFixed(2)),
            originalRating: originalRating,
            adjustedRating: parseFloat(adjustedRating.toFixed(2)),
            totalReviews: totalScraped,
            realReviews: backendData.analysis?.realCount || 0,
            fakeReviews: fakeCount,
            ratingDiff: parseFloat(ratingDiff)
        }
    };
}

export const api = {
  analyzeUrl: async (url: string) => {
    try {
      let effectiveUrl = url;
      if (!effectiveUrl.startsWith('http://') && !effectiveUrl.startsWith('https://')) {
          effectiveUrl = `https://${effectiveUrl}`;
      }

      const response = await axios.get(`${API_URL}/analyze`, {
        params: { url: effectiveUrl },
        timeout: 300000 
      });
      
      return transformBackendData(response.data);

    } catch (error) {
      console.error('Error analyzing URL:', error);
      throw error;
    }
  },

  getAnalysis: async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/analysis/${id}`);
        // The /analysis/:id endpoint returns the raw report object (same structure as analyzeUrl's backendData)
        // We inject the IDs so transform works consistently
        return transformBackendData({ ...response.data, analysisId: id });
    } catch (error) {
        console.error('Error fetching analysis:', error);
        throw error;
    }
  }
};
