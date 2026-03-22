import React from 'react';

const Bankroll = ({ balance }) => {
    return (
        <div className="bankroll-status">
            <h2>Bankroll Status</h2>
            <p>Balance: ${balance.toFixed(2)}</p>
        </div>
    );
};

export default Bankroll;