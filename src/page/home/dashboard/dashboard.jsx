import { Grid } from "@mui/material";
import styled from "styled-components";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// Mobile Componets
// Mobile Header Components
const MobileAppBar = styled(Grid)(({ }) => ({
    position: 'relative',
    height: '100vh',
}))
const MobileGridBar = styled(Grid)(({ }) => ({
    width: '100%',
    height: '100vh',
    padding: '.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr repeat(2, minmax(min-content, 20rem)) 1fr',
    position: 'relative',
}))
const MobileContentBar = styled(Grid)(({ }) => ({
    marginTop: '.8rem',
    gridColumn: '2 / 4',
    height: 'calc(100% + 10rem)',
}))

// Mobile Header Bar
const MobileHeaderBar = styled(Grid)(({ }) => ({
    marginBottom: '1.6rem',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileHeaderTextWrapper = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const MobileHeaderSalutationText = styled('p')(({ }) => ({
    color: '#BDBDBD',
    fontSize: '2.4rem',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileHeaderUserText = styled('p')(({ }) => ({
    fontSize: '2.4rem',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileHeaderUserNotificationIconWrapper = styled('div')(({ }) => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileHeaderUserNotificationIcon = styled('div')(({ }) => ({
    height: '48px',
    width: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: '1.8rem',
    cursor: 'pointer',
    padding: '1.2rem',
    position: 'relative',
}))
const MobileHeaderUserNotificationIconImage = styled('img')(({ }) => ({
    height: '100%',
    width: '100%',
}))

// Mobile Profile Balance Components
const MobileProfileBalanceWrap = styled('div')(({ }) => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
    // backgroundColor:'red'
}))
const MobileProfileBalanceWrapper = styled('div')(({ }) => ({
    width: '50%',
    position: 'relative',
}))
const MobileProfileBalanceTextWrapper = styled('div')(({ }) => ({
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
    padding: '2.5rem 2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const MobileProfileBalanceText = styled('p')(({ }) => ({
    marginBottom: '6.4rem',
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileProfileBalance = styled('div')(({ }) => ({
    gap: '.4rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const MobileProfileBalanceTextSubtext = styled('p')(({ }) => ({
    color: '#F3F2FD',
    fontSize: '1.2rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileProfileBalanceTextValueWrapper = styled('div')(({ }) => ({
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileProfileBalanceTextValue = styled('p')(({ }) => ({
    color: 'white',
    fontSize: '2.4rem',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileProfileBalanceTextValueCurrency = styled('p')(({ }) => ({
    fontSize: '1.2rem',
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileProfileBalanceButtonWrapper = styled('div')(({ }) => ({
    marginTop: '2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileProfileBalanceButton = styled('button')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
    height: '4rem',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
}))
const MobileProfileBalanceButtonTextWrapper = styled('div')(({ }) => ({
    position: 'absolute',
    height: '100%',
    width: '100%',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileProfileBalanceButtonText = styled('p')(({ }) => ({
    marginTop: '.4rem',
    color: 'black',
    fontSize: '1.2rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

// Mobile Profile
const MobileProfileContentWrapper = styled('div')(({ }) => ({
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
    padding: '2.5rem 2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const MobileProfileContentTextWrapper = styled('div')(({ }) => ({
    marginTop: '.4rem',
    marginBottom: '.4rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '.8rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',

}))
const MobileProfileContentTextImage = styled('img')(({ }) => ({
    height: '4rem'
}))
const MobileProfileContentText = styled('p')(({ }) => ({
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    fontSize: '2.8rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileProfileContentSubText = styled('p')(({ }) => ({
    marginBottom: '2rem',
    fontSize: '1.2rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    color: '#4F4F4F',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileProfileContentButtonWrapper = styled('div')(({ }) => ({
    marginTop: '2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileProfileContentButton = styled('button')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
    height: '4rem',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
}))
const MobileProfileButtonContent = styled('div')(({ }) => ({
    position: 'absolute',
    height: '100%',
    width: '100%',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileProfileButtonContentText = styled('p')(({ }) => ({
    marginTop: '.4rem',
    color: 'black',
    fontSize: '1.2rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
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
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileActionButtonImage = styled('img')(({ }) => ({
    width: '100%'
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

const DashBoard = ({ navTradeCard }) => {

    return (
        <>
            {/* Mobile Nav Bar */}
            <MobileAppBar container sx={{ display: { lg: 'none', xl: 'none', sm: 'flex', xs: 'flex' } }}>
                <MobileGridBar>
                    <MobileContentBar>
                        {/* Header */}
                        <MobileHeaderBar>
                            <MobileHeaderTextWrapper>
                                <MobileHeaderSalutationText>Hello,</MobileHeaderSalutationText>
                                <MobileHeaderUserText>axus</MobileHeaderUserText>
                            </MobileHeaderTextWrapper>
                            <MobileHeaderUserNotificationIconWrapper>
                                <MobileHeaderUserNotificationIcon>
                                    <MobileHeaderUserNotificationIconImage src="/svg/notification.svg" />
                                </MobileHeaderUserNotificationIcon>
                            </MobileHeaderUserNotificationIconWrapper>
                        </MobileHeaderBar>

                        {/* Profile Wrapper */}
                        <MobileProfileBalanceWrap>

                            {/* Balance Wrapper */}
                            <MobileProfileBalanceWrapper>
                                <svg width="100%" height="100%" viewBox="0 0 175 239" fill="none" xmlns="http://www.w3.org/2000/svg" className="mobilebalancesvg">
                                    <path d="M175 24C175 10.7452 164.255 0 151 0H24C10.7452 0 0 10.7452 0 24V207.332C0 220.055 9.92858 230.567 22.6308 231.293L149.631 238.55C163.401 239.337 175 228.382 175 214.589V24Z" fill="#7165E3">
                                    </path>
                                </svg>
                                <MobileProfileBalanceTextWrapper>
                                    <MobileProfileBalanceText>Naira Wallet</MobileProfileBalanceText>
                                    <MobileProfileBalance>
                                        <MobileProfileBalanceTextSubtext>Balance</MobileProfileBalanceTextSubtext>
                                        <MobileProfileBalanceTextValueWrapper>
                                            <MobileProfileBalanceTextValue>0.00</MobileProfileBalanceTextValue>
                                            <MobileProfileBalanceTextValueCurrency>NGN</MobileProfileBalanceTextValueCurrency>
                                        </MobileProfileBalanceTextValueWrapper>
                                    </MobileProfileBalance>
                                    <MobileProfileBalanceButtonWrapper>
                                        <MobileProfileBalanceButton>
                                            <svg width="100%" height="47" viewBox="0 0 127 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.60451e-06 23.2329C7.18362e-07 10.4017 10.4017 0 23.2329 0H106.426C117.789 0 127 9.21126 127 20.5739C127 31.4265 118.57 40.4128 107.74 41.1058L24.7165 46.4184C11.329 47.2751 2.53096e-06 36.6478 1.60451e-06 23.2329Z" fill="#F5CF48"></path>
                                            </svg>
                                            <MobileProfileBalanceButtonTextWrapper>
                                                <MobileProfileBalanceButtonText>Withdraw</MobileProfileBalanceButtonText>
                                            </MobileProfileBalanceButtonTextWrapper>
                                        </MobileProfileBalanceButton>
                                    </MobileProfileBalanceButtonWrapper>
                                </MobileProfileBalanceTextWrapper>
                            </MobileProfileBalanceWrapper>

                            {/* Profile Wrapper */}
                            <MobileProfileBalanceWrapper>
                                <svg width="100%" height="100%" viewBox="0 0 175 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M175 24C175 10.7452 164.255 0 151 0H24C10.7452 0 0 10.7452 0 24V207.332C0 220.055 9.92858 230.567 22.6308 231.293L149.631 238.55C163.401 239.337 175 228.382 175 214.589V24Z" fill="#F5CF48"></path>
                                </svg>
                                <MobileProfileContentWrapper>
                                    <MobileProfileContentTextWrapper>
                                        <MobileProfileContentTextImage src="/svg/dashboard-avatar.svg" />
                                        <MobileProfileContentText>70%</MobileProfileContentText>
                                        <MobileProfileContentSubText>Profile complete</MobileProfileContentSubText>
                                    </MobileProfileContentTextWrapper>
                                    <MobileProfileContentButtonWrapper>
                                        <MobileProfileContentButton>
                                            <svg width="100%" height="47" viewBox="0 0 127 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="mobilebalancesvg">
                                                <path d="M1.60451e-06 23.2329C7.18362e-07 10.4017 10.4017 0 23.2329 0H106.426C117.789 0 127 9.21126 127 20.5739C127 31.4265 118.57 40.4128 107.74 41.1058L24.7165 46.4184C11.329 47.2751 2.53096e-06 36.6478 1.60451e-06 23.2329Z" fill="rgba(63, 30, 75, 0.1)"></path>
                                            </svg>
                                            <MobileProfileButtonContent>
                                                <MobileProfileButtonContentText>Complete Profle</MobileProfileButtonContentText>
                                            </MobileProfileButtonContent>
                                        </MobileProfileContentButton>
                                    </MobileProfileContentButtonWrapper>
                                </MobileProfileContentWrapper>
                            </MobileProfileBalanceWrapper>
                        </MobileProfileBalanceWrap>
                        <DesktopHeaderLiner>
                            <DesktopHeaderSubTitleTexts>Quick Actions</DesktopHeaderSubTitleTexts>
                            <DesktopHeaderLine />
                        </DesktopHeaderLiner>
                        <MobileProfileBalanceWrap>
                            <MobileActionButtonWrapper>
                                <MobileActionButtonContainer onClick={() => navTradeCard()}>
                                    <MobileActionButtonImage src="/svg/dashboard-trade.svg" />
                                    <MobileActionButtonText>Trade <br /> Gift Cards</MobileActionButtonText>
                                </MobileActionButtonContainer>
                                <MobileActionButtonContainer>
                                    <MobileActionButtonImage src="/svg/dashboard-pay.svg" />
                                    <MobileActionButtonTextContainer>
                                        <MobileActionButtonTextContainerOne>Exchange</MobileActionButtonTextContainerOne>
                                        <MobileActionButtonTextContainerTwo>2.0% Off</MobileActionButtonTextContainerTwo>
                                    </MobileActionButtonTextContainer>
                                </MobileActionButtonContainer>
                            </MobileActionButtonWrapper>
                        </MobileProfileBalanceWrap>
                    </MobileContentBar>
                </MobileGridBar>
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
                        <WalletTradeAction onClick={() => navTradeCard()}>
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