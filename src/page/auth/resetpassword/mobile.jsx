import { FormControl, FormLabel, Grid, InputBase } from "@mui/material";
import styled from "styled-components";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// Mobile Header Components
const Logo = styled('img')(({ }) => ({
    justifySelf: 'center',
    overflowClipMargin: 'content-box',
    overflow: 'clip',
    // overflow-clip-margin: content-box;
    // overflow: clip;
}))
const MobileAppBar = styled(Grid)(({ }) => ({
    display: 'flex',
    justifyContent: 'center',
    position: "relative",
    height: "100vh",
    width: '20vw',
    zIndex: 9999,
    // margin:'2rem 0rem'
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
const MobileMainInputBar = styled('div')(({ }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    margin: '1.5rem 0rem'
}))
const MobileInputBar = styled('div')(({ }) => ({
    width: '35rem',
    height: '20rem',
    display: 'flex',
    marginBottom: '1rem',
    marginTop: '4rem',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'white'
}))
const MobileInputWrapper = styled('div')(({ }) => ({
    backgroundColor: "#F2F2F2",
    height: "5.5rem",
    width: "30rem",
    alignItems: "center",
    borderRadius: "5rem",
    padding: "1.5rem 2rem",
    display: "flex",
    border: "1px solid transparent",
    transition: "all 0.2s ease-in-out 0s",
    boxSizing: "inherit",
    margin: '0rem 2.5rem',
}))

const FormTittle = styled('p')(({ }) => ({
    color: '#3F1E4B',
    textAlign: 'center',
    lineHeight: '0.5rem',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
}))
const MobileSubText = styled('p')(({ }) => ({
    margin: '2rem 4rem',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    lineHeight: '1.5rem',
    fontSize: '14px',
    color: '#4F4F4F',
    fontWeight: '500'
}))

// Footer Components
const FooterWrapper = styled('div')(({ }) => ({
    gap: '--space-3',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: '2.4rem'
}))
const SubmitBtn = styled('button')(({ }) => ({
    backgroundColor: 'yellow',
    all: 'unset',
    position: 'relative',
    display: 'flex',
    flexShrink: '0',
    flexGrow: '0',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    whiteSpaceCollapse: 'collapse',
    textWrap: 'nowrap',
    gap: '--space-3',
    transition: 'all 0.2s ease-in-out 0s',
    margin: '0rem 1rem',
    paddingBottom: '50vh'
}))
const SubmitBtnText = styled('div')(({ }) => ({
    position: 'absolute',
    display: 'flex',
    alignTtems: 'center',
    gap: "1.6rem",
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: "0.8rem",
    fontWeight: '500'
}))

{/* Mobile View */ }
const MobileView = ({ redirect }) => {
    return (
        <MobileAppBar container sx={{ display: { xs: 'flex', md: 'none' } }}>

            {/* Header */}
            <MobileLogoGrid item xs={12} position={'fixed'}>
                <MobileLogoGrid item xs={5}>
                    <MobileBackButton onClick={() => redirect('/login')}>
                        <NavigateBeforeIcon />
                    </MobileBackButton>
                </MobileLogoGrid>
                <MobileLogoGrid item xs={7}>
                    <Logo
                        src="/ridima-logo.svg"
                        alt="Paella dish"
                    />
                </MobileLogoGrid>
            </MobileLogoGrid>

            {/* Form */}
            <MobileMainInputBar>
                <MobileInputBar>
                    <FormTittle>Forgot Password</FormTittle>
                    <MobileSubText>Enter your registered email. If we find your email in our system, you would receive a password reset code.</MobileSubText>
                    <MobileInputWrapper>
                        <FormControl sx={{ width: '90%' }}>
                            <FormLabel sx={{ fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'", fontWeight: '600', color: '#4F4F4F', fontSize: '1rem' }}>
                                Email address
                            </FormLabel>
                            <InputBase
                                fullWidth
                                required
                                sx={{ fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'", fontSize: '1.4rem', fontWeight: '500', color: '#4F4F4F', }}
                                id="email"
                                label="Email address"
                                placeholder="e.g you@email.com"
                            />
                        </FormControl>
                    </MobileInputWrapper>
                </MobileInputBar>

                <FooterWrapper>
                    <SubmitBtn>
                        <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48"></path>
                        </svg>
                        <SubmitBtnText>Send code</SubmitBtnText>
                    </SubmitBtn>
                </FooterWrapper>
            </MobileMainInputBar>

        </MobileAppBar>
    )
}

export default MobileView;