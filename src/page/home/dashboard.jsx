import { Grid } from "@mui/material";
import styled from "styled-components";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// Mobile Componets
// Mobile Header Components
const MobileAppBar = styled(Grid)(({ }) => ({
    display: 'flex',
    position: "relative",
    height: "100vh",
    zIndex: 9999
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
    width: '100%',
    height: '15rem',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'red'
}))
const DDDSecurityBtnWrapper = styled('div')(({ }) => ({
    alignItems: 'flex-end',
    gap: '2.4rem',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))

const BackgroundImage = styled('img')(({ }) => ({
    width: '100%',
    height: '100%',
    overflowClipMargin: 'content-box',
    overflow: 'clip',

}))
const WalletBalance = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    position: 'relative',
    width: '60%',
    height: '100%',
    display: 'flex',
}))
const WalletBalanceBox = styled('div')(({ }) => ({
    alignItems: 'flex-start',
    gap: '1.6rem',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    left: '2rem',
    position: 'absolute',
    top: '20%',
    left: '5rem',
    width: '100%',
    height: '100%',
    display: 'flex',
}))
const WalletBalanceSubText = styled('p')(({ }) => ({
    fontSize: '0.9rem',
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

const DDSecurityBtnWrapper = styled('div')(({ }) => ({
    gap: '4.8rem',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const WalletBalanceText = styled('p')(({ }) => ({
    fontSize: '2.8rem',
    color: '#FFFFFF',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const WalletBalanceCurrency = styled('span')(({ }) => ({
    fontSize: '1rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    verticalAlign: 'top',
}))
const WalletBalanceButton = styled('button')(({ }) => ({
    all: 'unset',
    position: 'relative',
    display: 'flex',
    flexShrink: '0',
    flexGrow: '0',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    whiteSpaceCollapse: 'collapse',
    textWrap: 'nowrap',
    gap: '1.6rem',
    transition: 'all 0.2s ease-in-out 0s',
}))
const WalletBalanceButtonText = styled('button')(({ }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',
}))

const ProfileAvatar = styled('img')(({ }) => ({
    width: '4rem'
}))
const WalletProfile = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '40%',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out 0s',
    display: 'flex',
}))
const WalletAvatarWrapper = styled('div')(({ }) => ({
    gap: '1.6rem',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const ProfileText = styled('p')(({ }) => ({
    fontSize: 'var(--fontSizes-7)',
    color: '#3F1E4B',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const WalletAvatarWrappers = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
    width: '50%'
}))
const ProfileSubText = styled('p')(({ }) => ({
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const ProfileButtonWrap = styled('button')(() => ({
    all: 'unset',
    position: 'relative',
    display: 'flex',
    flexShrink: '0',
    flexGrow: '0',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontFamily: 'var(--fonts-medium)',
    whiteSpaceCollapse: 'collapse',
    textWrap: 'nowrap',
    gap: ' var(--space-3)',
    transition: 'all 0.2s ease-in-out 0s',
}))
const ProfileBtnSubText = styled('div')(() => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',
}))

const WalletTradeAction = styled('div')(() => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    position: 'relative',
    width: '40%',
    height: '100%',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out 0s',
    display: 'flex',
}))
const WalletTradeActionImage = styled('img')(() => ({
    width: '100%',
    height: '100%',
}))
const WalletTradeActionText = styled('p')(() => ({
    position: 'absolute',
    top: '60%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'nowrap',
    fontSize: 'var(--fontSizes-4)',
    textAlign: 'left',
    fontFamily: 'var(--fonts-bold)',
    lineHeight: '1.6rem',
    color: 'var(--colors-blue)',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

const WalletExchangeAction = styled('div')(() => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    position: 'relative',
    width: '45%',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out 0s',
    display: 'flex',
}))
const WalletExchangeActionImage = styled('img')(() => ({
    width: '100%',
    height: '100%',
    overflowClipMargin: 'content-box',
    cursor: 'pointer',
    overflow: 'clip',
}))
const WalletExchangeActionTextWrapper = styled('div')(() => ({
    position: 'absolute',
    top: '60%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    gap: 'var(--space-1)',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const WalletExchangeActionTextOne = styled('p')(() => ({
    fontSize: 'var(--fontSizes-4)',
    color: 'var(--colors-purple)',
    textAlign: 'left',
    fontFamily: 'var(--fonts-bold)',
    lineHeight: 'var(--lineHeights-normal)',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const WalletExchangeActionTextTwo = styled('p')(() => ({
    fontSize: 'var(--fontSizes-4)',
    color: 'var(--colors-purple)',
    textAlign: 'left',
    fontFamily: 'var(--fonts-bold)',
    lineHeight: 'var(--lineHeights-normal)',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

const DashBoard = () => {

    return (
        <>
            {/* Mobile Nav Bar */}
            <MobileAppBar container sx={{ display: { lg: 'none', xl: 'none', sm: 'flex', xs: 'flex' } }}>
                {/* Logo Box */}
                <MobileLogoGrid item xs={12} position={'fixed'}>
                    <MobileLogoGrid item xs={4}>
                        <MobileBackButton>
                            <NavigateBeforeIcon />
                        </MobileBackButton>
                    </MobileLogoGrid>
                    <MobileLogoGrid item xs={7}>
                        <MobileBackBtnText>Security</MobileBackBtnText>
                    </MobileLogoGrid>
                </MobileLogoGrid>

                {/* Main Box */}
                <SecurityBtnBody>
                    <SecurityBtnWrapper>
                        <MobileInputArea>
                            <MobileInputBoxOne>
                                <MobileImage src="/svg/pin.svg" />
                                <MobileClickTextArea>
                                    <MobileClickText>
                                        Change Pin
                                    </MobileClickText>
                                    <MobileImage src="/svg/chevron-right.svg" />
                                </MobileClickTextArea>
                            </MobileInputBoxOne>
                            <MobileInputBoxOne>
                                <MobileImage src="/svg/password.svg" />
                                <MobileClickTextArea>
                                    <MobileClickText>
                                        Change Password
                                    </MobileClickText>
                                    <MobileImage src="/svg/chevron-right.svg" />
                                </MobileClickTextArea>
                            </MobileInputBoxOne>
                        </MobileInputArea>
                    </SecurityBtnWrapper>
                </SecurityBtnBody>
            </MobileAppBar>

            {/* Desktop Nav Bar */}
            <DesktopViewWrapper sx={{ display: { lg: 'flex', xl: 'flex', sm: 'none', xs: 'none' } }}>
                {/* Main Box */}
                <DesktopHeader>
                    <DesktopHeaderTitle>
                        <DesktopHeaderTitleText>Hello, </DesktopHeaderTitleText>
                        <DesktopHeaderSubTitleText> axus</DesktopHeaderSubTitleText>
                    </DesktopHeaderTitle>
                    <DDSecurityBtnWrapper>
                        <WalletBalance>
                            <BackgroundImage src="/svg/dashboard-purple.svg" />
                            <WalletBalanceBox>
                                <WalletBalanceSubText>Naira Wallet Balance</WalletBalanceSubText>
                                <WalletBalanceText>0.00<WalletBalanceCurrency>NGN</WalletBalanceCurrency></WalletBalanceText>
                                <WalletBalanceButton>
                                    <svg width="180" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48"></path>
                                    </svg>
                                    <WalletBalanceButtonText>Withdraw</WalletBalanceButtonText>
                                </WalletBalanceButton>
                            </WalletBalanceBox>
                        </WalletBalance>
                        <WalletProfile>
                            <BackgroundImage src="/svg/dashboard-yellow.svg" />
                            <WalletBalanceBox>
                                <WalletAvatarWrapper>
                                    <WalletAvatarWrappers>
                                        <ProfileText>70%</ProfileText>
                                        <WalletBalanceSubText>Profile Completed</WalletBalanceSubText>
                                    </WalletAvatarWrappers>
                                    <Grid sx={{ display: { lg: 'flex', xl: 'flex', sm: 'none', xs: 'none' } }}>
                                        <ProfileAvatar src="/svg/dashboard-avatar.svg" />
                                    </Grid>
                                </WalletAvatarWrapper>
                                <ProfileButtonWrap>
                                    <svg width="180" height="73" viewBox="0 0 264 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 36.352C0 16.2753 16.2753 0 36.352 0H231.058C249.251 0 264 14.7486 264 32.942V32.942C264 50.6864 249.945 65.2425 232.211 65.8638L37.6249 72.6817C17.0618 73.4022 0 56.9277 0 36.352V36.352Z" fill="#3F1E4B"></path>
                                    </svg>
                                    <ProfileBtnSubText>
                                        <ProfileSubText>Complete Profile</ProfileSubText>
                                    </ProfileBtnSubText>
                                </ProfileButtonWrap>
                            </WalletBalanceBox>
                        </WalletProfile>
                    </DDSecurityBtnWrapper>
                    <DesktopHeaderLiner>
                        <DesktopHeaderSubTitleTexts>Quick Actions</DesktopHeaderSubTitleTexts>
                        <DesktopHeaderLine />
                    </DesktopHeaderLiner>
                    <DDDSecurityBtnWrapper>
                        <WalletTradeAction>
                            <WalletTradeActionImage src="/svg/dashboard-trade.svg" />
                            <WalletTradeActionText>Trade<br />Gift Cards</WalletTradeActionText>
                        </WalletTradeAction>
                        <WalletExchangeAction>
                            <WalletExchangeActionImage src="/svg/dashboard-pay.svg" />
                            <WalletExchangeActionTextWrapper>
                                <WalletExchangeActionTextOne>Exchange</WalletExchangeActionTextOne>
                                <WalletExchangeActionTextTwo>2.0% Off</WalletExchangeActionTextTwo>
                            </WalletExchangeActionTextWrapper>
                        </WalletExchangeAction>
                    </DDDSecurityBtnWrapper>
                </DesktopHeader>
            </DesktopViewWrapper>
        </>
    )
}

export default DashBoard;