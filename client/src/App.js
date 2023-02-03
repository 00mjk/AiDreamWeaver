import { useState } from "react";
import { Route, Routes, NavLink, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home'
import CreatePage from './pages/Create'
import EditPage from './pages/Edit'
import LoginPage from './pages/Login'
import PricingPage from './pages/Pricing'
import PrivacyPage from './pages/Privacy'
import RequestHelpPage from './pages/Request'
import TermsPage from './pages/Terms'
import JobsPage from './pages/Jobs'

import Header from './components/Header';

export default function App() {
    const [dropDownListState, setDropDownList] = useState(false)

    return (
        <div className='App'>
            <Header />
            <div className='router'>
                <Routes>
                    <Route exact path="/" element={<HomePage />}></Route>
                    <Route exact path="/login" element={<LoginPage />}></Route>
                    <Route exact path="/privacy" element={<PrivacyPage />}></Route>
                    <Route exact path="/pricing" element={<PricingPage />}></Route>
                    <Route exact path="/requesthelp" element={<RequestHelpPage />}></Route>
                    <Route exact path="/jobs" element={<JobsPage />}></Route>
                    <Route exact path="/terms-of-service" element={<TermsPage />}></Route>
                    <Route exact path="/create" element={<CreatePage />}></Route>
                    <Route exact path="/edit" element={<EditPage />}></Route>
                </Routes>
            </div>
            <footer>

            </footer>
        </div>
    );
}
