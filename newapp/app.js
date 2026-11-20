import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// 1. Home Component
function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <p>Welcome to the Home page!</p>
        </div>
    );
}

// 2. About Component
function About() {
    return (
        <div>
            <h2>About Page</h2>
            <p>Learn more about us on this page.</p>
        </div>
    );
}

// 3. Profile Component
function Profile() {
    return (
        <div>
            <h2>Profile Page</h2>
            <p>User Profile: Welcome back!</p>
        </div>
    );
}

function test_navigate() {
    return (
        <>
            <h2>This is the test navigate</h2>
        </>
    )
}


function MyComponent() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/profile');
    };

    return (
        <button
            onClick={handleClick}
            style={{
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px"
            }}
        >
            Go to Profile
        </button>
    );
}

// Main App Component with Router and Navigation
function App() {
    return (
        <BrowserRouter>
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <h1>My React App</h1>

                {/* Navigation Bar */}
                <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
                    <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>Home</Link>
                    <Link to="/about" style={{ textDecoration: "none", color: "#007bff" }}>About</Link>
                    <Link to="/profile" style={{ textDecoration: "none", color: "#007bff" }}>Profile</Link>
                </nav>

                {/* MyComponent Button Display */}
                <div style={{ marginBottom: "20px" }}>
                    <p>Programmatic Navigation Button:</p>
                    <MyComponent />
                </div>

                <hr style={{ margin: "20px 0" }} />

                {/* Route Views */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
