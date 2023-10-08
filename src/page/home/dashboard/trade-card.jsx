import { Grid } from "@mui/material";
import styled from "styled-components";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// Mobile Componets
// Mobile Header Components
const MobileAppBar = styled(Grid)(({ }) => ({
    display: 'flex',
    position: "relative",
    height: "100vh",
}))
const MobileLogoGrid = styled(Grid)(({ }) => ({
    // padding: ".8rem",
    alignItems: "center",
    width: "100%",
    top: "0px",
    zIndex: 1,
    backgroundColor: "#FFFFFF",
    display: 'flex'
}))
const MobileBackButton = styled('div')(({ }) => ({
    margin: '0.5rem',
    height: "3.5rem",
    width: "3.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: "0.5rem",
    cursor: "pointer",
}))
const MobileBackBtnText = styled('p')(({ }) => ({
    textAlign: 'center',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1.2rem',
    margin: '1rem 10%'
}))

const SecurityBtnBody = styled('div')(({ }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
}))

const SecurityBtnWrapper = styled('div')(({ }) => ({
    marginTop: '8rem',
    width: '40rem',
    height: '30rem',
    display: 'flex',
    justifyContent: 'center'
}))


const MobileInputArea = styled('div')(({ }) => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
    width: '35rem',
}))
const MobileInputBoxOne = styled('div')(({ }) => ({
    maxWidth: '50rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out 0s',
    gap: '1.6rem',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileImage = styled('img')(({ }) => ({
    maxWidth: '50rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out 0s'
}))
const MobileClickTextArea = styled('div')(({ }) => ({
    borderBottom: "1px solid #F2F2F2",
    paddingTop: '2rem',
    paddingBottom: '2rem',
    gap: '.4rem',
    width: '100%',
    justifyContent: ' space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileClickText = styled('p')(({ }) => ({
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    color: '#4F4F4',
    fontSize: '1rem',
    lineHeight: '0.5rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

const MobileProfileBalanceWrap = styled('div')(({ }) => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
    // backgroundColor:'red'
}))
// Actions Button components
const MobileActionButtonWrapper = styled('div')(({ }) => ({
    marginTop: '1.6rem',
    marginBottom: '1.6rem',
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const MobileActionButtonContainer = styled('div')(({ }) => ({
    marginTop: '4rem',
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileActionButtonImage = styled('img')(({ }) => ({
    width: '100%',
}))
const MobileActionButtonText = styled('p')(({ }) => ({
    position: 'absolute',
    right: '10%',
    top: '30%',
    fontSize: '1.5rem',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    color: '#7165E3',
    letterSpacing: '5px',
    textDecoration: 'none',
}))
const MobileActionButtonTextContainer = styled('div')(({ }) => ({
    position: 'absolute',
    right: '10%',
    top: '30%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const MobileActionButtonTextContainerOne = styled('p')(({ }) => ({
    fontSize: '2.4rem',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '5px',
    textDecoration: 'none',
}))
const MobileActionButtonTextContainerTwo = styled('p')(({ }) => ({
    marginTop: '.4rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    color: '#4F4F4F',
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

// Desktop Components
const DesktopViewWrapper = styled(Grid)(({ }) => ({
    width: 'calc(100vw - 250px)',
    overflowY: 'scroll',
    backgroundColor: '',
    overflow: 'auto',
    height: '100vh',
    transition: 'width 0.3s ease-in-out 0s',
    padding: '2rem 2rem',
}))
const DesktopHeader = styled('div')(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
}))
const DesktopHeaderTitle = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    height: '4rem'
}))
const DesktopHeaderTitleText = styled('p')(({ }) => ({
    transition: 'all 0.3s ease 0s',
    cursor: 'pointer',
    color: '#BDBDBD',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: '1.2rem',
    fontWeight: '500',
    lineHeight: '1rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const DesktopHeaderSubTitleText = styled('p')(({ }) => ({
    transition: 'all 0.3s ease 0s',
    cursor: 'pointer',
    color: '#7165E3',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1rem',
    fontSize: '1rem',
    fontWeight: '700',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const DesktopHeaderLiner = styled('div')(({ }) => ({
    marginTop: '2.4rem',
    marginBottom: '1rem',
    gap: '1.6rem',
    justifyContent: ' space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    height: '2rem',
    width: '100%'
}))
const DesktopHeaderLine = styled('div')(({ }) => ({
    width: '100%',
    height: '1px',
    backgroundColor: '#EBE9FB',
}))
const DesktopHeaderSubTitleTexts = styled('p')(({ }) => ({
    whiteSpace: 'nowrap',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '5',
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const DSecurityBtnWrapper = styled('div')(({ }) => ({
    marginTop: '1rem',
    width: '30rem',
    height: '15rem',
    display: 'flex',
    justifyContent: 'center',
}))


const TradeCard = ({ navTradeCard, navSellCard }) => {

    return (
        <>
            {/* Mobile Nav Bar */}
            <MobileAppBar container sx={{ display: { xs: 'flex', sm: 'flex', lg: 'none', xl: 'none' } }}>
                {/* Logo Box */}
                <MobileLogoGrid item>
                    <MobileLogoGrid item xs={4}>
                        <MobileBackButton onClick={() => navTradeCard()}>
                            <NavigateBeforeIcon />
                        </MobileBackButton>
                    </MobileLogoGrid>
                    <MobileLogoGrid item xs={7}>
                        <MobileBackBtnText>Trade Gift Cards</MobileBackBtnText>
                    </MobileLogoGrid>
                </MobileLogoGrid>

                {/* Main Box */}
                <SecurityBtnBody>
                    <MobileProfileBalanceWrap>
                        <MobileActionButtonWrapper>
                            <MobileActionButtonContainer onClick={() => navSellCard()}>
                                <MobileActionButtonImage src="/svg/hot-card.svg" />
                                <MobileActionButtonText>Sell <br /> Gift Cards</MobileActionButtonText>
                            </MobileActionButtonContainer>
                            <MobileActionButtonContainer>
                                <MobileActionButtonImage src="/svg/buy-card.svg" />
                                <MobileActionButtonText>Buy <br /> Gift Cards</MobileActionButtonText>
                            </MobileActionButtonContainer>
                            <MobileActionButtonContainer>
                                <MobileActionButtonImage src="/svg/check-card.svg" />
                                <MobileActionButtonText>Check <br /> Gift Cards</MobileActionButtonText>
                            </MobileActionButtonContainer>
                            {/* <MobileActionButtonContainer>
                                <MobileActionButtonImage src="/svg/buy-card.svg" />
                                <MobileActionButtonText>Buy <br /> Gift Cards</MobileActionButtonText>
                            </MobileActionButtonContainer> */}
                        </MobileActionButtonWrapper>
                    </MobileProfileBalanceWrap>
                </SecurityBtnBody>
            </MobileAppBar>

            {/* Desktop Nav Bar */}
            <DesktopViewWrapper sx={{ display: { xs: 'none', sm: 'none', lg: 'flex', xl: 'flex' } }}>
                {/* Main Box */}
                <DesktopHeader>
                    <DesktopHeaderTitle>
                        <DesktopHeaderTitleText onClick={() => navTradeCard()}>Profile</DesktopHeaderTitleText>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 8 16" color="#BDBDBD" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z"></path>
                        </svg>
                        <DesktopHeaderSubTitleText>Trade Card</DesktopHeaderSubTitleText>
                    </DesktopHeaderTitle>
                    <SecurityBtnBody>
                        <MobileProfileBalanceWrap>
                            <MobileActionButtonWrapper>
                                <MobileActionButtonContainer>
                                    <MobileActionButtonImage src="/svg/hot-card.svg" />
                                    <MobileActionButtonText>Sell <br /> Gift Cards</MobileActionButtonText>
                                </MobileActionButtonContainer>
                                <MobileActionButtonContainer>
                                    <MobileActionButtonImage src="/svg/buy-card.svg" />
                                    <MobileActionButtonText>Buy <br /> Gift Cards</MobileActionButtonText>
                                </MobileActionButtonContainer>
                                <MobileActionButtonContainer>
                                    <MobileActionButtonImage src="/svg/check-card.svg" />
                                    <MobileActionButtonText>Check <br /> Gift Cards</MobileActionButtonText>
                                </MobileActionButtonContainer>
                                {/* <MobileActionButtonContainer>
                                <MobileActionButtonImage src="/svg/buy-card.svg" />
                                <MobileActionButtonText>Buy <br /> Gift Cards</MobileActionButtonText>
                            </MobileActionButtonContainer> */}
                            </MobileActionButtonWrapper>
                        </MobileProfileBalanceWrap>
                    </SecurityBtnBody>
                </DesktopHeader>
            </DesktopViewWrapper>
        </>
    )
}

export default TradeCard;