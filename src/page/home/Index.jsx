import { useEffect, useState } from "react";
import styled from "styled-components";

import './style.css';
import Security from "./security";
import DashBoard from "./dashboard";
import Activities from "./activities";
import Wallet from "./wallet";
import Support from "./support";
import Profile from "./profile";
import { Grid } from "@mui/material";

const Home = ({ authed, redirect }) => {
    const [selectedMenueTab, setSelectedMenueTab] = useState(1);

    if (!authed) {
        redirect('/');
    }

    const AppBar = styled('div')(({ }) => ({
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
        display: 'flex',
        backgroundColor: 'white'
    }))

    // Side Bar Component
    const LeftSideBar = styled(Grid)(({ }) => ({
        width: '250px',
        overflow: 'auto',
        height: '100vh',
        backgroundColor: 'rgb(248, 247, 254)',
        transition: 'width 0.3s ease-in-out 0s',
    }))
    const LeftSideInnerBar = styled('div')(({ }) => ({
        padding: '1.6rem',
        height: '100%',
        gap: '2.4rem',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        display: 'flex',
    }))
    const LeftSideInnerBarItems = styled('div')(({ }) => ({
        gap: '0.4rem',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        display: 'flex',

    }))

    // Left Side Menue Text
    const ActiveMenueText = styled('p')(({ }) => ({
        width: '100%',
        whiteSpace: 'nowrap',
        color: 'white',
        fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        textAlign: 'left',
        lineHeight: '0.5rem',
        letterSpacing: '0.2px',
        textDecoration: 'none',
        fontWeight: '400',
        fontSize: '1.3rem'
    }))

    const InActiveMenueText = styled('p')(({ }) => ({
        width: '100%',
        whiteSpace: 'nowrap',
        color: '#7165E3',
        fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        textAlign: 'left',
        lineHeight: '',
        letterSpacing: '0.2px',
        textDecoration: 'none',
        fontWeight: '400',
        fontSize: '1.3rem'
    }))

    // Logo and Menue wrapper
    const LogoMenueWrapper = styled('div')(({ }) => ({
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '4.8rem',
        display: 'flex',
    }))
    const LogoImage = styled('img')(({ }) => ({
        height: '1.5rem'
    }))
    const MenueImage = styled('img')(({ }) => ({
        cursor: 'pointer',
        height: '1.5rem'
    }))

    // Home Button Components
    const HomeButtonWrapper = styled('div')(({ }) => ({
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        display: 'flex',
    }))
    const ActiveButtonInnerWrapper = styled('div')(({ }) => ({
        backgroundColor: '#7165E3',
        borderRadius: '6rem',
        padding: '1.5rem',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        alignItems: 'center',
        flexDirection: 'row',
        cursor: 'pointer',
        width: '100%',
        transition: 'all 0.2s ease-in-out 0s',
        display: 'flex',
    }))
    const InActiveButtonInnerWrapper = styled('div')(({ }) => ({
        borderRadius: '6rem',
        padding: '1.5rem',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        alignItems: 'center',
        flexDirection: 'row',
        cursor: 'pointer',
        width: '100%',
        transition: 'all 0.2s ease-in-out 0s',
        display: 'flex',
    }))
    const HomeButtonContentWrapper = styled('div')(({ }) => ({
        gap: '2rem',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
    }))
    const HomeButtonContents = styled('img')(({ }) => ({
        height: '1.5rem',
        transition: 'all 0.2s ease-in-out 0s',
        transform: 'unset',
    }))

    // Main Bar Component
    const MainBar = styled('div')(({ }) => ({
        width: 'calc(100vw - 250px)',
        overflowY: 'scroll',
        backgroundColor: '',
        overflow: 'auto',
        height: '100vh',
        backgroundColor: 'rgb(248, 247, 254)',
        transition: 'width 0.3s ease-in-out 0s',
    }))

    useEffect(() => {

    }, [selectedMenueTab])

    return (
        <AppBar>
            {/* Left Side Bar */}
            <LeftSideBar sx={{ display: { lg: 'flex', xl: 'flex', sm: 'none', xs: 'none' } }}>
                <LeftSideInnerBar>
                    <LeftSideInnerBarItems>
                        {/* Logo Menue Button */}
                        <LogoMenueWrapper>
                            <LogoImage src="../svg/ridima-logo.svg" />
                            <MenueImage src="../svg/collapse.svg" />
                        </LogoMenueWrapper>

                        {/* Home Button */}
                        <HomeButtonWrapper>
                            {selectedMenueTab === 1
                                ? <ActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper onClick={() => setSelectedMenueTab(1)}>
                                        <HomeButtonContents src="../svg/home-active.svg" />
                                        <ActiveMenueText>Home</ActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </ActiveButtonInnerWrapper>
                                : <InActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper onClick={() => setSelectedMenueTab(1)}>
                                        <HomeButtonContents src="../svg/home.svg" />
                                        <InActiveMenueText>Home</InActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </InActiveButtonInnerWrapper>
                            }
                        </HomeButtonWrapper>

                        {/* Home Button */}
                        <HomeButtonWrapper>
                            {selectedMenueTab === 2
                                ? <ActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper>
                                        <HomeButtonContents src="../svg/activities-active.svg" />
                                        <ActiveMenueText>Activities</ActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </ActiveButtonInnerWrapper>
                                : <InActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper>
                                        <HomeButtonContents src="../svg/activities.svg" />
                                        <InActiveMenueText>Activities</InActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </InActiveButtonInnerWrapper>
                            }
                        </HomeButtonWrapper>

                        {/* Home Button */}
                        <HomeButtonWrapper>
                            {selectedMenueTab === 3
                                ? <ActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper>
                                        <HomeButtonContents src="../svg/wallet-active.svg" />
                                        <ActiveMenueText>Wallet</ActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </ActiveButtonInnerWrapper>
                                : <InActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper>
                                        <HomeButtonContents src="../svg/wallet.svg" />
                                        <InActiveMenueText>Wallet</InActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </InActiveButtonInnerWrapper>
                            }
                        </HomeButtonWrapper>

                        {/* Home Button */}
                        <HomeButtonWrapper>
                            {selectedMenueTab === 4
                                ? <ActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper>
                                        <HomeButtonContents src="../svg/support-active.svg" />
                                        <ActiveMenueText>Support</ActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </ActiveButtonInnerWrapper>
                                : <InActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper>
                                        <HomeButtonContents src="../svg/support.svg" />
                                        <InActiveMenueText>Support</InActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </InActiveButtonInnerWrapper>
                            }
                        </HomeButtonWrapper>

                        {/* Home Button */}
                        <HomeButtonWrapper>
                            {selectedMenueTab === 5
                                ? <ActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper>
                                        <HomeButtonContents src="../svg/profile-active.svg" />
                                        <ActiveMenueText>Profile</ActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </ActiveButtonInnerWrapper>
                                : <InActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper>
                                        <HomeButtonContents src="../svg/profile.svg" />
                                        <InActiveMenueText>Profile</InActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </InActiveButtonInnerWrapper>
                            }
                        </HomeButtonWrapper>

                        {/* Home Button */}
                        <HomeButtonWrapper>
                            {selectedMenueTab === 6
                                ? <ActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper onClick={() => setSelectedMenueTab(6)}>
                                        <HomeButtonContents src="../svg/security-active.svg" />
                                        <ActiveMenueText>Security</ActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </ActiveButtonInnerWrapper>
                                : <InActiveButtonInnerWrapper>
                                    <HomeButtonContentWrapper onClick={() => setSelectedMenueTab(6)}>
                                        <HomeButtonContents src="../svg/security.svg" />
                                        <InActiveMenueText>Security</InActiveMenueText>
                                    </HomeButtonContentWrapper>
                                </InActiveButtonInnerWrapper>
                            }
                        </HomeButtonWrapper>

                        {/* Home Button */}
                        <HomeButtonWrapper>
                            <InActiveButtonInnerWrapper>
                                <HomeButtonContentWrapper>
                                    <HomeButtonContents src="../svg/logout.svg" />
                                    <InActiveMenueText>Logout</InActiveMenueText>
                                </HomeButtonContentWrapper>
                            </InActiveButtonInnerWrapper>
                        </HomeButtonWrapper>

                    </LeftSideInnerBarItems>
                </LeftSideInnerBar>
            </LeftSideBar>

            {/* Main Side Bar */}
            {selectedMenueTab === 1 && <DashBoard />}
            {selectedMenueTab === 2 && <Activities />}
            {selectedMenueTab === 3 && <Wallet />}
            {selectedMenueTab === 4 && <Support />}
            {selectedMenueTab === 5 && <Profile />}
            {selectedMenueTab === 6 && <Security />}
        </AppBar>
    )
}

export default Home;