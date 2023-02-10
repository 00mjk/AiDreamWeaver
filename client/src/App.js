import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { amber, grey } from '@mui/material/colors';

import './App.css';

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from './pages/Homepage'
import CreatePage from './pages/CreatePage'
import MockupPage from './pages/MockupPage'
import SuperResPage from './pages/SuperResPage'

import Navbar from './components/Navbar';

import store from './store';
import { SIGNOUT } from "./actions/config";
import { loadUser } from "./actions/authAction";
import setAuthToken from "./utils/setAuthToken";
import { bgColor } from "./stylesheets/colors";

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            ...amber,
            ...(mode === 'dark' && {
                main: amber[300],
            }),
        },
        ...(mode === 'dark' && {
            background: {
                default: bgColor,
                paper: bgColor,
            },
        }),
        text: {
            ...(mode === 'light'
                ? {
                    primary: grey[900],
                    secondary: grey[800],
                }
                : {
                    primary: '#fff',
                    secondary: grey[500],
                }),
        },
    },
});

const darkModeTheme = createTheme(getDesignTokens('dark'));

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
        <ThemeProvider theme={darkModeTheme}>
            <div className='App'>
                <Navbar />
                <div className='router'>
                    <Routes>
                        <Route exact path="/" element={<HomePage />}></Route>
                        <Route exact path="/search/:q" element={<HomePage />}></Route>
                        <Route exact path="/signin" element={<SignIn />}></Route>
                        <Route exact path="/signup" element={<SignUp />}></Route>
                        <Route exact path="/create" element={<CreatePage />}></Route>
                        <Route exact path="/mockup" element={<MockupPage />}></Route>
                        <Route exact path="/super_resolution" element={<SuperResPage />}></Route>
                    </Routes>
                </div>
            </div>
        </ThemeProvider>
    );
}
