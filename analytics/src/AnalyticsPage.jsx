import React, { useEffect, useState } from 'react';

const AnalyticsPage = () => {
    const [menuCount, setMenuCount] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch menu count
                const menuResponse = await fetch('http://localhost:5000/menu');
                const menuData = await menuResponse.json();
                setMenuCount(menuData.length);

                // Fetch review count
                const reviewResponse = await fetch('http://localhost:5000/reviews');
                const reviewData = await reviewResponse.json();
                setReviewCount(reviewData.length);

                // Fetch user count
                const userResponse = await fetch('http://localhost:5000/users', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Use JWT token if required
                    },
                });
                const userData = await userResponse.json();
                setUserCount(userData.length);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading analytics...</div>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Restaurant Analytics</h1>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <div style={cardStyle}>
                    <h2>Menu Items</h2>
                    <p>{menuCount}</p>
                </div>
                <div style={cardStyle}>
                    <h2>Reviews</h2>
                    <p>{reviewCount}</p>
                </div>
                <div style={cardStyle}>
                    <h2>Users</h2>
                    <p>{userCount}</p>
                </div>
            </div>
        </div>
    );
};

const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    width: '150px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

export default AnalyticsPage;
