import { Grid } from "@mui/material";
import { DesktopEdithHeaderBackButtonText, DesktopEdithHeaderBackButtonWrapper, DesktopEdithHeaderWrapper, EdithHeaderBackButton, EdithHeaderBackButtonWrapper, EdithHeaderText, EdithHeaderWrapper, InputAvatar, InputAvatarBadge, InputAvatarImage, InputAvatarWrappers, InputBox, InputBoxArea, InputBoxWrapper, InputLabel, InputWrappers, Input, UpdateBtn, UpdateBtnText } from './components'

const EdithProfile = ({ openEdithProfile, userData }) => {

    return (
        <>
            <Grid sx={{ display: { md: 'flex', lg: 'none', xl: 'none', xs: 'flex', sm: 'flex', alignItems: 'center', justifyContent: 'center' } }}>
                <EdithHeaderWrapper style={{ backgroundColor: 'white' }}>
                    <EdithHeaderBackButtonWrapper>
                        <EdithHeaderBackButton onClick={openEdithProfile}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9993 20.67C14.8093 20.67 14.6193 20.6 14.4693 20.45L7.9493 13.93C6.8893 12.87 6.8893 11.13 7.9493 10.07L14.4693 3.55002C14.7593 3.26002 15.2393 3.26002 15.5293 3.55002C15.8193 3.84002 15.8193 4.32002 15.5293 4.61002L9.0093 11.13C8.5293 11.61 8.5293 12.39 9.0093 12.87L15.5293 19.39C15.8193 19.68 15.8193 20.16 15.5293 20.45C15.3793 20.59 15.1893 20.67 14.9993 20.67Z" color="#292D32" fill="black">
                                </path>
                            </svg>
                        </EdithHeaderBackButton>``
                    </EdithHeaderBackButtonWrapper>
                    <EdithHeaderText>Edit Profile</EdithHeaderText>
                </EdithHeaderWrapper>
                <form style={{ marginTop: '5rem', height: '100vh', width: '25rem' }}>
                    <InputWrappers>

                        <InputAvatarWrappers>

                            <InputAvatar>
                                <InputAvatarImage src="/svg/profile.png" />
                                <InputAvatarBadge src='/svg/icon.png' />
                            </InputAvatar>
                        </InputAvatarWrappers>

                        <InputBoxWrapper>
                            <InputBoxArea>
                                <InputBox>
                                    <InputLabel>Username</InputLabel>
                                    <Input type="verify" placeholder="adensmith" disabled value="axus" />
                                </InputBox>
                                <img src="/svg/verify.svg" />
                            </InputBoxArea>
                        </InputBoxWrapper>

                        <InputBoxWrapper>
                            <InputBoxArea>
                                <InputBox>
                                    <InputLabel>First name</InputLabel>
                                    <Input type="text" placeholder="e.g aden" />
                                </InputBox>
                            </InputBoxArea>
                        </InputBoxWrapper>

                        <InputBoxWrapper>
                            <InputBoxArea>
                                <InputBox>
                                    <InputLabel>Last name</InputLabel>
                                    <Input type="text" placeholder="e.g smith" />
                                </InputBox>
                            </InputBoxArea>
                        </InputBoxWrapper>

                        <InputBoxWrapper>
                            <InputBoxArea>
                                <InputBox>
                                    <InputLabel>Email address</InputLabel>
                                    <Input type="email" placeholder="e.g email@gmail.com" />
                                </InputBox>
                            </InputBoxArea>
                        </InputBoxWrapper>

                        <InputBoxWrapper>
                            <InputBoxArea>
                                <InputBox>
                                    <InputLabel>Phone number</InputLabel>
                                    <Input type="text" placeholder="e.g 000 0000 0000" />
                                </InputBox>
                            </InputBoxArea>
                        </InputBoxWrapper>

                        <UpdateBtn>
                            <svg width="436" height="80" viewBox="0 0 436 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 39.5413C0 17.7033 17.7033 0 39.5413 0H400.599C420.15 0 436 15.8497 436 35.4013V35.4013C436 54.6367 420.641 70.3523 401.41 70.7933L40.448 79.0723C18.2608 79.5812 0 61.7344 0 39.5413V39.5413Z" fill="#F5CF48">
                                </path>
                            </svg>
                            <UpdateBtnText>Update Profile</UpdateBtnText>
                        </UpdateBtn>
                    </InputWrappers>
                </form>
            </Grid>

            <Grid sx={{ display: { md: 'none', lg: 'flex', xl: 'flex', xs: 'none', sm: 'none', alignItems: 'start' } }}>
                <DesktopEdithHeaderWrapper >
                    <DesktopEdithHeaderBackButtonWrapper onClick={openEdithProfile}>
                        <DesktopEdithHeaderBackButtonText>Profile</DesktopEdithHeaderBackButtonText>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 8 16" color="#BDBDBD" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(189, 189, 189)' }}>
                            <path fill-rule="evenodd" d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z">
                            </path>
                        </svg>
                    </DesktopEdithHeaderBackButtonWrapper>
                    <DesktopEdithHeaderBackButtonWrapper>
                        <DesktopEdithHeaderBackButtonText style={{ color: '#7165E3' }}>Edith Profile</DesktopEdithHeaderBackButtonText>
                    </DesktopEdithHeaderBackButtonWrapper>
                </DesktopEdithHeaderWrapper>
                <form>
                    <InputWrappers>

                        <InputAvatarWrappers>

                            <InputAvatar>
                                <InputAvatarImage src="/svg/profile.png" />
                                <InputAvatarBadge src='/svg/icon.png' />
                            </InputAvatar>
                        </InputAvatarWrappers>

                        <InputBoxWrapper>
                            <InputBoxArea>
                                <InputBox>
                                    <InputLabel>Username</InputLabel>
                                    <Input type="verify" placeholder="adensmith" disabled value="axus" />
                                </InputBox>
                                <img src="/svg/verify.svg" />
                            </InputBoxArea>
                        </InputBoxWrapper>

                        <InputBoxWrapper>
                            <InputBoxArea>
                                <InputBox>
                                    <InputLabel>First name</InputLabel>
                                    <Input type="text" placeholder="e.g aden" />
                                </InputBox>
                            </InputBoxArea>
                        </InputBoxWrapper>

                        <InputBoxWrapper>
                            <InputBoxArea>
                                <InputBox>
                                    <InputLabel>Last name</InputLabel>
                                    <Input type="text" placeholder="e.g smith" />
                                </InputBox>
                            </InputBoxArea>
                        </InputBoxWrapper>

                        <InputBoxWrapper>
                            <InputBoxArea>
                                <InputBox>
                                    <InputLabel>Email address</InputLabel>
                                    <Input type="email" placeholder="e.g email@gmail.com" />
                                </InputBox>
                            </InputBoxArea>
                        </InputBoxWrapper>

                        <InputBoxWrapper>
                            <InputBoxArea>
                                <InputBox>
                                    <InputLabel>Phone number</InputLabel>
                                    <Input type="text" placeholder="e.g 000 0000 0000" />
                                </InputBox>
                            </InputBoxArea>
                        </InputBoxWrapper>

                        <UpdateBtn>
                            <svg width="436" height="80" viewBox="0 0 436 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 39.5413C0 17.7033 17.7033 0 39.5413 0H400.599C420.15 0 436 15.8497 436 35.4013V35.4013C436 54.6367 420.641 70.3523 401.41 70.7933L40.448 79.0723C18.2608 79.5812 0 61.7344 0 39.5413V39.5413Z" fill="#F5CF48">
                                </path>
                            </svg>
                            <UpdateBtnText>Update Profile</UpdateBtnText>
                        </UpdateBtn>
                    </InputWrappers>
                </form>
            </Grid>
        </>
    )
}

export default EdithProfile;