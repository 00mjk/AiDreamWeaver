import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useGoogleLogin } from '@react-oauth/google';

import { Button, Box, Typography, Modal, TextField, Alert } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoneyIcon from '@mui/icons-material/Money';
import HelpIcon from '@mui/icons-material/Help';
import TwitterIcon from '@mui/icons-material/Twitter';
import QuizIcon from '@mui/icons-material/Quiz';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import { signin, signup, signout } from "../actions/authAction"

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

function Header() {
    const navigate = useNavigate()

    // Auth Form Data
    const [formData, setFormData] = useState(initialState);

    // Flags
    const [menuOpened, setMenuOpened] = useState(false);        // Menu state
    const [modalOpened, setModalOpened] = useState(false);      // Authenticate modal open state
    const [isSignUp, setIsSignUp] = useState(false);            // Auth form state (true: register, false: login)

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            dispatch(signup(formData)).then(() => {
                setFormData(initialState);
                setModalOpened(false);
                setMenuOpened(false);
            });
        } else {
            dispatch(signin(formData)).then(() => {
                setFormData(initialState);
                setModalOpened(false);
                setMenuOpened(false);
                navigate("/create")
            });
        }
    }

    const loginToGoogle = useGoogleLogin({
        onSuccess: tokenResponse => {
            localStorage.setItem("loginWith", "Google");
            localStorage.setItem("accessToken", tokenResponse.access_token);
            navigate("/create");
        }
    });

    useEffect(() => {
        return () => {

        }
    }, [])

    return <nav className="Header_header__Kpax6" style={{ zIndex: 40 }}>
        <div className="chakra-stack css-84zodg" style={{ height: '40px' }}>
            <div className="Header_header__logo__Gat_c">
                <Link to={`/`}>
                    <span >
                        <img className="Header_header__logo_desktop__Y2IAX" src={`./assets/images/logo.png`} alt="Playground logo" width="157px" height="32px" />
                        <img className="Header_header__logo_mobile__HjbTR" src={`./assets/images/logo.png`} alt="Playground logo" width="32px" height="32px" />
                    </span>
                </Link>
            </div>
            <div className="chakra-input__group Header_header__search__5ra3h css-4302v8">
                <div className="chakra-input__left-element css-1cw84h2" style={{ height: '36px' }}>
                    <SearchIcon fontSize="small" />
                </div>
                <input autoComplete="off" type="search" placeholder="Search" id="search" className="chakra-input css-nxezkn" defaultValue />
                <div className="chakra-input__right-element css-11pdqhs" style={{ height: '36px' }}>
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3462 5.91113H11.4492L9 15.9336H9.89697L12.3462 5.91113Z" fill="#828086" />
                        <rect x="0.5" y="0.5" width={21} height={21} rx="3.5" stroke="#2A2832" />
                    </svg>
                </div>
            </div>
        </div>
        <header className="flex-none md:pt-0 Header_header__auth__O1270">
            <div className="Header_header__auth_true__eBAi7">
                <div className="relative">
                    <button data-cy="open-profile-dropdown" style={{ paddingTop: '2px' }}
                        onClick={() => setMenuOpened(!menuOpened)}>
                        <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                            <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2736%27%20height=%2736%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                            </span>
                            <img alt="Neill Chan avatar" referrerPolicy="no-referrer" src={`./unnamed(7).png`} decoding="async" data-nimg="intrinsic" className="rounded-[3px] bg-gray-900" style={{ borderRadius: '6px', position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                        </span>
                    </button>
                    <div className={`absolute p-1 right-0 w-48 bg-gray-900 rounded-lg origin-top-right transition-all border border-white/10 ${menuOpened ? "" : "scale-95 opacity-0 pointer-events-none"}`}>
                        {
                            auth.isAuthenticated && <>
                                <Link className="profile-item" to={`/profile`}>
                                    <PersonOutlineOutlinedIcon fontSize='small' />Profile
                                </Link>
                                <button className="profile-item">
                                    <SettingsOutlinedIcon fontSize='small' />Settings
                                </button>
                                <Link className="profile-item" to={`https://discord.gg/jrjAZQbQ5D`}>
                                    <ChatBubbleOutlineOutlinedIcon fontSize='small' />Join Discord
                                </Link>
                                <Link className="profile-item" to={`https://playgroundai.com/notifications`}>
                                    <NotificationsNoneOutlinedIcon fontSize='small' />Notifications
                                </Link>
                                <Link className="profile-item" to={`https://twitter.com/playground_ai`}>
                                    <TwitterIcon fontSize='small' />Twitter
                                </Link>
                                <Link className="profile-item" to={`http://help.playgroundai.com/`}>
                                    <QuizIcon fontSize='small' />FAQ
                                </Link>
                            </>
                        }
                        <Link className="profile-item" to={`https://playgroundai.com/privacy`}>
                            <ShieldOutlinedIcon fontSize='small' />Privacy Policy
                        </Link>
                        <button className="profile-item">
                            <HelpIcon fontSize='small' />Request Help
                        </button>
                        <Link className="profile-item" to={`https://playgroundai.com/terms`}>
                            <DescriptionOutlinedIcon fontSize='small' />Terms of Service
                        </Link>
                        <Link className="profile-item" to={`https://dapper-glove-b11.notion.site/Working-at-Playground-AI-e90f8b72558748dcb77dcf4384410d7a`}>
                            <WorkOutlineOutlinedIcon fontSize='small' />Jobs
                        </Link>
                        <Link className="profile-item" to={`https://playgroundai.com/pricing`}>
                            <span><MoneyIcon fontSize='small' /></span>Pricing
                        </Link>
                        {
                            auth.isAuthenticated ?
                                <button className="profile-item" onClick={() => dispatch(signout()).then(() => navigate('/'))}>
                                    <LogoutOutlinedIcon fontSize='small' />Log out
                                </button>
                                :
                                <button className="profile-item" onClick={() => setModalOpened(true)}>
                                    <LogoutOutlinedIcon fontSize='small' />Log In
                                </button>
                        }
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', paddingTop: 2, paddingLeft: 10 }}>
                        <Link to="/create">
                            <Button variant="outlined" startIcon={<AirplaneTicketOutlinedIcon />}>
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        <Modal
            open={modalOpened}
            onClose={() => setModalOpened(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                borderRadius: 5,
                boxShadow: 24,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {isSignUp ? `Register` : `Login`}
                </Typography>
                <div id="modal-modal-description" sx={{ mt: 2 }}>
                    <div className="flex flex-col divide-y divide-white/10 pt-6 space-y-6 lg:overflow-y-auto">
                        <form>
                            {
                                isSignUp && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                                        <TextField label="First Name" name="firstName" onChange={handleChange} value={formData.firstName} size="small" autoFocus />
                                        {(auth.error && auth.error.firstName) && <Alert severity="error">{auth.error.firstName}</Alert>}
                                        <TextField label="Last Name" name="lastName" onChange={handleChange} value={formData.lastName} size="small" />
                                        {(auth.error && auth.error.lastName) && <Alert severity="error">{auth.error.lastName}</Alert>}
                                    </div>
                                )
                            }
                            <TextField label="Username" name="email" onChange={handleChange} value={formData.email} size="small" style={{ marginBottom: 10 }} fullWidth />
                            {
                                (auth.error && auth.error.email) && <Alert severity="error">{auth.error.email}</Alert>
                            }
                            <TextField type="password" label="Password" name="password" onChange={handleChange} value={formData.password} size="small" style={{ marginBottom: 10 }} fullWidth />
                            {
                                (auth.error && auth.error.password) && <Alert severity="error">{auth.error.password}</Alert>
                            }
                            {
                                isSignUp && <>
                                    < TextField type="password" label="Confirm Password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} size="small" style={{ marginBottom: 10 }} fullWidth />
                                    {(auth.error && auth.error.confirmPassword) && <Alert severity="error">{auth.error.confirmPassword}</Alert>}
                                </>
                            }
                            {
                                isSignUp ?
                                    <>
                                        <div style={{ display: `flex`, justifyContent: 'space-around' }}>
                                            <Button variant="outlined" startIcon={<HowToRegIcon />} onClick={handleSubmit}>Register</Button>
                                            <Button variant="outlined" color="success" startIcon={<LoginIcon />} onClick={() => setIsSignUp(false)}>To Login</Button>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div style={{ display: `flex`, justifyContent: 'space-around' }}>
                                            <Button variant="outlined" color="success" startIcon={<LoginIcon />} onClick={handleSubmit}>Login</Button>
                                            <Button variant="outlined" startIcon={<HowToRegIcon />} onClick={() => setIsSignUp(true)}>To Register</Button>
                                        </div>
                                    </>
                            }
                        </form>
                        <Button variant="elevated" endIcon={<GoogleIcon />} onClick={() => loginToGoogle()}>Continue with Google</Button>
                        <Button variant="elevated" endIcon={<FacebookIcon />}>Continue with Facebook</Button>
                    </div>
                </div>
            </Box >
        </Modal >
    </nav >;
}

export default Header;