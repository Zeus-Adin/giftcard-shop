import { Grid } from "@mui/material";
import styled from "styled-components";
import {
    MobileHeaderWrapper,
    BackButtonWrapper,
    BackButton,
    Logo,
    ContentWrapper,
    ContentWrap,
    FormWrap,
    FormHeader,
    FormContentWrapper,
    FormInputWrapper,
    FormInputWrap,
    FormInputContent,
    FormInputLabel,
    FormInputBox,
    FormToggleButton,
    FormSubtext,
    FormButtonWrapper,
    FormButton,
    FormButtonText,
    FormButtonSubText,
    FormLoginSubTextButton,
    // Desktop Components
    DesktopWrapper,
    DesktopWrap,
    DesktopHeaderText,
    DesktopContentWrapper,
    DesktopContentWrap,
    DesktopContent,
    DesktopContentInputArea,
    DesktopSlideImage,
    DesktopFloatImage,
} from "./components"
import { useEffect, useState } from "react";
import { registerUser } from './functions'

const AppGrid = styled('div')(({ }) => ({
    position: 'relative',
    height: '100vh',
}))

const Register = ({ redirect, handleOpenAlertBox, setAlertText }) => {
    const [timerValue, setTimerValue] = useState(1);

    const [username, setUsername] = useState(1);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const [submitBtnDisable, setSubmitBtnDisable] = useState(true);

    const handleCreatAccount = async () => {
        const { act_key, reg_hash, reg_stat, reg_payload, message } = await registerUser(username, phone, email, pwd);
        if (reg_payload.username) setUsername('')
        if (reg_payload.contact) setPhone('')
        if (reg_payload.email) setEmail('')
        if (reg_stat) {
            setAlertText({ title: 'Success', paragraph: message, reason: 'success' })
            handleOpenAlertBox()
        } else {
            setAlertText({ title: 'Error', paragraph: message, reason: 'error' })
            handleOpenAlertBox()
        }
    }

    const handleTextChanges = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'username':
                setUsername(value)
                break;
            case 'phone':
                setPhone(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'pwd':
                setPwd(value)
                break;
        }
    }

    useEffect(() => {
        if (username && phone && email && pwd.length >= 8) {
            setSubmitBtnDisable(false)
        } else {
            setSubmitBtnDisable(true)
        }
    }, [username, phone, email, pwd])

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

                {/* Content */}
                <ContentWrapper>
                    <ContentWrap>
                        <FormWrap>
                            <FormHeader>Create account</FormHeader>

                            <FormContentWrapper>

                                {/* Input Box */}
                                <FormInputWrapper>
                                    <FormInputWrap>
                                        <FormInputContent>
                                            <FormInputLabel>Username</FormInputLabel>
                                            <FormInputBox placeholder="e.g johndoe" name="username" required onBlur={handleTextChanges} />
                                        </FormInputContent>
                                    </FormInputWrap>
                                </FormInputWrapper>

                                <FormInputWrapper>
                                    <FormInputWrap>
                                        <FormInputContent>
                                            <FormInputLabel>Phone number</FormInputLabel>
                                            <FormInputBox placeholder="e.g 080 0000 0000" name="phone" required onBlur={handleTextChanges} />
                                        </FormInputContent>
                                    </FormInputWrap>
                                </FormInputWrapper>

                                <FormInputWrapper>
                                    <FormInputWrap>
                                        <FormInputContent>
                                            <FormInputLabel>Email address</FormInputLabel>
                                            <FormInputBox placeholder="e.g you@email.com" name="email" required onBlur={handleTextChanges} />
                                        </FormInputContent>
                                    </FormInputWrap>
                                </FormInputWrapper>

                                <FormInputWrapper>
                                    <FormInputWrap>
                                        <FormInputContent>
                                            <FormInputLabel>Password</FormInputLabel>
                                            <FormInputBox placeholder="e.g johndoe" name="pwd" type="password" required onBlur={handleTextChanges} />
                                        </FormInputContent>
                                        <FormToggleButton>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#7165E3" height="22" width="22" xmlns="http://www.w3.org/2000/svg" >
                                                <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z">
                                                </path>
                                            </svg>
                                        </FormToggleButton>
                                    </FormInputWrap>
                                </FormInputWrapper>

                                <FormSubtext>Password should be minimum of 8 Characters</FormSubtext>

                            </FormContentWrapper>

                            <FormButtonWrapper >

                                <FormButton disabled={submitBtnDisable} onClick={handleCreatAccount}>
                                    <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48">
                                        </path>
                                    </svg>
                                    <FormButtonText >Create account</FormButtonText>
                                </FormButton>

                                <FormButtonSubText>Already have an account? <FormLoginSubTextButton>Login</FormLoginSubTextButton></FormButtonSubText>
                            </FormButtonWrapper>
                        </FormWrap>
                    </ContentWrap>
                </ContentWrapper>
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
                                    <DesktopHeaderText>Create account</DesktopHeaderText>

                                    <FormContentWrapper>

                                        {/* Input Box */}
                                        <FormInputWrapper>
                                            <FormInputWrap>
                                                <FormInputContent>
                                                    <FormInputLabel>Username</FormInputLabel>
                                                    <FormInputBox placeholder="e.g johndoe" name="username" required onBlur={handleTextChanges} />
                                                </FormInputContent>
                                            </FormInputWrap>
                                        </FormInputWrapper>

                                        <FormInputWrapper>
                                            <FormInputWrap>
                                                <FormInputContent>
                                                    <FormInputLabel>Phone number</FormInputLabel>
                                                    <FormInputBox placeholder="e.g 080 0000 0000" name="phone" required onBlur={handleTextChanges} />
                                                </FormInputContent>
                                            </FormInputWrap>
                                        </FormInputWrapper>

                                        <FormInputWrapper>
                                            <FormInputWrap>
                                                <FormInputContent>
                                                    <FormInputLabel>Email address</FormInputLabel>
                                                    <FormInputBox placeholder="e.g you@email.com" name="email" required onBlur={handleTextChanges} />
                                                </FormInputContent>
                                            </FormInputWrap>
                                        </FormInputWrapper>

                                        <FormInputWrapper>
                                            <FormInputWrap>
                                                <FormInputContent>
                                                    <FormInputLabel>Password</FormInputLabel>
                                                    <FormInputBox placeholder="e.g johndoe" type="password" name="pwd" required onBlur={handleTextChanges} />
                                                </FormInputContent>
                                                <FormToggleButton>
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

                                        <FormButton disabled={submitBtnDisable} onClick={handleCreatAccount}>
                                            <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48">
                                                </path>
                                            </svg>
                                            <FormButtonText>Create account</FormButtonText>
                                        </FormButton>

                                        <FormButtonSubText>Already have an account? <FormLoginSubTextButton>Login</FormLoginSubTextButton></FormButtonSubText>
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

export default Register;