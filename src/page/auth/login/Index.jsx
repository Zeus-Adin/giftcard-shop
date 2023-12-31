import { Grid } from "@mui/material";
import styled from "styled-components";
import {
    // MobileHeader Components
    MobileHeaderWrapper,
    MobileHeaderBackButtonWrapper,
    MobileHeaderBackButtonContent,
    MobileHeaderLogo,
    // Content Components
    Content, ContentWrapper, ContentWrap, FormWrapper, FormHeaderText, FormInputWrapper, FormInputBoxWrapper,
    FormInputBoxWrap, FormInputBox, FormInputLabel, FormInput, FormInputButton, FormInputSubtext, FormSubmitButtonWrapper, FormForgotButton,
    FormSubmitButton, FormSubmitButtonText, FormSubmitButtonSubText, FormLoginButton
} from "./components"
import {
    DesktopWrapper, DesktopWrap, DesktopContentWrapper, DesktopContentWrap, DesktopContent, DesktopSlideImage, DesktopContentInputArea,
    DesktopHeaderText, FormContentWrapper, FormInputWrap, FormInputContent, FormToggleButton, FormSubtext, FormButtonWrapper, FormButton,
    FormButtonText, FormButtonSubText, FormLoginSubTextButton, DesktopFloatImage
} from '../register/components'
import { useEffect, useState } from "react";
import { login } from "./functions";
import Cookies from "js-cookie";
import CircularProgress from '@mui/material/CircularProgress';

const AppGrid = styled('div')(({ }) => ({
    position: 'relative',
    height: '100vh',
}))

