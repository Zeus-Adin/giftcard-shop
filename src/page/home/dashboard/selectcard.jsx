import { Grid } from "@mui/material";
import styled from "styled-components";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// Mobile Componets
// Mobile Header Components
const MobileAppBar = styled(Grid)(({ }) => ({
    display: 'flex',
    position: "relative",
    height: "100vh",
}))
const MobileHeader = styled('div')(({ }) => ({
    position: 'absolute',
    width: '100%',
    height: '15rem',
    top: '0px',
    left: '0px',
}))
const MobileHeaderImage = styled('img')(({ }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}))
const MobileHeaderTextWrapper = styled('div')(({ }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    padding: '2.2rem',
    gap: '2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const MobileHeaderTextInnerWrapper = styled('div')(({ }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent: 'center',
    alignItems: 'center',
}))
const MobileHeaderBackButtonWrapper = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileHeaderBackButtonInnerWrapper = styled('div')(({ }) => ({
    background: 'rgba(255, 255, 255, 0.1)',
    height: '4rem',
    width: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '.8rem',
    cursor: 'pointer',
}))
const MobileHeaderText = styled('p')(({ }) => ({
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: '1.3rem',
    textAlign: 'center',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileHeaderInputWrapper = styled('div')(({ }) => ({
    backgroundColor: 'rgb(104, 91, 225)',
    borderRadius: '4rem',
    padding: '1rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileHeaderInputImage = styled('img')(({ }) => ({

}))
const MobileHeaderInput = styled('input')(({ }) => ({
    all: 'unset',
    marginLeft: '2rem',
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    width: '100%',
    fontSize: '16px',
}))

// Cards Components
const CardsWrapper = styled('div')(({ }) => ({
    marginTop: '16rem',
    gap: '2.4rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
    height: '150vh'
    // backgroundColor: 'red'
}))
const CardsInnerWrapper = styled('div')(({ }) => ({
    flexWrap: 'wrap',
    gap: '2.4rem',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const CardItermWrapper = styled('div')(({ }) => ({
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out 0s',
    justifyContent: 'flex-start',
    alignCtems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
    marginTop: '1rem'
}))
const CardItermInnerWrapper = styled('div')(({ }) => ({
    position: 'relative',
    gap: '3.2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const CardItermContentWrapper = styled('div')(({ }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const CardItermContentText = styled('p')(({ }) => ({
    color: '#3F1E4B',
    fontSize: '1.6rem',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '600'
}))
const CardItermContentImage = styled('img')(({ }) => ({
    width: '6rem'
}))

const SecurityBtnBody = styled('div')(({ }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
}))

// Desktop Components
const DesktopViewWrapper = styled(Grid)(({ }) => ({
    width: 'calc(100vw - 250px)',
    overflowY: 'scroll',
    backgroundColor: '',
    overflow: 'auto',
    height: '100vh',
    transition: 'width 0.3s ease-in-out 0s',
    padding: '2rem 2rem',
}))

const SelectCard = ({ navSellCard }) => {

    return (
        <>
            {/* Mobile Nav Bar */}
            <MobileAppBar container sx={{ display: { xs: 'flex', sm: 'flex', lg: 'none', xl: 'none' } }}>
                {/* Logo Box */}
                <MobileHeader>
                    <MobileHeaderImage src="/svg/blue-page-header.svg" />
                    <MobileHeaderTextWrapper>
                        <MobileHeaderTextInnerWrapper>
                            <MobileHeaderBackButtonWrapper>
                                <MobileHeaderBackButtonInnerWrapper onClick={() => navSellCard()}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.9993 20.67C14.8093 20.67 14.6193 20.6 14.4693 20.45L7.9493 13.93C6.8893 12.87 6.8893 11.13 7.9493 10.07L14.4693 3.55002C14.7593 3.26002 15.2393 3.26002 15.5293 3.55002C15.8193 3.84002 15.8193 4.32002 15.5293 4.61002L9.0093 11.13C8.5293 11.61 8.5293 12.39 9.0093 12.87L15.5293 19.39C15.8193 19.68 15.8193 20.16 15.5293 20.45C15.3793 20.59 15.1893 20.67 14.9993 20.67Z" color="white" fill="white"></path>
                                    </svg>
                                </MobileHeaderBackButtonInnerWrapper>
                            </MobileHeaderBackButtonWrapper>
                            <MobileHeaderText>Sell Gift Cards</MobileHeaderText>
                        </MobileHeaderTextInnerWrapper>
                        <MobileHeaderInputWrapper>
                            <MobileHeaderInputImage src="/svg/search-icon.svg" />
                            <MobileHeaderInput placeholder="Search gift card category" />
                        </MobileHeaderInputWrapper>
                    </MobileHeaderTextWrapper>
                </MobileHeader>

                {/* Main Content */}
                <SecurityBtnBody>
                    <CardsWrapper>
                        <CardsInnerWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#f2ac43">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#9082f5">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#5b750e">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#d64b29">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#b97530">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#392042">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#05b4b7">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#762b4c">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#7d2649">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#fa4b04">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#1e1e1e">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#bbbbbb">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#ddb056">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#16181b">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#211d22">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                        <path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#1c3b54">
                                        </path>
                                    </svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2"><path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#211d22"></path></svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2"><path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#211d22"></path></svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2"><path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#211d22"></path></svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                            <CardItermWrapper>
                                <CardItermInnerWrapper>
                                    <svg width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2"><path d="M0 30C0 13.4315 13.4315 0 30 0H270C286.569 0 300 13.4315 300 30V59.3156C300 76.5275 285.549 90.2102 268.363 89.2709L28.3628 76.1538C12.4542 75.2843 0 62.1309 0 46.1985V30Z" fill="#211d22"></path></svg>
                                    <CardItermContentWrapper>
                                        <CardItermContentText>Amazon</CardItermContentText>
                                        <CardItermContentImage src="/icon/amazon.png" />
                                    </CardItermContentWrapper>
                                </CardItermInnerWrapper>
                            </CardItermWrapper>

                        </CardsInnerWrapper>
                    </CardsWrapper>
                </SecurityBtnBody>


            </MobileAppBar>

            {/* Desktop Nav Bar */}
            <DesktopViewWrapper sx={{ display: { xs: 'none', sm: 'none', lg: 'flex', xl: 'flex' } }}>

            </DesktopViewWrapper>
        </>
    )
}

export default SelectCard;