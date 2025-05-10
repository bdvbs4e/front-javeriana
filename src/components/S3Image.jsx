import { useState, useEffect } from 'react';
import { fetchImageFromS3 } from '../utils/imageUtils';

export default function S3Image({ imageKey, alt, className, fallbackUrl }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const url = await fetchImageFromS3(imageKey);
        setImageUrl(url);
      } catch (error) {
        console.error('Error loading image:', error);
        setError(error);
        if (fallbackUrl) {
          setImageUrl(fallbackUrl);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (imageKey) {
      loadImage();
    }
  }, [imageKey, fallbackUrl]);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error && !imageUrl) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
        <div className="text-red-500">Error loading image</div>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
    />
  );
} 