const appOrigin = window.location.origin;
const Login = ({ redirect, handleOpenAlertBox, setAlertText }) => {
    const [timerValue, setTimerValue] = useState(1);
    const [passwordType, setPasswordType] = useState('password');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [submitBtn, setSubmitBtn] = useState(true);
    const [loading, setLoading] = useState(false);

    function handleTextChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmailValue(value)
                break;
            case 'pwd':
                setPasswordType('password')
                setPasswordValue(value)
                break;
        }
    }

    function handleShowPassword() {
        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    async function authenticate() {
        setLoading(true);
        const res = await login(emailValue, passwordValue)
        if (res.authstate) {
            setSubmitBtn(true);
            Cookies.set(appOrigin, JSON.stringify(res.result), { expires: 0.5 / 48 });
            const { admin, activation } = res.result;
            if (admin && activation) {
                setAlertText({ title: 'Success', paragraph: res.message, reason: 'success', sender: 'admin' })
                handleOpenAlertBox()
                return
            }

            if (activation) {
                setAlertText({ title: 'Success', paragraph: res.message, reason: 'success', sender: 'auth' })
            } else {
                setAlertText({ title: 'Error', paragraph: 'Account not activated!', reason: 'warning', sender: 'auth' })
                Cookies.remove(appOrigin)
            }

            handleOpenAlertBox()
        }
        if (!res.authstate) {
            setSubmitBtn(false)
            setAlertText({ title: 'Error', paragraph: res.message, reason: 'error', sender: 'auth' })
            setLoading(false)
            handleOpenAlertBox()
        }
    }

    useEffect(() => {
        if (emailValue && emailValue.includes('@') && passwordValue.length >= 8) {
            setSubmitBtn(false)
        } else {
            setSubmitBtn(true)
        }
    }, [emailValue, passwordValue])

    useEffect(() => {
        const session = Cookies.get(appOrigin);
        if (session) {
            const { admin, activation } = JSON.parse(session);
            if (admin && activation) {
                redirect('/admin');
                return
            } else {
                redirect('/dashboard');
            }
        }
    }, [])

    useEffect(() => {
        const updateTimer = () => {
            setTimerValue((prevValue) => (prevValue % 5) + 1);
        };
        const intervalId = setInterval(updateTimer, 5000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <AppGrid  >
            {/* Mobile View */}
            <Grid sx={{ display: { xs: 'flex', sm: 'flex', lg: 'none', xl: 'none' } }}>
                {/* Mobile Header */}
                <MobileHeaderWrapper>
                    {/* Back Button */}
                    <MobileHeaderBackButtonWrapper>
                        <MobileHeaderBackButtonContent onClick={() => redirect('/')}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9993 20.67C14.8093 20.67 14.6193 20.6 14.4693 20.45L7.9493 13.93C6.8893 12.87 6.8893 11.13 7.9493 10.07L14.4693 3.55002C14.7593 3.26002 15.2393 3.26002 15.5293 3.55002C15.8193 3.84002 15.8193 4.32002 15.5293 4.61002L9.0093 11.13C8.5293 11.61 8.5293 12.39 9.0093 12.87L15.5293 19.39C15.8193 19.68 15.8193 20.16 15.5293 20.45C15.3793 20.59 15.1893 20.67 14.9993 20.67Z" color="#292D32" fill="black">
                                </path>
                            </svg>
                        </MobileHeaderBackButtonContent>
                    </MobileHeaderBackButtonWrapper>
                    {/* Logo */}
                    <MobileHeaderLogo src="svg/ridima-logo.png" />
                </MobileHeaderWrapper>

                {/* Content */}
                <Content>
                    <ContentWrapper>
                        <ContentWrap>
                            {/* Form Inputs Area */}
                            <FormWrapper>
                                <FormHeaderText>Welcome back!</FormHeaderText>
                                <FormInputWrapper>
                                    <FormInputBoxWrapper>
                                        <FormInputBoxWrap>
                                            <FormInputBox>
                                                <FormInputLabel>Email address</FormInputLabel>
                                                <FormInput name="email" type="email" onChange={handleTextChange} placeholder="e.g you@email.com" />
                                            </FormInputBox>
                                        </FormInputBoxWrap>
                                    </FormInputBoxWrapper>
                                    {/* Form Input Area */}
                                    <FormInputBoxWrapper>
                                        <FormInputBoxWrap>
                                            <FormInputBox>
                                                <FormInputLabel>Password</FormInputLabel>
                                                <FormInput name="pwd" type={passwordType} onChange={handleTextChange} placeholder="******" />
                                            </FormInputBox>
                                            <FormInputButton onClick={handleShowPassword}>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#7165E3" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z">
                                                    </path>
                                                </svg>
                                            </FormInputButton>
                                        </FormInputBoxWrap>
                                        <FormInputSubtext>Password should be a minimum of 8 characters</FormInputSubtext>
                                    </FormInputBoxWrapper>
                                </FormInputWrapper>
                            </FormWrapper>
                            {/* Form Button Area */}
                            <FormSubmitButtonWrapper>
                                <FormForgotButton onClick={() => redirect('/forgot-password')}>Forgot Password</FormForgotButton>
                                <FormSubmitButton disabled={submitBtn} onClick={authenticate}>
                                    <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48">
                                        </path>
                                    </svg>
                                    <FormSubmitButtonText>{loading ? <CircularProgress /> : 'Login'}</FormSubmitButtonText>
                                </FormSubmitButton>
                                <FormSubmitButtonSubText>Don't have an account? <FormLoginButton onClick={() => redirect('/register')}>Create an account</FormLoginButton></FormSubmitButtonSubText>
                            </FormSubmitButtonWrapper>
                        </ContentWrap>
                    </ContentWrapper>
                </Content>
            </Grid>

            {/* Desktop View */}
            <Grid sx={{ display: { xs: 'none', sm: 'none', lg: 'flex', xl: 'flex' } }}>
                <DesktopWrapper>
                    <DesktopWrap>
                        <DesktopContentWrapper>
                            <DesktopContentWrap>

                                {/* Contents */}
                                <DesktopContent>
                                    <DesktopSlideImage src={`/svg/splash-${timerValue}.svg`} />
                                </DesktopContent>
                                <DesktopContentInputArea>
                                    <DesktopHeaderText>Welcome back!</DesktopHeaderText>

                                    <FormContentWrapper>

                                        {/* Input Box */}
                                        <FormInputWrapper>
                                            <FormInputWrap>
                                                <FormInputContent>
                                                    <FormInputLabel>Email address</FormInputLabel>
                                                    <FormInput name="email" type="email" onChange={handleTextChange} placeholder="e.g you@email.com" />
                                                </FormInputContent>
                                            </FormInputWrap>
                                        </FormInputWrapper>

                                        <FormInputWrapper>
                                            <FormInputWrap>
                                                <FormInputContent>
                                                    <FormInputLabel>Password</FormInputLabel>
                                                    <FormInput name="pwd" type={passwordType} onChange={handleTextChange} placeholder="******" />
                                                </FormInputContent>
                                                <FormToggleButton onClick={handleShowPassword}>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#7165E3" height="22" width="22" xmlns="http://www.w3.org/2000/svg" >
                                                        <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z">
                                                        </path>
                                                    </svg>
                                                </FormToggleButton>
                                            </FormInputWrap>
                                        </FormInputWrapper>

                                        <FormSubtext>Password should be minimum of 8 Characters</FormSubtext>

                                    </FormContentWrapper>

                                    <FormButtonWrapper>

                                        <FormButton disabled={submitBtn} onClick={authenticate}>
                                            <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48">
                                                </path>
                                            </svg>
                                            <FormButtonText>{loading ? <CircularProgress /> : 'Login'}</FormButtonText>
                                        </FormButton>

                                        <FormButtonSubText>Don't have an account? <FormLoginSubTextButton onClick={() => redirect('/register')}>Create an account</FormLoginSubTextButton></FormButtonSubText>
                                    </FormButtonWrapper>
                                </DesktopContentInputArea>

                            </DesktopContentWrap>
                        </DesktopContentWrapper>
                        <DesktopFloatImage src="svg/auth-bird.svg" />
                    </DesktopWrap>
                </DesktopWrapper>
            </Grid>
        </AppGrid >
    )
}

export default Login;