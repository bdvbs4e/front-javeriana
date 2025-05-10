import { useState, useEffect } from 'react';

export default function TestConnection() {
  const [status, setStatus] = useState('Testing connection...');

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/test');
        const data = await response.json();
        setStatus(`Backend connected: ${data.message}`);
      } catch (error) {
        setStatus(`Connection failed: ${error.message}`);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <p className="text-lg">{status}</p>
    </div>
  );
} 