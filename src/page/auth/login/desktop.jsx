import { Button, CardMedia, Fab, FormControl, FormHelperText, FormLabel, Grid, InputBase, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';

// Desktop View Components
const DesktopAppBar = styled(Grid)(({ }) => ({
    backgroundImage: 'url(../svg/auth-bg-purple.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))
const DesktopInnerBar = styled(Grid)(({ }) => ({
    width: '60rem',
    height: '75vh',
    backgroundColor: 'transparent',
    borderRadius: '--radii-4',
    overflow: 'hidden',
    display: 'flex'
}))

const SlideImageShowBar = styled('img')(({ }) => ({
    width: '100%',
    height: '75vh',
    objectFit: 'cover',
    borderTopLeftRadius: '2.4rem',
    borderBottomLeftRadius: '2.4rem'
}))
const SlideBar = styled('div')(({ }) => ({
    backgroundColor: 'grey',
    width: '40%',
    height: '100%',
    borderTopLeftRadius: '2.4rem',
    borderBottomLeftRadius: '2.4rem',
}))

const DesktopMainBar = styled('div')(({ }) => ({
    backgroundColor: 'transparent',
    width: '60%',
    height: '100%',
}))

const FormWraper = styled(Grid)(({ }) => ({
    // padding: "var(--space - 2)",
    // margin: '5rem 0rem',
    top: "0px",
    zIndex: 0,
    display: 'flex',
    // backgroundColor: 'red',
    alignItems: 'center',
    width: '100%',
    height: '100%'

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
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopRightRadius: '2.4rem',
    borderBottomRightRadius: '2.4rem',
    // padding: '3.2rem'
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
    justifyContent:'center',
    textJustify: 'center',
    display:'flex',
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
    marginTop: '1rem'
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

const DesktopView = ({redirect}) => {
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
                <SlideBar>
                    <SlideImageShowBar src={`/svg/splash-${timerValue}.svg`} />
                </SlideBar>

                {/* Login */}
                <DesktopMainBar>
                    <InputsWrap>
                        <Grid height={'100%'} sx={{ justifyContent: 'center' }}>
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
                            <FooterWrapper>
                                <ForgotButton onClick={()=>redirect('/forgotpassword')}>Forgot Password</ForgotButton>
                                <SubmitBtn>
                                    <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48"></path>
                                    </svg>
                                    <SubmitBtnText>Login</SubmitBtnText>
                                </SubmitBtn>
                            </FooterWrapper>
                        </Grid>

                    </InputsWrap>
                </DesktopMainBar>
            </DesktopInnerBar>
        </DesktopAppBar>
    )
}

export default DesktopView;