import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Fab from '@mui/material/Fab';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { styled } from '@mui/material/styles';

const pages = ['Why MaximusHub?', 'Rates', 'About', 'FAQs', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function redirect(to) {
    window.location.replace(`/${to}`);
}


const AppBarStyle = styled(AppBar)(({ }) => ({
    position: 'fixed',
    backgroundColor: '#E3BC8D',
    boxShadow: 'none'
}));

const buttons = [
    <Button key="login" variant="extended" onClick={() => redirect('login')}>
        <LoginIcon sx={{ mr: 1 }} />
        Login
    </Button>,
    <Fab key="get_started" variant="extended" color='transparent' onClick={() => redirect('register')}>
        <AppRegistrationIcon sx={{ mr: 1 }} />
        Get Started
    </Fab>
];


function Header({ redirect, handleScrollToRef }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [isUserAuthed, setIsUserAuthed] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function scrollTo() {
        handleCloseNavMenu();
        handleScrollToRef();
    }

    React.useEffect(() => {

    }, [isUserAuthed])

    return (
        <AppBarStyle>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar alt="logo" src="/logo.png" sx={{ mr: 1 }} style={{ marginRight: '2rem', cursor: 'pointer' }} onClick={() => redirect('/')} />
                    <Typography variant="h5" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}>
                        MaximusHub
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button key={page} onClick={page === 'Why MaximusHub?' ? scrollTo : () => redirect(`/${(page.toLowerCase())}`)} sx={{ my: 2, color: 'white', display: 'block' }}                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box >
                        <Tooltip title="Open settings">
                            {isUserAuthed
                                ? <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}><Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /></IconButton>
                                : <Box sx={{ display: 'flex', '& > *': { m: 1, }, }}>
                                    {buttons}
                                </Box>
                            }

                        </Tooltip>
                        <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }, }}>
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={page === 'Why MaximusHub?' ? scrollTo : () => redirect(`/${(page.toLowerCase())}`)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBarStyle >
    );
}
export default Header;