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

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const img = useSelector(state => state.img)

    // Standard
    const [searchKey, setSearchKey] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const searchImages = () => {
        dispatch(searchImgsByKey(searchKey)).then(() => {
            // setFormData(initialState);
            // navigate("/create");
        });
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right', }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            sx={{
            }}
        >
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><PersonOutlineOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Profile</MenuItem>}
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><SettingsOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Settings</MenuItem>}
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><ChatBubbleOutlineOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Join Discord</MenuItem>}
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><NotificationsNoneOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Notifications</MenuItem>}
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><TwitterIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Twitter</MenuItem>}
            {auth.isAuthenticated && <MenuItem onClick={handleMenuClose}><QuizIcon fontSize='string' />&nbsp;&nbsp;&nbsp;FAQ</MenuItem>}
            <MenuItem onClick={handleMenuClose}><ShieldOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Privacy Policy</MenuItem>
            <MenuItem onClick={handleMenuClose}><HelpIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Request Help</MenuItem>
            <MenuItem onClick={handleMenuClose}><DescriptionOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Terms of Service</MenuItem>
            <MenuItem onClick={handleMenuClose}><WorkOutlineOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Jobs</MenuItem>
            <MenuItem onClick={handleMenuClose}><MoneyIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Pricing</MenuItem>
            {auth.isAuthenticated &&
                <MenuItem onClick={() => {
                    handleMenuClose();
                    dispatch(signout()).then(() => navigate('/'))
                }}><LogoutOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Log out</MenuItem>}
            {
                !auth.isAuthenticated &&
                <MenuItem onClick={handleMenuClose}>
                    <Link to={`/signin`}>
                        <LogoutOutlinedIcon fontSize='string' />&nbsp;&nbsp;&nbsp;Log In
                    </Link>
                </MenuItem>
            }
        </Menu >
    );

    useEffect(() => {
        // setSearchKey(img.imgSchKeyword);
    })

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
                    {
                        <Link to={auth.isAuthenticated ? '/create' : '/signin'}>
                            <StartBtn btnName={auth.isAuthenticated ? "Create" : "Get Started"} />
                        </Link>
                    }
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}