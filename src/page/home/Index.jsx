import { useEffect, useState } from "react";
import styled from "styled-components";

import './style.css';
import Security from "./security";
import DashBoard from "./dashboard/dashboard";
import Activities from "./activities";
import Wallet from "./wallet";
import Support from "./support";
import Profile from "./profile";
import { Grid } from "@mui/material";
import TradeCard from "./dashboard/trade-card";
import SelectCard from "./dashboard/selectcard";

const Home = ({ authed, redirect }) => {
    const [selectedMenueTab, setSelectedMenueTab] = useState(1);
    const [tradeCard, setTradeCard] = useState(false);
    const [selectedCard, setSelectedCard] = useState(false);

    function navTradeCard() {
        console.log('fired trade-card');
        setTradeCard(!tradeCard);
    }

    function navSellCard() {
        console.log('fired select-card');
        setSelectedCard(!selectedCard);
    }

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

    // Desktop Side Bar Component
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

    // Mobile Side Bar
    const MobileLeftSideBar = styled('div')(({ }) => ({
        width: '100%',
        position: 'fixed',
        left: '0px',
        bottom: '0px',
        padding: '1rem',
        backgroundColor: 'white',
        borderTop: '1px solid rgba(64, 0, 255, 0.2)',
        zIndex: '1'
    }))
    const MobileLeftSideInnerBar = styled('div')(({ }) => ({
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
    }))
    const MobileLeftSideInnerBarItems = styled('div')(({ }) => ({
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        display: 'flex',
    }))
    const MobileLeftSideInnerBarItemsContent = styled('div')(({ }) => ({
        gap: '.4rem',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
    }))
    const MobileLeftSideInnerBarItemsContentText = styled('p')(({ }) => ({
        fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        textAlign: 'left',
        fontSize: '1.4rem',
        lineHeight: '1.6rem',
        color: '#7165E3',
        letterSpacing: '0.2px',
        textDecoration: 'none',
    }))
    const MobileLeftSideInnerBarItemsContentImage = styled('img')(({ }) => ({
        height: '2.2rem',
        width: '2.2rem',
        opacity: '0.5',
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

    useEffect(() => {
    }, [selectedMenueTab])

    return (
        <AppBar>
            {/* Desktop Left Side Bar */}
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

                        {/* Activities Button */}
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

                        {/* Wallet Button */}
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

                        {/* Support Button */}
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

                        {/* Profile Button */}
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

                        {/* Security Button */}
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

                        {/* Logout Button */}
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
            {/* Mobile Left Side Bar */}
            <Grid sx={{ display: { lg: 'none', xl: 'none', sm: 'flex', xs: 'flex' } }}>
                <MobileLeftSideBar>
                    <MobileLeftSideInnerBar>

                        <MobileLeftSideInnerBarItems>
                            <MobileLeftSideInnerBarItemsContent>
                                {selectedMenueTab === 1
                                    ? <>
                                        <svg width="5" height="6" viewBox="0 0 5 6" fill="none"><circle cx="2.5" cy="3" r="2.5" fill="#7165E3"></circle></svg>
                                        <MobileLeftSideInnerBarItemsContentText onClick={() => setSelectedMenueTab(1)}>Home</MobileLeftSideInnerBarItemsContentText>
                                    </>
                                    : <MobileLeftSideInnerBarItemsContentImage src="/svg/home.svg" onClick={() => setSelectedMenueTab(1)} />
                                }
                            </MobileLeftSideInnerBarItemsContent>
                        </MobileLeftSideInnerBarItems>

                        <MobileLeftSideInnerBarItems>
                            <MobileLeftSideInnerBarItemsContent>
                                {selectedMenueTab === 2
                                    ? <>
                                        <svg width="5" height="6" viewBox="0 0 5 6" fill="none"><circle cx="2.5" cy="3" r="2.5" fill="#7165E3"></circle></svg>
                                        <MobileLeftSideInnerBarItemsContentText
                                        // onClick={() => setSelectedMenueTab(2)}
                                        >Activities</MobileLeftSideInnerBarItemsContentText>
                                    </>
                                    : <MobileLeftSideInnerBarItemsContentImage src="/svg/activities.svg"
                                    //  onClick={() => setSelectedMenueTab(2)} 
                                    />
                                }
                            </MobileLeftSideInnerBarItemsContent>
                        </MobileLeftSideInnerBarItems>

                        <MobileLeftSideInnerBarItems>
                            <MobileLeftSideInnerBarItemsContent>
                                {selectedMenueTab === 3
                                    ? <>
                                        <svg width="5" height="6" viewBox="0 0 5 6" fill="none"><circle cx="2.5" cy="3" r="2.5" fill="#7165E3"></circle></svg>
                                        <MobileLeftSideInnerBarItemsContentText
                                        // onClick={() => setSelectedMenueTab(3)}
                                        >Wallet</MobileLeftSideInnerBarItemsContentText>
                                    </>
                                    : <MobileLeftSideInnerBarItemsContentImage src="/svg/wallet.svg"
                                    // onClick={() => setSelectedMenueTab(3)} 
                                    />
                                }

                            </MobileLeftSideInnerBarItemsContent>
                        </MobileLeftSideInnerBarItems>

                        <MobileLeftSideInnerBarItems>
                            <MobileLeftSideInnerBarItemsContent>
                                {selectedMenueTab === 4
                                    ? <>
                                        <svg width="5" height="6" viewBox="0 0 5 6" fill="none"><circle cx="2.5" cy="3" r="2.5" fill="#7165E3"></circle></svg>
                                        <MobileLeftSideInnerBarItemsContentText
                                        // onClick={() => setSelectedMenueTab(4)}
                                        >Support</MobileLeftSideInnerBarItemsContentText>
                                    </>
                                    : <MobileLeftSideInnerBarItemsContentImage src="/svg/support.svg"
                                    // onClick={() => setSelectedMenueTab(4)}
                                    />
                                }
                            </MobileLeftSideInnerBarItemsContent>
                        </MobileLeftSideInnerBarItems>

                        <MobileLeftSideInnerBarItems>
                            <MobileLeftSideInnerBarItemsContent>
                                {selectedMenueTab === 5
                                    ? <>
                                        <svg width="5" height="6" viewBox="0 0 5 6" fill="none"><circle cx="2.5" cy="3" r="2.5" fill="#7165E3"></circle></svg>
                                        <MobileLeftSideInnerBarItemsContentText
                                        // onClick={() => setSelectedMenueTab(5)}
                                        >Profile</MobileLeftSideInnerBarItemsContentText>
                                    </>
                                    : <MobileLeftSideInnerBarItemsContentImage src="/svg/profile.svg"
                                    // onClick={() => setSelectedMenueTab(5)} 
                                    />
                                }
                            </MobileLeftSideInnerBarItemsContent>
                        </MobileLeftSideInnerBarItems>

                    </MobileLeftSideInnerBar>
                </MobileLeftSideBar>
            </Grid>

            {/* Main Side Bar */}
            {selectedMenueTab === 1 && tradeCard === false && selectedCard === false && <DashBoard navTradeCard={navTradeCard} />}
            {selectedMenueTab === 1 && tradeCard === true && selectedCard === false && <TradeCard navTradeCard={navTradeCard} navSellCard={navSellCard} />}
            {selectedMenueTab === 1 && tradeCard === true && selectedCard === true && <SelectCard navSellCard={navSellCard} redirect={redirect} />}


            {selectedMenueTab === 2 && <Activities />}
            {selectedMenueTab === 3 && <Wallet />}
            {selectedMenueTab === 4 && <Support />}
            {selectedMenueTab === 5 && <Profile />}
            {selectedMenueTab === 6 && <Security />}
        </AppBar>
    )
}

export default Home;