import { Grid } from "@mui/material";
import styled from "styled-components";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import {
    ContentWrap,
    ContentContainer,
    // Mobile Header Components
    MobileHeader, MobileHeaderTextWrap, MobileHeaderTextSalutation, MobileHeaderTextUser, MobileHeaderIconWrapper,
    MobileHeaderIconWrap, MobileHeaderIcon,
    // Banner Components
    BannerWrapper, BannerConentWrap, BannerInnerConentWrap, BannerWalletText, BannerBallanceContentWrap,
    BannerBallanceHeaderText, BannerBallanceTextWrapper, BannerBallanceText, BannerBallanceUpperText,
    BannerBallanceButtonWrapper, BannerBallanceButton, BannerBallanceButtonTextWrapper, BannerBallanceButtonText,
    // Profile Components
    ProfileBannerWrapper, ProfileBannerImage, ProfileBannerPercentage, ProfileBannerText,
    // Quick actions components
    QuickActionsWrapper, QuickActionsText, QuickActionsBannerWrapper, QuickActionsBannerImage, QuickActionsBannerText,
    QuickActionsBannerTextWrapper, QuickActionsBannerSubText, QuickActionsBannerExchangeText
} from "../components";

const Svg = styled('svg')(() => ({
    transform: 'rotateY(180deg)'
}))

const appOrigin = window.location.origin;
const DashBoard = ({ navTradeCard, redirect }) => {
    const [userData, setUserData] = useState(null);

    return (
        <>
            {/* Mobile View */}
            <ContentWrap>
                <ContentContainer>
                    {/* MobileHeader */}
                    <MobileHeader>
                        <MobileHeaderTextWrap>
                            <MobileHeaderTextSalutation>Hello</MobileHeaderTextSalutation>
                            <MobileHeaderTextUser>axus</MobileHeaderTextUser>
                        </MobileHeaderTextWrap>
                        <MobileHeaderIconWrapper>
                            <MobileHeaderIconWrap>
                                <MobileHeaderIcon src="/svg/notification.svg" />
                            </MobileHeaderIconWrap>
                        </MobileHeaderIconWrapper>
                    </MobileHeader>
                    {/* Balance and Profile Banner */}
                    <BannerWrapper>
                        <BannerConentWrap>
                            <Svg width="100%" height="100%" viewBox="0 0 175 239" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M175 24C175 10.7452 164.255 0 151 0H24C10.7452 0 0 10.7452 0 24V207.332C0 220.055 9.92858 230.567 22.6308 231.293L149.631 238.55C163.401 239.337 175 228.382 175 214.589V24Z" fill="#7165E3">
                                </path>
                            </Svg>
                            <BannerInnerConentWrap>
                                <BannerWalletText>Naira Wallet</BannerWalletText>
                                <BannerBallanceContentWrap>
                                    <BannerBallanceHeaderText>Balance</BannerBallanceHeaderText>
                                    <BannerBallanceTextWrapper>
                                        <BannerBallanceText>0.00</BannerBallanceText>
                                        <BannerBallanceUpperText>NGN</BannerBallanceUpperText>
                                    </BannerBallanceTextWrapper>
                                    <BannerBallanceButtonWrapper>
                                        <BannerBallanceButton>
                                            <svg width="100%" height="100%" viewBox="0 0 127 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.60451e-06 23.2329C7.18362e-07 10.4017 10.4017 0 23.2329 0H106.426C117.789 0 127 9.21126 127 20.5739C127 31.4265 118.57 40.4128 107.74 41.1058L24.7165 46.4184C11.329 47.2751 2.53096e-06 36.6478 1.60451e-06 23.2329Z" fill="#F5CF48">
                                                </path>
                                            </svg>
                                            <BannerBallanceButtonTextWrapper>
                                                <BannerBallanceButtonText>Withdraw</BannerBallanceButtonText>
                                            </BannerBallanceButtonTextWrapper>
                                        </BannerBallanceButton>
                                    </BannerBallanceButtonWrapper>
                                </BannerBallanceContentWrap>
                            </BannerInnerConentWrap>
                        </BannerConentWrap>
                        <BannerConentWrap>
                            <svg width="100%" height="100%" viewBox="0 0 175 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M175 24C175 10.7452 164.255 0 151 0H24C10.7452 0 0 10.7452 0 24V207.332C0 220.055 9.92858 230.567 22.6308 231.293L149.631 238.55C163.401 239.337 175 228.382 175 214.589V24Z" fill="#F7F6FD">
                                </path>
                            </svg>
                            <BannerInnerConentWrap>
                                <ProfileBannerWrapper>
                                    <ProfileBannerImage src="/svg/dashboard-avatar.svg" />
                                    <ProfileBannerPercentage>70%</ProfileBannerPercentage>
                                    <ProfileBannerText>Profile complete</ProfileBannerText>
                                </ProfileBannerWrapper>
                                <BannerBallanceButtonWrapper>
                                    <BannerBallanceButton>
                                        <Svg width="100%" height="100%" viewBox="0 0 127 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.60451e-06 23.2329C7.18362e-07 10.4017 10.4017 0 23.2329 0H106.426C117.789 0 127 9.21126 127 20.5739C127 31.4265 118.57 40.4128 107.74 41.1058L24.7165 46.4184C11.329 47.2751 2.53096e-06 36.6478 1.60451e-06 23.2329Z" fill="rgba(63, 30, 75, 0.1)">
                                            </path>
                                        </Svg>
                                        <BannerBallanceButtonTextWrapper>
                                            <BannerBallanceButtonText>Complets Profile</BannerBallanceButtonText>
                                        </BannerBallanceButtonTextWrapper>
                                    </BannerBallanceButton>
                                </BannerBallanceButtonWrapper>
                            </BannerInnerConentWrap>
                        </BannerConentWrap>
                    </BannerWrapper>

                    {/* Quick Actions Banner*/}
                    <QuickActionsWrapper>
                        <QuickActionsText>Quick Actions</QuickActionsText>
                        <QuickActionsBannerWrapper onClick={navTradeCard}>
                            <QuickActionsBannerImage src="/svg/dashboard-trade.svg" alt="" />
                            <QuickActionsBannerText>Trade<br /><br />Gift Cards</QuickActionsBannerText>
                        </QuickActionsBannerWrapper>
                        <QuickActionsBannerWrapper>
                            <QuickActionsBannerImage src="/svg/dashboard-pay.svg" alt="" />
                            <QuickActionsBannerTextWrapper>
                                <QuickActionsBannerExchangeText>Exchange</QuickActionsBannerExchangeText>
                                <QuickActionsBannerSubText>2.0% Off</QuickActionsBannerSubText>
                            </QuickActionsBannerTextWrapper>
                        </QuickActionsBannerWrapper>
                    </QuickActionsWrapper>
                </ContentContainer>
            </ContentWrap>
        </>


    )
}

export default DashBoard;