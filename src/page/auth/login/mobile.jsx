import { Button, CardMedia, Fab, FormControl, FormHelperText, FormLabel, Grid, InputBase, TextField, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
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

// MobileForm Components
const FormWraper = styled(Grid)(({ }) => ({
    // padding: "var(--space - 2)",
    margin: '5rem 0rem',
    top: "0px",
    zIndex: 0,
    display: 'flex',
    // backgroundColor: 'red',
    alignItems: 'center',
    height: '50vh'

}))
const FormTittle = styled('p')(({ }) => ({
    color: '#3F1E4B',
    textAlign: 'center',
    lineHeight: '0.5rem',
    fontSize: '2.8rem',
    fontWeight: 'bold',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    marginBottom: '4rem',
}))
const InputsWrap = styled('div')(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    // backgroundColor: 'black'
}))
const MobileInputWrapper = styled('div')(({ }) => ({
    backgroundColor: "#F2F2F2",
    height: "6rem",
    width: "32rem",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    borderRadius: "5rem",
    padding: "1.5rem 2rem",
    display: "flex",
    gap: "0.5rem",
    border: "1px solid transparent",
    transition: "all 0.2s ease-in-out 0s",
    marginBottom: '0.5rem',
    padding: "0",
    boxSizing: "inherit"
}))
const MobileSubText = styled('span')(({ }) => ({
    marginTop: "0.2rem",
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: "1.2rem",
    textAlign: "center",
    lineHeight: "2.4rem",
    color: "#7165E3",
    letterSpacing: "0.2px",
    textDecoration: "none"
}))

// Footer Components
const FooterWrapper = styled('div')(({ }) => ({
    gap: '--space-3',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: '5rem'
}))
const ForgotButton = styled('button')(({ }) => ({
    cursor: 'pointer',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    lineHeight: "2.4rem",
    color: "#7165E3",
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    marginBottom: '1rem'
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
    fontFamily: '--fonts-medium',
    whiteSpaceCollapse: 'collapse',
    textWrap: 'nowrap',
    gap: '--space-3',
    transition: 'all 0.2s ease-in-out 0s',
}))
const SubmitBtnText = styled('div')(({ }) => ({
    position: 'absolute',
    display: 'flex',
    alignTtems: 'center',
    gap: "1.6rem",
    fontFamily: "--fonts-bold",
    fontSize: "medium"
}))
const FooterText = styled('p')(({ }) => ({
    marginTop: '.4rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    color: '#4F4F4F',
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '2.4rem',
    letterSpacing: ' 0.2px',
    textDecoration: 'none',
    display: 'block',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px'
}))
const FooterBtn = styled('button')(({ }) => ({
    cursor: 'pointer',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    lineHeight: '2.4rem',
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontSize: '1.2rem'
}))

{/* Mobile View */ }
const MobileView = ({ redirect }) => {
    return (
        <MobileAppBar container sx={{ display: { xs: 'flex', md: 'none' } }}>

            {/* Header */}
            <MobileLogoGrid item xs={12} position={'fixed'}>
                <MobileLogoGrid item xs={5}>
                    <MobileBackButton onClick={() => redirect('/')}>
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
            <FormWraper container xs={12}>
                <Grid xs={12} height={'50vh'}>
                    <InputsWrap>
                        <FormTittle>Login</FormTittle>
                        <MobileInputWrapper>
                            <FormControl sx={{ width: '28rem' }}>
                                <FormLabel>Email address</FormLabel>
                                <InputBase
                                    fullWidth
                                    required
                                    id="email"
                                    label="Email address"
                                    placeholder="Email..."
                                />
                            </FormControl>
                        </MobileInputWrapper>
                        <MobileInputWrapper>
                            <FormControl sx={{ width: '28rem' }}>
                                <FormLabel>Password</FormLabel>
                                <InputBase
                                    required
                                    id="password"
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <VisibilityIcon color="primary"/>
                        </MobileInputWrapper>
                        <MobileSubText>Password should be minimum of 8 Characters</MobileSubText>

                    </InputsWrap>

                    <FooterWrapper>
                        <ForgotButton>Forgot Password</ForgotButton>
                        <SubmitBtn>
                            <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48"></path>
                            </svg>
                            <SubmitBtnText>Login</SubmitBtnText>
                        </SubmitBtn>
                        <FooterText color="black">Don't have an account? <FooterBtn>Create an account</FooterBtn></FooterText>
                    </FooterWrapper>
                </Grid>

            </FormWraper>

        </MobileAppBar>
    )
}

export default MobileView;