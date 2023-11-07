import { Grid } from "@mui/material";
import styled from "styled-components";
// Mobile Componets
// Mobile Header Components
export const  MobileAppBar = styled(Grid)(({ }) => ({
    display: 'flex',
    position: "relative",
    height: "100vh",
}))
export const  MobileHeader = styled('div')(({ }) => ({
    position: 'absolute',
    width: '100%',
    height: '15rem',
    top: '0px',
    left: '0px',
}))
export const  MobileHeaderImage = styled('img')(({ }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}))
export const  MobileHeaderTextWrapper = styled('div')(({ }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    padding: '2.2rem',
    gap: '2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const  MobileHeaderTextInnerWrapper = styled('div')(({ }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent: 'center',
    alignItems: 'center',
}))
export const  MobileHeaderBackButtonWrapper = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const  MobileHeaderBackButtonInnerWrapper = styled('div')(({ }) => ({
    background: 'rgba(255, 255, 255, 0.1)',
    height: '4rem',
    width: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '.8rem',
    cursor: 'pointer',
}))
export const  MobileHeaderText = styled('p')(({ }) => ({
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: '1.3rem',
    textAlign: 'center',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const  MobileHeaderInputWrapper = styled('div')(({ }) => ({
    backgroundColor: 'rgb(104, 91, 225)',
    borderRadius: '4rem',
    padding: '1rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const  MobileHeaderInputImage = styled('img')(({ }) => ({

}))
export const  MobileHeaderInput = styled('input')(({ }) => ({
    all: 'unset',
    marginLeft: '2rem',
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    width: '100%',
    fontSize: '16px',
}))

// Cards Components
export const  CardsWrapper = styled('div')(({ }) => ({
    marginTop: '16rem',
    gap: '2.4rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
    height: '100%',
}))
export const  CardsInnerWrapper = styled('div')(({ }) => ({
    flexWrap: 'wrap',
    gap: '2.4rem',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
export const  CardItermWrapper = styled('div')(({ }) => ({
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out 0s',
    justifyContent: 'flex-start',
    alignCtems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
    marginTop: '1rem'
}))
export const  CardItermInnerWrapper = styled('div')(({ }) => ({
    position: 'relative',
    gap: '3.2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const  CardItermContentWrapper = styled('div')(({ }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const  CardItermContentText = styled('p')(({ }) => ({
    color: '#3F1E4B',
    fontSize: '1.6rem',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '600'
}))
export const  CardItermContentImage = styled('img')(({ }) => ({
    width: '6rem'
}))

export const  SecurityBtnBody = styled('div')(({ }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
}))

// Desktop Components
export const  DesktopViewWrapper = styled(Grid)(({ }) => ({
    width: 'calc(100vw - 250px)',
    overflowY: 'scroll',
    backgroundColor: '',
    overflow: 'auto',
    height: '100vh',
    transition: 'width 0.3s ease-in-out 0s',
    padding: '2rem 2rem',
}))
