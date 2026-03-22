import React from 'react';

const LiveBetFeed = () => {
    return (
        <div>
            <h1>Live Bet Feed</h1>
            <p>This is a showcase of live betting options.</p>
            {/* Example of betting controls */}
            <div>
                <h2>Available Bets</h2>
                <ul>
                    <li>
                        <strong>Match 1:</strong> Team A vs Team B
                        <button>Bet on Team A</button>
                        <button>Bet on Team B</button>
                    </li>
                    <li>
                        <strong>Match 2:</strong> Team C vs Team D
                        <button>Bet on Team C</button>
                        <button>Bet on Team D</button>
                    </li>
                    {/* Add more matches as needed */}
                </ul>
            </div>
        </div>
    );
};

export default LiveBetFeed;
