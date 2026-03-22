import { useEffect, useState } from 'react';

const useWebSocket = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => {
            console.log('WebSocket connection established');
            setIsConnected(true);
        };

        socket.onmessage = (event) => {
            const messageData = JSON.parse(event.data);
            setData(messageData);
        };

        socket.onerror = (event) => {
            console.error('WebSocket error observed:', event);
            setError(event);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
            setIsConnected(false);
        };

        // Cleanup function
        return () => {
            socket.close();
        };
    }, [url]);

    return { data, error, isConnected };
};

export default useWebSocket;