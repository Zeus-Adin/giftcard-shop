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
    fontSize: '1.2rem',
    lineHeight: '0.5rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))


// Desktop Components
const DesktopViewWrapper = styled(Grid)(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'red'

}))
const DesktopHeader = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const DesktopHeaderTitle = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const DesktopHeaderTitleText = styled('p')(({ }) => ({
    transition: 'all 0.3s ease 0s',
    cursor: 'pointer',
    color: '#BDBDBD',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const DesktopSubHeader = styled('div')(({ }) => ({

}))

const Security = () => {

    return (
        <>
            {/* Mobile Nav Bar */}
            <MobileAppBar container sx={{ display: { xs: 'flex', md: 'none' } }}>
                {/* Logo Box */}
                <MobileLogoGrid item xs={12} position={'fixed'} sx={{ display: { xs: 'flex', md: 'none' } }}>
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
            <DesktopViewWrapper sx={{ display: { xs: 'none', md: 'flex' } }}>
                {/* Main Box */}
                <DesktopHeader>
                    <DesktopHeaderTitle>
                        <DesktopHeaderTitleText>Profile</DesktopHeaderTitleText>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 8 16" color="#BDBDBD" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z"></path>
                        </svg>
                    </DesktopHeaderTitle>

                </DesktopHeader>
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
            </DesktopViewWrapper>
        </>
    )
}

export default Security;