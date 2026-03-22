// BetNotificationCenter.tsx

import React, { useEffect, useState } from 'react';

const BetNotificationCenter: React.FC = () => {
    const [notifications, setNotifications] = useState<string[]>([]);

    useEffect(() => {
        const socket = new WebSocket('ws://your-websocket-url');

        socket.onmessage = (event) => {
            const newNotification = event.data;
            setNotifications((prev) => [...prev, newNotification]);
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <h2>Real-time Bet Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
};

export default BetNotificationCenter;