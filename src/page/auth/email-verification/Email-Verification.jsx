import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { resendToken, verifyToken } from "./functions";
import {
    MobileHeaderWrapper,
    BackButtonWrapper,
    BackButton,
    Logo,
    ContentWrapper,
    ContentWrap,
    FormContent,
    FormContentInputTextWrapper,
    FormContentHeaderText,
    FormContentInnerWrapper,
    FormContentSubText,
    FormContentInputWrapper,
    FormContentInputWrap,
    FormContentInput,
    VerifyButtonWrapper,
    VerifyButton,
    VerifyButtonTextWrap,
    DesktopWrapper,
    DesktopContentWrapper,
    DesktopContentWrap,
    DesktopContentImage,
    ResendVerificationTokenButton
} from "./components"

// Body Components
const Body = styled('div')(({ }) => ({
    position: 'relative',
    height: '100vh',
}))

const Email_Verification = ({ redirect, openAlert, setAlertText }) => {
    const [token, setToken] = useState('');

    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const activationKey = url.searchParams.get('actKey');
    const email = url.searchParams.get('email');

    const [submitBtnDisable, setSubmitBtnDisable] = useState(true);
    const [resendTokenBtnDisable, setResendTokenBtnDisable] = useState(true);

    async function verifyEmail() {
        setSubmitBtnDisable(true)
        try {
            const { verify_stat, message } = await verifyToken(activationKey, token)
            if (verify_stat) {
                setAlertText({ title: 'Success', paragraph: message, reason: 'success', sender: 'verif' })
                openAlert()
            } else {
                setAlertText({ title: 'Error', paragraph: message, reason: 'error', sender: 'verif' })
                setSubmitBtnDisable(false)
                openAlert()
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function resendEmailVerificationToken() {
        const { resend_stat, message, actKey } = await resendToken(email);
        if (resend_stat) {
            setAlertText({ title: 'Success', paragraph: message, reason: 'success', sender: 'resendtoken' })
            openAlert()
            redirect(`/email-verification?actKey=${actKey}&email=${email}`)
        } else {
            setAlertText({ title: 'Error', paragraph: message, reason: 'error', sender: 'resendtoken' })
            openAlert()
            setResendTokenBtnDisable(false)
        }
    }

    async function handleTextChage(e) {
        const { value } = e.target
        setToken(value)
    }

    useEffect(() => {
        if (token && token.length === 6) {
            setSubmitBtnDisable(false)
        } else {
            setSubmitBtnDisable(true)
        }
    }, [token])

    return (
        <Body>
            {/* Mobile Box */}
            <Grid sx={{ display: { sm: 'flex', xs: 'flex', lg: 'none', xl: 'none' } }}>
                {/* Mobile Header */}
                <MobileHeaderWrapper>
                    <BackButtonWrapper onClick={() => redirect('/register')}>
                        <BackButton>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9993 20.67C14.8093 20.67 14.6193 20.6 14.4693 20.45L7.9493 13.93C6.8893 12.87 6.8893 11.13 7.9493 10.07L14.4693 3.55002C14.7593 3.26002 15.2393 3.26002 15.5293 3.55002C15.8193 3.84002 15.8193 4.32002 15.5293 4.61002L9.0093 11.13C8.5293 11.61 8.5293 12.39 9.0093 12.87L15.5293 19.39C15.8193 19.68 15.8193 20.16 15.5293 20.45C15.3793 20.59 15.1893 20.67 14.9993 20.67Z" color="#292D32" fill="black">
                                </path>
                            </svg>
                        </BackButton>
                    </BackButtonWrapper>
                    <Logo src="/svg/ridima-logo.svg" />
                </MobileHeaderWrapper>

                <ContentWrapper>
                    <ContentWrap>
                        {/* <form> */}
                        <FormContent>
                            {/* Input Text Area */}
                            <FormContentInputTextWrapper>
                                <FormContentHeaderText>Email Verification</FormContentHeaderText>
                                <FormContentInnerWrapper>
                                    <FormContentSubText>Enter the 6-digit code sent to your email to verify your account, please note this code expires withen 10 minutes.</FormContentSubText>
                                    <FormContentInputWrapper>
                                        <FormContentInputWrap>
                                            <FormContentInput placeholder="123-456" name="token" onBlur={handleTextChage} />
                                        </FormContentInputWrap>
                                    </FormContentInputWrapper>
                                    <FormContentSubText>Didn't get code. <ResendVerificationTokenButton disabled={resendTokenBtnDisable} onClick={resendEmailVerificationToken}>Click</ResendVerificationTokenButton> here to resend code.</FormContentSubText>
                                </FormContentInnerWrapper>
                            </FormContentInputTextWrapper>

                            {/* Verify Button */}
                            <VerifyButtonWrapper>
                                <VerifyButton disabled={submitBtnDisable} onClick={verifyEmail}>
                                    <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48">
                                        </path>
                                    </svg>
                                    <VerifyButtonTextWrap>
                                        Verify Email
                                    </VerifyButtonTextWrap>
                                </VerifyButton>
                            </VerifyButtonWrapper>
                        </FormContent>
                        {/* </form> */}
                    </ContentWrap>
                </ContentWrapper>
            </Grid>

            {/* Mobile Box */}
            <Grid sx={{ display: { sm: 'none', xs: 'none', lg: 'flex', xl: 'flex' } }}>
                <DesktopWrapper>
                    <DesktopContentWrapper>
                        {/* <form> */}
                        <DesktopContentWrap>
                            <FormContent>
                                {/* Input Text Area */}
                                <FormContentInputTextWrapper>
                                    <DesktopContentImage src="/svg/email.svg" />
                                    <FormContentHeaderText>Email Verification</FormContentHeaderText>
                                    <FormContentInnerWrapper>
                                        <FormContentSubText>Enter the 6-digit code sent to your email to verify your account.</FormContentSubText>
                                        <FormContentInputWrapper>
                                            <FormContentInputWrap>
                                                <FormContentInput placeholder="123-456" name="token" onBlur={handleTextChage} />
                                            </FormContentInputWrap>
                                        </FormContentInputWrapper>
                                        <FormContentSubText>Didn't get code. <ResendVerificationTokenButton disabled={resendTokenBtnDisable} onClick={resendEmailVerificationToken}>Click</ResendVerificationTokenButton> here to resend code.</FormContentSubText>
                                    </FormContentInnerWrapper>
                                </FormContentInputTextWrapper>

                                {/* Verify Button */}
                                <VerifyButtonWrapper>
                                    <VerifyButton disabled={submitBtnDisable} onClick={verifyEmail}>
                                        <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48">
                                            </path>
                                        </svg>
                                        <VerifyButtonTextWrap>
                                            Verify Email
                                        </VerifyButtonTextWrap>
                                    </VerifyButton>
                                </VerifyButtonWrapper>
                            </FormContent>
                        </DesktopContentWrap>
                        {/* </form> */}
                    </DesktopContentWrapper>
                </DesktopWrapper>
            </Grid>
        </Body>
    )
}

export default Email_Verification;