import { Grid } from "@mui/material";
import styled from "styled-components";
// Mobile Componets
// Mobile Header Components
export const MobileAppBar = styled(Grid)(({ }) => ({
    display: 'flex',
    position: "relative",
    height: "100vh",
    zIndex: 9999
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

export const SecurityBtnWrapper = styled('div')(({ }) => ({
    marginTop: '8rem',
    width: '40rem',
    height: '30rem',
    display: 'flex',
    justifyContent: 'center'
}))


export const MobileInputArea = styled('div')(({ }) => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
    width: '35rem',
}))
export const MobileInputBoxOne = styled('div')(({ }) => ({
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
export const MobileImage = styled('img')(({ }) => ({
    maxWidth: '50rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out 0s'
}))
export const MobileClickTextArea = styled('div')(({ }) => ({
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
export const MobileClickText = styled('p')(({ }) => ({
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    color: '#4F4F4',
    fontSize: '1rem',
    lineHeight: '0.5rem',
    letterSpacing: '0.2px',
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
export const DesktopHeaderLiner = styled('div')(({ }) => ({
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
export const DesktopHeaderLine = styled('div')(({ }) => ({
    width: '100%',
    height: '1px',
    backgroundColor: '#EBE9FB',
}))
export const DesktopHeaderSubTitleTexts = styled('p')(({ }) => ({
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
export const DSecurityBtnWrapper = styled('div')(({ }) => ({
    marginTop: '1rem',
    width: '30rem',
    height: '15rem',
    display: 'flex',
    justifyContent: 'center',
}))