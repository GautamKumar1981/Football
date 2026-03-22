import React, { useEffect, useState } from 'react';

const LiveBetFeed = () => {
    const [bets, setBets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBets = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/live-bets');
                const data = await response.json();
                setBets(data);
            } catch (error) {
                console.error('Error fetching bets:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBets();
        const interval = setInterval(fetchBets, 5000); // Fetch every 5 seconds
        return () => clearInterval(interval);
    }, []);

    if (loading) return <div>Loading live bets...</div>;

    return (
        <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
            <h2>Live Bet Feed</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {bets.map(bet => (
                    <li key={bet.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                        <div><strong>{bet.eventName}</strong></div>
                        <div>Status: {bet.status}</div>
                        <div>Odds: {bet.odds}</div>
                        <div>Statistics: {bet.statistics}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LiveBetFeed;