import { Grid } from "@mui/material";
import {
    ProfileWrapper, ProfileWrap, ProfileWraps, ProfileContents,
    Title, Container, AvatarContainer, AvatarBox, AvatarNavButtonImage,
    AvatarImage, AvatarTextArea, AvatarText, AvatarName,
    FunctionsContainer, FunctionsContent, FunctionsTextImage,
    FunctionsText, FunctionsImageWrap, DesktopAvatarNav, DesktopAvatarNavText
} from "./components";
import { logUserOut } from "../../auth/login/functions"
import { useState } from "react";
import EdithProfile from "./edithProfile";
import { DesktopContent, DesktopContentWrap, DesktopContentWrapper } from "../dashboard/components";


const Profile = ({ redirect, setSelectedNav }) => {
    const [edithProfile, setEdithProfile] = useState(false);
    function openEdithProfile() {
        setEdithProfile(!edithProfile)
    }

    const profileActionKeys = [
        { action: () => redirect('/manage-banks'), title: 'Manage Banks', icon: '/svg/banks.svg', nacIcon: '/svg/arrow-right.svg' },
        { action: () => setSelectedNav(5), title: 'Security', icon: '/svg/security.svg', nacIcon: '/svg/arrow-right.svg' },
        { action: () => setSelectedNav(3), title: 'Customer Support', icon: '/svg/support.svg', nacIcon: '/svg/arrow-right.svg' },
        { action: () => redirect('/terms'), title: 'Terms of Service', icon: '/svg/terms.svg', nacIcon: '/svg/arrow-right.svg' },
        { action: () => redirect('/dashboard'), title: 'Download App (Coming Soon)', icon: '/svg/share.svg', nacIcon: '/svg/arrow-right.svg' },
        { action: () => logUserOut(), title: 'Logout', icon: '/svg/logout.svg', nacIcon: '' },
        { action: () => logUserOut(), title: 'Delete Account', icon: '/svg/delete.svg', nacIcon: '' },
    ]

    return (
        <>
            <Grid sx={{ display: { md: 'flex', lg: 'none', xl: 'none', xs: 'flex', sm: 'flex', alignItems: 'center', justifyContent: 'center' } }}>
                {!edithProfile
                    ? <ProfileWrapper>
                        <ProfileWrap>
                            <ProfileWraps>
                                <ProfileContents>
                                    <Title>Account</Title>
                                    <Container>

                                        <AvatarContainer>
                                            <AvatarBox>
                                                <AvatarImage src="/svg/pix.svg" onClick={openEdithProfile} />
                                                <AvatarTextArea>
                                                    <AvatarText>Chief</AvatarText>
                                                    <AvatarName>axus</AvatarName>
                                                </AvatarTextArea>
                                            </AvatarBox>
                                            <AvatarNavButtonImage src="/svg/arrow-right.svg" onClick={openEdithProfile} />
                                        </AvatarContainer>

                                        <FunctionsContainer>
                                            {
                                                profileActionKeys.map(({ action, title, icon, nacIcon }) => (
                                                    <FunctionsContent>
                                                        <FunctionsTextImage onClick={action}>
                                                            <FunctionsImageWrap>
                                                                <AvatarNavButtonImage src={icon} />
                                                            </FunctionsImageWrap>
                                                            <FunctionsText>{title}</FunctionsText>
                                                        </FunctionsTextImage>
                                                        {nacIcon && <AvatarNavButtonImage src={nacIcon} />}
                                                    </FunctionsContent>
                                                ))
                                            }
                                        </FunctionsContainer>

                                    </Container>
                                </ProfileContents>
                            </ProfileWraps>
                        </ProfileWrap>
                    </ProfileWrapper>
                    : <EdithProfile openEdithProfile={openEdithProfile} />
                }
            </Grid>

            <DesktopContentWrapper sx={{ display: { md: 'none', lg: 'flex', xl: 'flex', xs: 'none', sm: 'none' } }}>
                <DesktopContentWrap>
                    <DesktopContent>
                        {!edithProfile
                            ? <div>
                                <Title>Account</Title>
                                <Container>

                                    <AvatarContainer>
                                        <AvatarBox>
                                            <AvatarImage src="/svg/pix.svg" />
                                            <AvatarTextArea>
                                                <AvatarText>Chief</AvatarText>
                                                <AvatarName>axus</AvatarName>
                                            </AvatarTextArea>
                                            <DesktopAvatarNav onClick={openEdithProfile}>
                                                <DesktopAvatarNavText>Edith Profile</DesktopAvatarNavText>
                                            </DesktopAvatarNav>
                                        </AvatarBox>
                                    </AvatarContainer>

                                    <FunctionsContainer>
                                        {
                                            profileActionKeys.map(({ action, title, icon, nacIcon }) => (
                                                <FunctionsContent>
                                                    <FunctionsTextImage onClick={action}>
                                                        <FunctionsImageWrap>
                                                            <AvatarNavButtonImage src={icon} />
                                                        </FunctionsImageWrap>
                                                        <FunctionsText>{title}</FunctionsText>
                                                    </FunctionsTextImage>
                                                    {nacIcon && <AvatarNavButtonImage src={nacIcon} />}
                                                </FunctionsContent>
                                            ))
                                        }
                                    </FunctionsContainer>

                                </Container>
                            </div>
                            : <EdithProfile openEdithProfile={openEdithProfile} />
                        }
                    </DesktopContent>
                </DesktopContentWrap>
            </DesktopContentWrapper>
        </>

    )
}

export default Profile;

