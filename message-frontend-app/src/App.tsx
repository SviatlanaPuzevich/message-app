import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/homepage/HomePage.tsx";
import MessagePage from "./components/pages/MessagePage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/messages" element={<MessagePage />} />
            </Routes>
        </Router>
    );
};

export default App;
