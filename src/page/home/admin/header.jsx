import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

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

export default function AdminHeader({ redirect }) {
    const [anchorMenue, setAnchorMenue] = useState(null);
    function handleMenueOpen(e) { setAnchorMenue(e.currentTarget); }
    function handleMenueClose(e) { setAnchorMenue(null); }

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    function handleMobileMenueOpen(e) { setMobileMoreAnchorEl(e.currentTarget); }
    function handleMobileMenueClose(e) { setMobileMoreAnchorEl(null); }

    const [desktopMoreAnchorEl, setDesktopMoreAnchorEl] = useState(null);
    function handleDesktopMenueOpen(e) { setDesktopMoreAnchorEl(e.currentTarget); }
    function handleDesktopMenueClose(e) { setDesktopMoreAnchorEl(null); }

    const isMenue = Boolean(anchorMenue);
    const isMobileMenue = Boolean(mobileMoreAnchorEl);
    const isDesktopMenue = Boolean(desktopMoreAnchorEl);

    function handleSearchTextChange(e) {
        const { value } = e.target;
        console.log(value);
    }

    const menue = [{ label: 'Message', icon: <MailIcon /> }, { label: 'Notification', icon: <NotificationsIcon /> }];
    const accounts = [{ label: 'Amin', icon: <AdminPanelSettingsIcon />, action: () => redirect('/admin') }, { label: 'User', icon: <AccountCircle />, action: () => redirect('/dashboard') }];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }} onClick={handleMenueOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorMenue} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={isMenue} onClose={handleMenueClose}>
                        {menue.map(({ label, icon }, i) => (
                            <MenuItem key={i} onClick={handleMenueClose}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    {icon}
                                </IconButton>
                                <Typography textAlign="center">{label}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>

                    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Admin
                    </Typography>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} onChange={handleSearchTextChange} />
                    </Search>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" edge="end" aria-label="account of current user" aria-haspopup="true" onClick={handleDesktopMenueOpen} color="inherit">
                            <AccountCircle />
                        </IconButton>
                        <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={desktopMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={isDesktopMenue} onClose={handleDesktopMenueClose}>
                            {accounts.map(({ label, icon, action }, i) => (
                                <MenuItem key={i} onClick={action}>
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        {icon}
                                    </IconButton>
                                    <Typography textAlign="center">{label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" edge="end" aria-label="account of current user" aria-haspopup="true" onClick={handleMobileMenueOpen} color="inherit">
                            <AccountCircle />
                        </IconButton>
                        <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={isMobileMenue} onClose={handleMobileMenueClose}>
                            {accounts.map(({ label, icon, action }, i) => (
                                <MenuItem key={i} onClick={action}>
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        {icon}
                                    </IconButton>
                                    <Typography textAlign="center">{label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}