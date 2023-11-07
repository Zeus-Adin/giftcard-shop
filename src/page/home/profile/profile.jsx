import { Grid } from "@mui/material";
import {
    ProfileWrapper, ProfileWrap, ProfileWraps, ProfileContents,
    Title, Container, AvatarContainer, AvatarBox, AvatarNavButtonImage,
    AvatarImage, AvatarTextArea, AvatarText, AvatarName,
    FunctionsContainer, FunctionsContent, FunctionsTextImage,
    FunctionsText, FunctionsImageWrap

} from "./components";
import { logUserOut } from "../../auth/login/functions"


const Profile = ({ redirect }) => {

    return (
        <ProfileWrapper>
            <ProfileWrap>
                <ProfileWraps>
                    <ProfileContents>
                        <Grid sx={{ display: { md: 'flex', lg: 'none', xl: 'none', xs: 'flex', sm: 'flex', alignItems: 'center', justifyContent: 'center' } }}>
                            <Title>Account</Title>
                        </Grid>

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
                                    <FunctionsTextImage onClick={() => redirect('/manage-banks')}>
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
                                        <FunctionsImageWrap onClick={logUserOut}>
                                            <AvatarNavButtonImage src="/svg/logout.svg" />
                                        </FunctionsImageWrap>
                                        <FunctionsText>Logout</FunctionsText>
                                    </FunctionsTextImage>
                                </FunctionsContent>

                                <FunctionsContent>
                                    <FunctionsTextImage>
                                        <FunctionsImageWrap >
                                            <AvatarNavButtonImage src="/svg/delete.svg" />
                                        </FunctionsImageWrap>
                                        <FunctionsText>Delete Account</FunctionsText>
                                    </FunctionsTextImage>
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