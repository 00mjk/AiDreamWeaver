import { useEffect } from "react";
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

import store from './store';
import { SIGNOUT } from "./actions/config";
import { loadUser } from "./actions/authAction";
import setAuthToken from "./utils/setAuthToken";

export default function App() {
    useEffect(() => {
        const token = localStorage.getItem('token');

        // Check for token in local storage when app first runs.
        if (token) {
            // If there is a token et axios header for all requests.
            setAuthToken(token)
        }

        // Try to fetch a user, if no token or invalid token we will get a 401 response from our API.
        store.dispatch(loadUser());

        // Log out from all tabs if they log out in one tab.
        window.addEventListener('storage', () => {
            if (!localStorage.token)
                store.dispatch({ type: SIGNOUT });
        })
    }, [])

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
        </div>
    );
}
