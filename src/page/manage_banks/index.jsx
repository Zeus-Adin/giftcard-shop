import { Grid } from "@mui/material";
import styled from "styled-components";
import {
    // Mobile Header Components
    HeaderContent, HeaderBackBtnWrapper, HeaderBackBtn,
    // 
    ContentsWrapper, Contents, AddAccountBtn, AddAccountText,
    ContentDivider, ContentDividerText, ContentDividerLine,
    AccountCardWrapper,
    AccountCard,
    Card,
    CardImages,
    CardTextWrapper,
    CardText,
    CardAccountDetailsWrapper,
    CardAccountDetailsNumber,
    CardAccountDetailsBank,
    CardAssignAccountWrapper,
    CardAssignAccountBtn,
    CardAssignAccountBtnText

} from "./components";


const AppBar = styled('div')(() => (
    `
    position: relative;
    height: 100vh;
    `))

const ManageBanks = () => {
    return (
        <AppBar>
            {/* Mobile Header */}
            <Grid sx={{ display: { xs: 'flex', sm: 'flex', lg: 'none', xl: 'none' } }}>
                <HeaderContent>
                    <HeaderBackBtnWrapper>
                        <HeaderBackBtn>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9993 20.67C14.8093 20.67 14.6193 20.6 14.4693 20.45L7.9493 13.93C6.8893 12.87 6.8893 11.13 7.9493 10.07L14.4693 3.55002C14.7593 3.26002 15.2393 3.26002 15.5293 3.55002C15.8193 3.84002 15.8193 4.32002 15.5293 4.61002L9.0093 11.13C8.5293 11.61 8.5293 12.39 9.0093 12.87L15.5293 19.39C15.8193 19.68 15.8193 20.16 15.5293 20.45C15.3793 20.59 15.1893 20.67 14.9993 20.67Z" color="#292D32" fill="black">
                                </path>
                            </svg>
                        </HeaderBackBtn>
                    </HeaderBackBtnWrapper>
                    Manage Bank Accounts
                </HeaderContent>
            </Grid>

            {/* Contents */}
            <ContentsWrapper>
                <Contents>

                    <AddAccountBtn>
                        <img src="/svg/add-bank.svg" alt="add new bank account" />
                        <AddAccountText>Add new <br /> Bank Account</AddAccountText>
                    </AddAccountBtn>

                    <ContentDivider>
                        <ContentDividerText>Saved Bank Account</ContentDividerText>
                        <ContentDividerLine />
                    </ContentDivider>

                    <AccountCardWrapper>
                        <AccountCard>
                            <Card>
                                <CardImages src="/svg/primary-account.svg" />
                                <CardTextWrapper>
                                    <CardText>Primary</CardText>
                                    <CardAccountDetailsWrapper>
                                        <CardAccountDetailsNumber>0724615285</CardAccountDetailsNumber>
                                        <CardAccountDetailsNumber>GODGIFT AYEBAEKEPRETE MORRIS</CardAccountDetailsNumber>
                                        <CardAccountDetailsBank>ACCESS BANK</CardAccountDetailsBank>
                                    </CardAccountDetailsWrapper>
                                </CardTextWrapper>
                            </Card>
                        </AccountCard>
                        <CardAssignAccountWrapper>
                            <CardAssignAccountBtn>
                                <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48">
                                    </path>
                                </svg>
                                <CardAssignAccountBtnText>Make Primary Account</CardAssignAccountBtnText>
                            </CardAssignAccountBtn>
                        </CardAssignAccountWrapper>
                    </AccountCardWrapper>

                </Contents>
            </ContentsWrapper>

        </AppBar>
    )
}

export default ManageBanks;