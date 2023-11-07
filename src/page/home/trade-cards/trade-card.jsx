import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import {
    MobileAppBar, MobileLogoGrid, MobileBackButton, MobileBackBtnText, SecurityBtnBody, MobileProfileBalanceWrap,
    MobileActionButtonWrapper, MobileActionButtonContainer, MobileActionButtonImage, MobileActionButtonText,
} from './components'

const TradeCard = ({ redirect }) => {

    return (
        <>
            {/* Mobile Nav Bar */}
            <MobileAppBar container sx={{ display: { xs: 'flex', sm: 'flex', lg: 'flex', xl: 'flex' } }}>
                {/* Logo Box */}
                <MobileLogoGrid item>
                    <MobileLogoGrid item xs={4}>
                        <MobileBackButton onClick={() => redirect('/dashboard')}>
                            <NavigateBeforeIcon />
                        </MobileBackButton>
                    </MobileLogoGrid>
                    <MobileLogoGrid item xs={7}>
                        <MobileBackBtnText>Trade Gift Cards</MobileBackBtnText>
                    </MobileLogoGrid>
                </MobileLogoGrid>

                {/* Main Box */}
                <SecurityBtnBody>
                    <MobileProfileBalanceWrap>
                        <MobileActionButtonWrapper>
                            <MobileActionButtonContainer onClick={() => redirect('/cards')}>
                                <MobileActionButtonImage src="/svg/hot-card.svg" />
                                <MobileActionButtonText>Sell <br /> Gift Cards</MobileActionButtonText>
                            </MobileActionButtonContainer>
                            <MobileActionButtonContainer>
                                <MobileActionButtonImage src="/svg/buy-card.svg" />
                                <MobileActionButtonText>Buy <br /> Gift Cards</MobileActionButtonText>
                            </MobileActionButtonContainer>
                            <MobileActionButtonContainer>
                                <MobileActionButtonImage src="/svg/check-card.svg" />
                                <MobileActionButtonText>Check <br /> Gift Cards</MobileActionButtonText>
                            </MobileActionButtonContainer>
                            {/* <MobileActionButtonContainer>
                                <MobileActionButtonImage src="/svg/buy-card.svg" />
                                <MobileActionButtonText>Buy <br /> Gift Cards</MobileActionButtonText>
                            </MobileActionButtonContainer> */}
                        </MobileActionButtonWrapper>
                    </MobileProfileBalanceWrap>
                </SecurityBtnBody>
            </MobileAppBar>
        </>
    )
}

export default TradeCard;