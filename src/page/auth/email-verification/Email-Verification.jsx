import { Grid } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Body Components
const Body = styled('div')(({ }) => ({
    position: 'relative',
    height: '100vh',
}))

// Mobile Header Components
const MobileHeaderWrapper = styled('div')(() => ({
    padding: '0.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    top: '0px',
    zIndex: '1',
    backgroundColor: 'white',
}))

const BackButtonWrapper = styled('div')(() => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const BackButton = styled('div')(() => ({
    height: '4rem',
    width: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: '0.8rem',
    cursor: 'pointer',
}))
const Logo = styled('img')(() => ({
    justifySelf: 'center'
}))

const ContentWrapper = styled('div')(() => ({
    width: '100%',
    height: '100vh',
    padding: '0.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr repeat(2, minmax(min-content, 20rem)) 1fr',
    position: 'relative',
}))
const ContentWrap = styled('div')(() => ({
    marginTop: '4.8rem',
    gridColumn: '2 / 4',
    height: 'calc(100% + 15rem)',
}))

const FormContent = styled('div')(() => ({
    height: '100%',
    gap: '6.4rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    padding: '3.2rem 0',
    display: 'flex',
}))
const FormContentInputTextWrapper = styled('div')(() => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const FormContentHeaderText = styled('p')(() => ({
    color: '#3F1E4B',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    lineHeight: '1.6rem',
    fontSize: '2.8rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '700'
}))
const FormContentInnerWrapper = styled('div')(() => ({
    gap: '2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const FormContentSubText = styled('p')(() => ({
    width: '80%',
    textAlign: 'center',
    marginTop: '0px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '2.4rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    color: '#4F4F4F',
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '500'
}))
const FormContentInputWrapper = styled('div')(() => ({
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    display: 'flex',
}))
const FormContentInputWrap = styled('div')(() => ({
    backgroundColor: '#F2F2F2',
    width: '100%',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: '5rem',
    padding: '1.7rem 2.4rem',
    transition: 'all 0.3s ease-in 0s',
    display: 'flex',
}))
const FormContentInput = styled('input')(() => ({
    transition: 'all 0.3s ease-in 0s',
    all: 'unset',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    color: '#4F4F4F',
    fontSize: '2.4rem',
    letterSpacing: '1.6rem',
    width: '100%',
    textAlign: 'center',
}))

const VerifyButtonWrapper = styled('div')(() => ({
    gap: '1.6rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

}))
const VerifyButton = styled('button')(() => ({
    all: 'unset',
    position: 'relative',
    display: 'flex',
    flexShrink: '0',
    flexGrow: '0',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    whiteSpaceCollapse: 'collapse',
    textWrap: 'nowrap',
    gap: "1.6rem",
    transition: "all 0.2s ease-in-out 0s",
}))
const VerifyButtonTextWrap = styled('div')(() => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',
}))

// Desktop Wrapper Components
const DesktopWrapper = styled('div')(() => ({
    backgroundImage: 'url(/svg/auth-bg-purple.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))
const DesktopContentWrapper = styled('div')(() => ({
    opacity: '1',
    transform: 'none',
}))
const DesktopContentWrap = styled('div')(() => ({
    gap: '0.8rem',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    width: '45rem',
    height: '70vh',
    backgroundColor: 'white',
    borderRadius: '2.4rem',
    padding: '3.2rem 2.4rem',
    display: 'flex',
}))
const DesktopContentImage = styled('img')(() => ({
    margin: '0 auto',
    width: '60%',
}))

const ResendVerificationTokenButton = styled('span')(() => ({
    cursor: 'pointer',
    textDecoration: 'underline',
    color: '#7165E3'
}))

const Email_Verification = ({ redirect, openAlert }) => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const activationKey = url.searchParams.get('actKey');
    console.log(activationKey)

    async function verifyEmail() {
        console.log('fired')
    }

    async function resendEmailVerificationToken() {
        console.log('fired')
    }

    return (
        <Body>
            {/* Mobile Box */}
            <Grid sx={{ display: { sm: 'flex', xs: 'flex', lg: 'none', xl: 'none' } }}>
                {/* Mobile Header */}
                <MobileHeaderWrapper>
                    <BackButtonWrapper onClick={() => redirect('/login')}>
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
                                    <FormContentSubText>Enter the 6-digit code sent to your email to verify your account.</FormContentSubText>
                                    <FormContentInputWrapper>
                                        <FormContentInputWrap>
                                            <FormContentInput placeholder="123-456" />
                                        </FormContentInputWrap>
                                    </FormContentInputWrapper>
                                    <FormContentSubText>Didn't get code. <ResendVerificationTokenButton onClick={() => resendEmailVerificationToken()}>Click</ResendVerificationTokenButton> here to resend code.</FormContentSubText>
                                </FormContentInnerWrapper>
                            </FormContentInputTextWrapper>

                            {/* Verify Button */}
                            <VerifyButtonWrapper>
                                <VerifyButton>
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
                                                <FormContentInput placeholder="123-456" />
                                            </FormContentInputWrap>
                                        </FormContentInputWrapper>
                                        <FormContentSubText>Didn't get code. <ResendVerificationTokenButton onClick={() => resendEmailVerificationToken()}>Click</ResendVerificationTokenButton> here to resend code.</FormContentSubText>
                                    </FormContentInnerWrapper>
                                </FormContentInputTextWrapper>

                                {/* Verify Button */}
                                <VerifyButtonWrapper>
                                    <VerifyButton onClick={() => verifyEmail()}>
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