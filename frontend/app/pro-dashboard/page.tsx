import React, { useEffect, useState } from 'react';

const ProDashboardPage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const socket = new WebSocket('ws://your-websocket-url');

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const receivedData = JSON.parse(event.data);
            setData(receivedData);
        };

        socket.onerror = (event) => {
            console.error('WebSocket error:', event);
            setError('WebSocket error, please try again later.');
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <h1>Pro Dashboard</h1>
            {error && <p>{error}</p>}
            <div>
                <h2>Real-time Data:</h2>
                {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
            </div>
        </div>
    );
};

export default ProDashboardPage;