const API_URL = 'http://localhost:5000'; // Ajusta esto según tu configuración

export const fetchImageFromS3 = async (imageKey) => {
    try {
        console.log(`Fetching image: ${imageKey}`);
        const response = await fetch(`${API_URL}/api/images/${encodeURIComponent(imageKey)}`);
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch image');
        }
        
        const data = await response.json();
        if (!data.success) {
            throw new Error(data.error || 'Failed to fetch image');
        }

        // Crear una URL de datos para la imagen
        return `data:${data.contentType};base64,${data.imageData}`;
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error;
    }
};

export const listAvailableImages = async () => {
    try {
        const response = await fetch(`${API_URL}/api/images`);
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to list images');
        }
        
        const data = await response.json();
        if (!data.success) {
            throw new Error(data.error || 'Failed to list images');
        }

        return data.images;
    } catch (error) {
        console.error('Error listing images:', error);
        throw error;
    }
}; 