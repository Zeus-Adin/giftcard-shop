import styled from "styled-components";
import {
    ProfileWrapper, ProfileWrap, ProfileWraps, ProfileContents,
    Title, Container, AvatarContainer, AvatarBox, AvatarNavButtonImage,
    AvatarImage, AvatarTextArea, AvatarText, AvatarName,
    FunctionsContainer, FunctionsContent, FunctionsTextImage,
    FunctionsText, FunctionsImageWrap

} from "./components";

const AppBar = styled('div')(() => ({
    position: 'relative',
    height: '100vh',
}))
const Profile = () => {

    return (
        <ProfileWrapper>
            <ProfileWrap>
                <ProfileWraps>
                    <ProfileContents>
                        <Title>Account</Title>
                        <Container>

                            <AvatarContainer>
                                <AvatarBox>
                                    <AvatarImage src="/svg/pix.svg" />
                                    <AvatarTextArea>
                                        <AvatarText>Chief</AvatarText>
                                        <AvatarName>axus</AvatarName>
                                    </AvatarTextArea>
                                </AvatarBox>
                                <AvatarNavButtonImage src="/svg/arrow-right.svg" />
                            </AvatarContainer>

                            <FunctionsContainer>

                                <FunctionsContent>
                                    <FunctionsTextImage>
                                        <FunctionsImageWrap>
                                            <AvatarNavButtonImage src="/svg/banks.svg" />
                                        </FunctionsImageWrap>
                                        <FunctionsText>Manage Banks</FunctionsText>
                                    </FunctionsTextImage>
                                    <AvatarNavButtonImage src="/svg/arrow-right.svg" />
                                </FunctionsContent>

                                <FunctionsContent>
                                    <FunctionsTextImage>
                                        <FunctionsImageWrap>
                                            <AvatarNavButtonImage src="/svg/security.svg" />
                                        </FunctionsImageWrap>
                                        <FunctionsText>Security</FunctionsText>
                                    </FunctionsTextImage>
                                    <AvatarNavButtonImage src="/svg/arrow-right.svg" />
                                </FunctionsContent>

                                <FunctionsContent>
                                    <FunctionsTextImage>
                                        <FunctionsImageWrap>
                                            <AvatarNavButtonImage src="/svg/support.svg" />
                                        </FunctionsImageWrap>
                                        <FunctionsText>Customer Support</FunctionsText>
                                    </FunctionsTextImage>
                                    <AvatarNavButtonImage src="/svg/arrow-right.svg" />
                                </FunctionsContent>

                                <FunctionsContent>
                                    <FunctionsTextImage>
                                        <FunctionsImageWrap>
                                            <AvatarNavButtonImage src="/svg/terms.svg" />
                                        </FunctionsImageWrap>
                                        <FunctionsText>Terms of Service</FunctionsText>
                                    </FunctionsTextImage>
                                    <AvatarNavButtonImage src="/svg/arrow-right.svg" />
                                </FunctionsContent>

                                <FunctionsContent>
                                    <FunctionsTextImage>
                                        <FunctionsImageWrap>
                                            <AvatarNavButtonImage src="/svg/share.svg" />
                                        </FunctionsImageWrap>
                                        <FunctionsText>Download App (Coming Soon)</FunctionsText>
                                    </FunctionsTextImage>
                                    <AvatarNavButtonImage src="/svg/arrow-right.svg" />
                                </FunctionsContent>

                                <FunctionsContent>
                                    <FunctionsTextImage>
                                        <FunctionsImageWrap style={{ backgroundColor: '#E81313' }}>
                                            <AvatarNavButtonImage src="/svg/logout.svg" />
                                        </FunctionsImageWrap>
                                        <FunctionsText>Logout</FunctionsText>
                                    </FunctionsTextImage>
                                    <AvatarNavButtonImage src="/svg/arrow-right.svg" />
                                </FunctionsContent>

                                <FunctionsContent>
                                    <FunctionsTextImage>
                                        <FunctionsImageWrap style={{ backgroundColor: '#E81313' }}>
                                            <AvatarNavButtonImage src="/svg/delete.svg" />
                                        </FunctionsImageWrap>
                                        <FunctionsText>Delete Account</FunctionsText>
                                    </FunctionsTextImage>
                                    <AvatarNavButtonImage src="/svg/arrow-right.svg" />
                                </FunctionsContent>

                            </FunctionsContainer>

                        </Container>
                    </ProfileContents>
                </ProfileWraps>
            </ProfileWrap>
        </ProfileWrapper>
    )
}

export default Profile;