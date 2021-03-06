import React from 'react';
import './firebaseInit.js'
import Main from './Main'
import Account from './Account';
import Home from './Home';
import Auth from './Auth';
import SensorData from './SensorData'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";



const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}>
                <Route path="" element={<Home />} />
                <Route path="account" element={<Account />} />
                <Route path="auth" element={<Auth />} />
                <Route path="sensor-data" element={<SensorData />} />
            </Route>
        </Routes>
    </BrowserRouter>

)

export default App;
