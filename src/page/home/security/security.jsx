import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {
    MobileAppBar, MobileLogoGrid, MobileBackButton, MobileBackBtnText, SecurityBtnBody,
    SecurityBtnWrapper, MobileInputArea, MobileInputBoxOne, MobileImage, MobileClickTextArea,
    MobileClickText, DesktopViewWrapper, DesktopHeader, DesktopHeaderTitle, DesktopHeaderTitleText,
    DesktopHeaderSubTitleText, DesktopHeaderLiner, DesktopHeaderLine, DesktopHeaderSubTitleTexts,
    DSecurityBtnWrapper
} from './components'
const Security = () => {

    return (
        <>
            {/* Mobile Nav Bar */}
            <MobileAppBar container sx={{ display: { xs: 'flex', md: 'none' } }}>
                {/* Logo Box */}
                <MobileLogoGrid item xs={12} position={'fixed'} sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <MobileLogoGrid item xs={4}>
                        {/* <MobileBackButton>
                            <NavigateBeforeIcon />
                        </MobileBackButton> */}
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
                        <DesktopHeaderSubTitleText>Security</DesktopHeaderSubTitleText>
                    </DesktopHeaderTitle>
                    <DesktopHeaderLiner>
                        <DesktopHeaderSubTitleTexts>Security Settings</DesktopHeaderSubTitleTexts>
                        <DesktopHeaderLine />
                    </DesktopHeaderLiner>
                    <DSecurityBtnWrapper>
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
                    </DSecurityBtnWrapper>
                </DesktopHeader>
            </DesktopViewWrapper>
        </>
    )
}

export default Security;