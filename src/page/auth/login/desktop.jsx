import { Button, CardMedia, Fab, FormControl, FormHelperText, FormLabel, Grid, InputBase, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';

// Desktop View Components
const DesktopAppBar = styled(Grid)(({ }) => ({
    height: "100%",
    width: '100%',
    backgroundColor: '#7464e4',
    position: "relative",
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'center'
}))
const DesktopInnerBar = styled(Grid)(({ }) => ({
    width: '85rem',
    height: '75vh',
    backgroundColor: 'transparent',
    borderRadius: '--radii-4',
    overflow: 'hidden',
    display: 'flex'
}))

const SlideImageShowBar = styled('img')(({ }) => ({
    backgroundColor: 'grey',
    width: '40%',
    height: '75vh',
    borderTopLeftRadius: '2.4rem',
    borderBottomLeftRadius: '2.4rem',
    objectFit: 'cover'
}))

const DesktopMainBar = styled('div')(({ }) => ({
    backgroundColor: 'white',
    width: '60%',
    height: '100%',
    borderTopRightRadius: '2.4rem',
    borderBottomRightRadius: '2.4rem'
}))

const FormWraper = styled(Grid)(({ }) => ({
    // padding: "var(--space - 2)",
    // margin: '5rem 0rem',
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
    height: '100%',
    // backgroundColor: 'black'
}))
const MobileInputWrapper = styled('div')(({ }) => ({
    backgroundColor: "#F2F2F2",
    height: "6rem",
    width: "27rem",
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

const DesktopView = () => {
    const [timerValue, setTimerValue] = useState(1);
    // Function for image slides
    useEffect(() => {
        const updateTimer = () => {
            setTimerValue((prevValue) => (prevValue % 5) + 1);
        };
        const intervalId = setInterval(updateTimer, 5000);
        return () => clearInterval(intervalId);
    }, [])

    console.log(timerValue)

    return (
        <DesktopAppBar container xs={12} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <DesktopInnerBar>
                {/* Banner */}
                <SlideImageShowBar src={`/svg/splash-${timerValue}.svg`} />

                {/* Login */}
                <DesktopMainBar>
                    {/* Form */}
                    <FormWraper container xs={12}>
                        <Grid xs={12} height={'100%'}>
                            <InputsWrap>
                                <FormTittle>Login</FormTittle>
                                <MobileInputWrapper>
                                    <FormControl sx={{ width: '90%' }}>
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
                                    <FormControl sx={{ width: '80%' }}>
                                        <FormLabel>Password</FormLabel>
                                        <InputBase
                                            required
                                            id="password"
                                            placeholder="Password"
                                            type="password"
                                            autoComplete="current-password"
                                        />
                                    </FormControl>
                                    <VisibilityIcon color="primary" />
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
                            </FooterWrapper>
                        </Grid>

                    </FormWraper>
                </DesktopMainBar>
            </DesktopInnerBar>
        </DesktopAppBar>
    )
}

export default DesktopView;