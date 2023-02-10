import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Badge, InputBase, MenuItem, Menu, Avatar } from '@mui/material';

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
import BugReportIcon from '@mui/icons-material/BugReport';

import { signout } from "../../actions/authAction";
import { searchImgsByKey } from "../../actions/imgAction";
import styles from './styles.module.css';
import StartBtn from './StartBtn.js';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default function PrimarySearchAppBar() {
    // Redirect Module
    const navigate = useNavigate()

    // Use Redux
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const img = useSelector(state => state.img);

    // Standard
    const [searchKey, setSearchKey] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    useEffect(() => {
        setSearchKey(img.imgSchKeyword);
    }, [img])

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const searchImages = () => {
        dispatch(searchImgsByKey(searchKey));
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            sx={{
            }}
        >
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><PersonOutlineOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Profile</span></MenuItem>}
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><SettingsOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Settings</span></MenuItem>}
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><ChatBubbleOutlineOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Join Discord</span></MenuItem>}
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><NotificationsNoneOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Notifications</span></MenuItem>}
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><TwitterIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Twitter</span></MenuItem>}
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><QuizIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>FAQ</span></MenuItem>}
            <MenuItem onClick={handleMenuClose}><ShieldOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Privacy Policy</span></MenuItem>
            <MenuItem onClick={handleMenuClose}><HelpIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Request Help</span></MenuItem>
            <MenuItem onClick={handleMenuClose}><DescriptionOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Terms of Service</span></MenuItem>
            <MenuItem onClick={handleMenuClose}><WorkOutlineOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Jobs</span></MenuItem>
            <MenuItem onClick={handleMenuClose}><MoneyIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Pricing</span></MenuItem>
            {auth.isAuthenticated &&
                <MenuItem onClick={() => {
                    handleMenuClose();
                    dispatch(signout()).then(() => navigate('/'))
                }}><LogoutOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Log out</span></MenuItem>}
            {
                !auth.isAuthenticated &&
                <MenuItem onClick={handleMenuClose}>
                    <Link to={`/signin`}>
                        <LogoutOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;<span className={styles.smlMenuItemSpan}>Log In</span>
                    </Link>
                </MenuItem>
            }
        </Menu >
    );

    /**
     * @description
     *  Make navigation button
     */
    const genNavBtn = () => {
        if (!auth.isAuthenticated) {
            return (
                <Link to='/signin'>
                    <StartBtn btnName="Get Started" />
                </Link>
            )
        } else {
            const url = document.location.href;
            if (url.includes('/create')) {
                return (
                    <Link to='/mockup'>
                        <StartBtn btnName="Mockup" />
                    </Link>
                )
            } else {
                return (
                    <Link to='/create'>
                        <StartBtn btnName="Create" />
                    </Link>
                )
            }
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <BugReportIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Link to={`/`}><img alt="" src={`http://localhost:3000/assets/images/logo.png`} width="157px" height="32px" /></Link>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
                            onKeyDown={(e) => { e.key === 'Enter' && searchImages(searchKey) }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                            onClick={handleProfileMenuOpen} sx={{ p: 0 }}
                        >
                            <Avatar alt="" src={`http://localhost:3000/testAvatar.png`} />
                        </StyledBadge>
                    </Box>
                    {genNavBtn()}
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}