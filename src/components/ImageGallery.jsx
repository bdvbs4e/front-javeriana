import { useState, useEffect } from 'react';
import { listAvailableImages } from '../utils/imageUtils';
import S3Image from './S3Image';

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const imageList = await listAvailableImages();
        setImages(imageList);
      } catch (err) {
        console.error('Failed to fetch images:', err);
        setError('');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-2">Loading images...</p>
      </div>
    );
  }

  if (error) {
    return null;
  }

  if (images.length === 0) {
    return (
      <div className="p-4 bg-yellow-50 text-yellow-600 rounded-lg">
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Available Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <S3Image
              imageKey={image.key}
              alt={`Image ${image.key}`}
              className="w-full h-48 object-cover"
              fallbackUrl="https://via.placeholder.com/300x200?text=Image+Not+Available"
            />
            <div className="p-2 text-sm truncate">
              {image.key}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 