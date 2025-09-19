import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/pages/homepage/HomePage.tsx";
import MessagePage from "./components/pages/MessagePage";
import {ConfigProvider, App as AntApp} from "antd";
import NotFound from "./components/pages/NotFound.tsx";

const App: React.FC = () => {
    return (
        <ConfigProvider>
            <AntApp>
                <Router>
                    <Routes>
                        <Route path="/home" element={<HomePage/>}/>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/messages" element={<MessagePage/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Router>
            </AntApp>
        </ConfigProvider>
    );
};

export default App;
