import { Grid } from "@mui/material";
import styled from "styled-components";
// Mobile Componets
// Mobile Header Components
export const MobileAppBar = styled(Grid)(({ }) => ({
    display: 'flex',
    position: "relative",
    height: "100vh",
}))
export const MobileLogoGrid = styled(Grid)(({ }) => ({
    // padding: ".8rem",
    alignItems: "center",
    width: "100%",
    top: "0px",
    zIndex: 1,
    backgroundColor: "#FFFFFF",
    display: 'flex'
}))
export const MobileBackButton = styled('div')(({ }) => ({
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
export const MobileBackBtnText = styled('p')(({ }) => ({
    textAlign: 'center',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1.2rem',
    margin: '1rem 10%'
}))

export const SecurityBtnBody = styled('div')(({ }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
}))

export const MobileProfileBalanceWrap = styled('div')(({ }) => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
    // backgroundColor:'red'
}))
// Actions Button components
export const MobileActionButtonWrapper = styled('div')(({ }) => ({
    marginTop: '1.6rem',
    marginBottom: '1.6rem',
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const MobileActionButtonContainer = styled('div')(({ }) => ({
    marginTop: '4rem',
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const MobileActionButtonImage = styled('img')(({ }) => ({
    width: '100%',
}))
export const MobileActionButtonText = styled('p')(({ }) => ({
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

// Desktop Components
export const DesktopViewWrapper = styled(Grid)(({ }) => ({
    width: 'calc(100vw - 250px)',
    overflowY: 'scroll',
    backgroundColor: '',
    overflow: 'auto',
    height: '100vh',
    transition: 'width 0.3s ease-in-out 0s',
    padding: '2rem 2rem',
}))
export const DesktopHeader = styled('div')(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
}))
export const DesktopHeaderTitle = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    height: '4rem'
}))
export const DesktopHeaderTitleText = styled('p')(({ }) => ({
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
export const DesktopHeaderSubTitleText = styled('p')(({ }) => ({
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