import { FormControl, FormLabel, Grid, InputBase } from "@mui/material";
import styled from "styled-components";

// Desktop View Components
const DesktopAppBar = styled(Grid)(({ }) => ({
    backgroundImage: 'url(../svg/auth-bg-white.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))
const DesktopItermBar = styled('div')(({ }) => ({
    justifyContent: 'space-between',
    gap: '.8rem',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: '30vw',
    height: '70vh',
    backgroundColor: 'white',
    borderRadius: '2.4rem',
    paddingTop: '4rem',
}))
const FormTittle = styled('p')(({ }) => ({
    color: '#7165E3',
    textAlign: 'center',
    lineHeight: '0.5rem',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    marginBottom: '3rem'
}))
const MobileSubText = styled('p')(({ }) => ({
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    lineHeight: '1.5rem',
    fontSize: '14px',
    color: '#4F4F4F',
    fontWeight: '500',
    margin: '1rem 5.5rem'
}))
const MobileInputWrapper = styled('div')(({ }) => ({
    backgroundColor: "#F2F2F2",
    height: "5.5rem",
    width: "25vw",
    alignItems: "center",
    borderRadius: "5rem",
    padding: "1.5rem 2rem",
    display: "flex",
    border: "1px solid transparent",
    transition: "all 0.2s ease-in-out 0s",
    boxSizing: "inherit",
    margin: '3rem 2.5vw',
}))

const FooterWrapper = styled('div')(({ }) => ({
    marginTop: '3.2rem',
    gap: '1.6rem',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    display: 'flex',
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


const DesktopView = () => {
    return (
        <DesktopAppBar container sx={{ display: { xs: 'none', md: 'flex' } }}>
            <DesktopItermBar>
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

                <FooterWrapper>
                    <SubmitBtn>
                        <svg width="436" height="80" viewBox="0 0 436 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 39.5413C0 17.7033 17.7033 0 39.5413 0H400.599C420.15 0 436 15.8497 436 35.4013V35.4013C436 54.6367 420.641 70.3523 401.41 70.7933L40.448 79.0723C18.2608 79.5812 0 61.7344 0 39.5413V39.5413Z" fill="#F5CF48">
                            </path>
                        </svg>
                        <SubmitBtnText>Send code</SubmitBtnText>
                    </SubmitBtn>
                </FooterWrapper>

            </DesktopItermBar>
        </DesktopAppBar>
    )
}

export default DesktopView;