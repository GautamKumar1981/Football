import React from 'react';
import './BetCard.css'; // Assuming there's a CSS file for styling

interface BetCardProps {
    betDetails: {
        id: string;
        teamA: string;
        teamB: string;
        amount: number;
        odds: number;
        status: 'won' | 'lost' | 'pending';
    };
}

const BetCard: React.FC<BetCardProps> = ({ betDetails }) => {
    return (
        <div className={`bet-card ${betDetails.status}`}>  
            <h3>Bet on {betDetails.teamA} vs {betDetails.teamB}</h3>
            <p>Amount: ${betDetails.amount}</p>
            <p>Odds: {betDetails.odds}</p>
            <p>Status: {betDetails.status.charAt(0).toUpperCase() + betDetails.status.slice(1)}</p>
        </div>
    );
};

export default BetCard;
