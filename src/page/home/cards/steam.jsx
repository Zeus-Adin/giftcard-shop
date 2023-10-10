import { Button, Fab, Grid } from "@mui/material";
import styled from "styled-components";
import { useEffect, useState } from "react";

// Mobile Componets
// Mobile Header Components
const AppBar = styled('div')(({ }) => ({
    position: 'relative',
    height: '100vh',
}))

// App Header Components
const AppHeader = styled('div')(({ }) => ({
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
const AppHeaderButtonWrapper = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const AppHeaderButton = styled('div')(({ }) => ({
    height: '4rem',
    width: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: '.8rem',
    cursor: 'pointer',
}))
const AppHeaderTextArea = styled('p')(({ }) => ({
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: '1.5rem',
    textAlign: 'center',
    lineHeight: '1rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

// App Content Components
const AppBody = styled('div')(({ }) => ({
    width: '100%',
    height: '100vh',
    padding: '0.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr repeat(2, minmax(min-content, 20rem)) 1fr',
    position: 'relative',
}))
const AppInnerBody = styled('div')(({ }) => ({
    marginTop: '5rem',
    gridColumn: '2 / 4',
    height: 'calc(100% + 15rem)',
}))
const AppBodyContents = styled('div')(({ }) => ({
    width: '100%',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const AppBodyContentsWrapper = styled('div')(({ }) => ({
    marginTop: '5.5rem',
    gap: '2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
    width: '100%'
}))

const CurrencySelectInnerWrap = styled('div')(({ }) => ({
    maxWidth: '45rem'
}))
const CurrencySelectButton = styled('button')(({ }) => ({
    color: '#4F4F4F',
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1.6rem',
    lineHeight: '1',
    height: '35px',
    backgroundColor: '#F2F2F2',
    color: 'black',
    cursor: 'pointer',
    width: '-webkit-fill-available',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    letterSpacing: '.8rem',
    borderRadius: '4rem',
    padding: '1.6rem 1.8rem',
    gap: '5px',
}))
const CurrencySelectButtonText = styled('span')(({ }) => ({
    pointerEvents: 'none'
}))
const CurrencySelectButtonIconImage = styled('img')(({ }) => ({
    width: '1.6rem'
}))

const AppBodyDivider = styled('div')(({ }) => ({
    marginTop: '0px',
    marginBottom: '0px',
    gap: '1.6rem',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const AppBodyDividerText = styled('p')(({ }) => ({
    whiteSpace: 'nowrap',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '500'
}))
const AppBodyDividerLine = styled('div')(({ }) => ({
    width: '100%',
    height: '1px',
    backgroundColor: '#EBE9FB',
}))

const CardType = styled('div')(({ }) => ({
    flexWrap: 'wrap',
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const CardInActive = styled('div')(({ }) => ({
    gap: '2rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '12rem',
    height: '8rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out 0s',
    borderRadius: '0.8rem',
    backgroundColor: '#F2F2F2',
    border: '1px solid transparent',
    paddingLeft: '0.4rem',
    paddingRight: '0.4rem',
    display: 'flex',
}))
const CardActive = styled('div')(({ }) => ({
    gap: '2rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '12rem',
    height: '8rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out 0s',
    borderRadius: '0.8rem',
    border: '1px solid #7165E3',
    backgroundColor: '#EBE9FB',
    paddingLeft: '0.4rem',
    paddingRight: '0.4rem',
    display: 'flex',
}))
const CardText = styled('p')(({ }) => ({
    fontSize: '1.5rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

const CardAmount = styled('div')(({ }) => ({
    gap: '1.6rem',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const CardAmountWrapper = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    display: 'flex',
}))
const CardAmountInnerWrapper = styled('div')(({ }) => ({
    backgroundColor: '#F2F2F2',
    width: '100%',
    borderRadius: '5rem',
    padding: '1.5rem 2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '1px solid transparent',
    transition: 'all 0.2s ease-in-out 0s',
}))
const CardAmountContent = styled('div')(({ }) => ({
    width: '100%'
}))
const CardAmountLabel = styled('label')(({ }) => ({
    display: 'block',
    color: '#4F4F4F',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: '1.2rem',
    letterSpacing: '0.8',
    willChange: 'color',
    transition: 'color 0.2s ease-in-out 0s',
}))
const CardAmountInput = styled('input')(({ }) => ({
    transition: 'all 0.3s ease-in 0s',
    all: 'unset',
    fontFamily: 'var(--fonts-medium)',
    color: 'var(--colors-gray400)',
    fontSize: '1.6rem',
    letterSpacing: '0.4rem',
    width: '100%',
    marginTop: '0.8rem',
}))

const ReturnCalculator = styled('div')(({ }) => ({
    marginTop: '2.4rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
}))
const ReturnCalculatorHeaderText = styled('p')(({ }) => ({
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1.5rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    marginTop: '1rem',
    marginBottom: '1rem',
    fontWeight: '500'
}))
const ReturnCalculatorValueWrapper = styled('div')(({ }) => ({
    gap: '0.8rem',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const ReturnCalculatorValueText = styled('p')(({ }) => ({
    color: '#EBE9FB',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    fontSize: '2.8rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '700'
}))

const ProceedBtnWrapper = styled('div')(({ }) => ({
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const ProceedBtn = styled('button')(({ }) => ({
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
    gap: '1.6rem',
    transition: 'all 0.2s ease-in-out 0s'
}))
const ProceedBtnText = styled('div')(({ }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',
}))
// MovileView Components
// const

const Steam = ({ redirect }) => {
    const [selectedCardType, setSelectedCardType] = useState(0);

    function selectCardType(type) {
        console.log(type)
        setSelectedCardType(type);
    }

    useEffect(() => {

    }, [selectedCardType])

    return (
        <AppBar>
            {/* MobileView */}
            <Grid xs={{ sm: 'flex', xs: 'flex', lg: 'none', xl: 'none' }}>
                <AppHeader>
                    <AppHeaderButtonWrapper>
                        <AppHeaderButton onClick={() => redirect('/dashboard')}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9993 20.67C14.8093 20.67 14.6193 20.6 14.4693 20.45L7.9493 13.93C6.8893 12.87 6.8893 11.13 7.9493 10.07L14.4693 3.55002C14.7593 3.26002 15.2393 3.26002 15.5293 3.55002C15.8193 3.84002 15.8193 4.32002 15.5293 4.61002L9.0093 11.13C8.5293 11.61 8.5293 12.39 9.0093 12.87L15.5293 19.39C15.8193 19.68 15.8193 20.16 15.5293 20.45C15.3793 20.59 15.1893 20.67 14.9993 20.67Z" color="#292D32" fill="black">
                                </path>
                            </svg>
                        </AppHeaderButton>
                    </AppHeaderButtonWrapper>
                    <AppHeaderTextArea>Steam</AppHeaderTextArea>
                </AppHeader>
                <AppBody>
                    <AppInnerBody>
                        <AppBodyContents>
                            <AppBodyContentsWrapper>

                                <CurrencySelectInnerWrap>
                                    <CurrencySelectButton>
                                        <CurrencySelectButtonText>Select Currency</CurrencySelectButtonText>
                                        <span aria-hidden="true"><CurrencySelectButtonIconImage src="/svg/chevron-down.svg" alt="" /></span>
                                    </CurrencySelectButton>
                                </CurrencySelectInnerWrap>

                                <AppBodyDivider>
                                    <AppBodyDividerText>Select Gift Card Type</AppBodyDividerText>
                                    <AppBodyDividerLine />
                                </AppBodyDivider>

                                <CardType>
                                    {selectedCardType === 1
                                        ? <CardActive>
                                            <svg width="18" height="12" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.2297 8.89804C22.6769 8.89804 23.0324 8.54255 23.0324 8.09532V7.02885C23.0324 2.32722 21.599 0.893799 16.8974 0.893799H6.23271C1.53108 0.893799 0.0976562 2.32722 0.0976562 7.02885V7.56782C0.0976562 8.01505 0.453145 8.37054 0.900374 8.37054C1.93244 8.37054 2.76956 9.20766 2.76956 10.2397C2.76956 11.2718 1.93244 12.0974 0.900374 12.0974C0.453145 12.0974 0.0976562 12.4529 0.0976562 12.9002V13.4391C0.0976562 18.1408 1.53108 19.5742 6.23271 19.5742H16.8974C21.599 19.5742 23.0324 18.1408 23.0324 13.4391C23.0324 12.9919 22.6769 12.6364 22.2297 12.6364C21.1977 12.6364 20.3605 11.7993 20.3605 10.7672C20.3605 9.73516 21.1977 8.89804 22.2297 8.89804ZM8.12483 6.65043C8.75554 6.65043 9.27157 7.16646 9.27157 7.79717C9.27157 8.42788 8.767 8.94391 8.12483 8.94391C7.49412 8.94391 6.97809 8.42788 6.97809 7.79717C6.97809 7.16646 7.48266 6.65043 8.12483 6.65043ZM15.0053 14.6776C14.3631 14.6776 13.8471 14.1616 13.8471 13.5309C13.8471 12.9002 14.3631 12.3841 14.9938 12.3841C15.6245 12.3841 16.1405 12.9002 16.1405 13.5309C16.1405 14.1616 15.6474 14.6776 15.0053 14.6776ZM16.0373 7.33847L8.31978 15.056C8.14776 15.228 7.92988 15.3083 7.712 15.3083C7.49412 15.3083 7.27624 15.228 7.10423 15.056C6.77168 14.7235 6.77168 14.173 7.10423 13.8405L14.8218 6.12293C15.1543 5.79038 15.7048 5.79038 16.0373 6.12293C16.3699 6.45548 16.3699 7.00592 16.0373 7.33847Z" fill="#7165E3">
                                                </path>
                                            </svg>
                                            <CardText>Physical</CardText>
                                        </CardActive>
                                        : <CardInActive onClick={() => selectCardType(1)}>
                                            <svg width="18" height="12" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.2297 8.89804C22.6769 8.89804 23.0324 8.54255 23.0324 8.09532V7.02885C23.0324 2.32722 21.599 0.893799 16.8974 0.893799H6.23271C1.53108 0.893799 0.0976562 2.32722 0.0976562 7.02885V7.56782C0.0976562 8.01505 0.453145 8.37054 0.900374 8.37054C1.93244 8.37054 2.76956 9.20766 2.76956 10.2397C2.76956 11.2718 1.93244 12.0974 0.900374 12.0974C0.453145 12.0974 0.0976562 12.4529 0.0976562 12.9002V13.4391C0.0976562 18.1408 1.53108 19.5742 6.23271 19.5742H16.8974C21.599 19.5742 23.0324 18.1408 23.0324 13.4391C23.0324 12.9919 22.6769 12.6364 22.2297 12.6364C21.1977 12.6364 20.3605 11.7993 20.3605 10.7672C20.3605 9.73516 21.1977 8.89804 22.2297 8.89804ZM8.12483 6.65043C8.75554 6.65043 9.27157 7.16646 9.27157 7.79717C9.27157 8.42788 8.767 8.94391 8.12483 8.94391C7.49412 8.94391 6.97809 8.42788 6.97809 7.79717C6.97809 7.16646 7.48266 6.65043 8.12483 6.65043ZM15.0053 14.6776C14.3631 14.6776 13.8471 14.1616 13.8471 13.5309C13.8471 12.9002 14.3631 12.3841 14.9938 12.3841C15.6245 12.3841 16.1405 12.9002 16.1405 13.5309C16.1405 14.1616 15.6474 14.6776 15.0053 14.6776ZM16.0373 7.33847L8.31978 15.056C8.14776 15.228 7.92988 15.3083 7.712 15.3083C7.49412 15.3083 7.27624 15.228 7.10423 15.056C6.77168 14.7235 6.77168 14.173 7.10423 13.8405L14.8218 6.12293C15.1543 5.79038 15.7048 5.79038 16.0373 6.12293C16.3699 6.45548 16.3699 7.00592 16.0373 7.33847Z" fill="#7165E3">
                                                </path>
                                            </svg>
                                            <CardText>Physical</CardText>
                                        </CardInActive>
                                    }

                                    {selectedCardType === 2
                                        ? <CardActive>
                                            <svg width="18" height="12" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.2297 8.89804C22.6769 8.89804 23.0324 8.54255 23.0324 8.09532V7.02885C23.0324 2.32722 21.599 0.893799 16.8974 0.893799H6.23271C1.53108 0.893799 0.0976562 2.32722 0.0976562 7.02885V7.56782C0.0976562 8.01505 0.453145 8.37054 0.900374 8.37054C1.93244 8.37054 2.76956 9.20766 2.76956 10.2397C2.76956 11.2718 1.93244 12.0974 0.900374 12.0974C0.453145 12.0974 0.0976562 12.4529 0.0976562 12.9002V13.4391C0.0976562 18.1408 1.53108 19.5742 6.23271 19.5742H16.8974C21.599 19.5742 23.0324 18.1408 23.0324 13.4391C23.0324 12.9919 22.6769 12.6364 22.2297 12.6364C21.1977 12.6364 20.3605 11.7993 20.3605 10.7672C20.3605 9.73516 21.1977 8.89804 22.2297 8.89804ZM8.12483 6.65043C8.75554 6.65043 9.27157 7.16646 9.27157 7.79717C9.27157 8.42788 8.767 8.94391 8.12483 8.94391C7.49412 8.94391 6.97809 8.42788 6.97809 7.79717C6.97809 7.16646 7.48266 6.65043 8.12483 6.65043ZM15.0053 14.6776C14.3631 14.6776 13.8471 14.1616 13.8471 13.5309C13.8471 12.9002 14.3631 12.3841 14.9938 12.3841C15.6245 12.3841 16.1405 12.9002 16.1405 13.5309C16.1405 14.1616 15.6474 14.6776 15.0053 14.6776ZM16.0373 7.33847L8.31978 15.056C8.14776 15.228 7.92988 15.3083 7.712 15.3083C7.49412 15.3083 7.27624 15.228 7.10423 15.056C6.77168 14.7235 6.77168 14.173 7.10423 13.8405L14.8218 6.12293C15.1543 5.79038 15.7048 5.79038 16.0373 6.12293C16.3699 6.45548 16.3699 7.00592 16.0373 7.33847Z" fill="#7165E3">
                                                </path>
                                            </svg>
                                            <CardText>Ecode</CardText>
                                        </CardActive>
                                        : <CardInActive onClick={() => selectCardType(2)}>
                                            <svg width="18" height="12" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.2297 8.89804C22.6769 8.89804 23.0324 8.54255 23.0324 8.09532V7.02885C23.0324 2.32722 21.599 0.893799 16.8974 0.893799H6.23271C1.53108 0.893799 0.0976562 2.32722 0.0976562 7.02885V7.56782C0.0976562 8.01505 0.453145 8.37054 0.900374 8.37054C1.93244 8.37054 2.76956 9.20766 2.76956 10.2397C2.76956 11.2718 1.93244 12.0974 0.900374 12.0974C0.453145 12.0974 0.0976562 12.4529 0.0976562 12.9002V13.4391C0.0976562 18.1408 1.53108 19.5742 6.23271 19.5742H16.8974C21.599 19.5742 23.0324 18.1408 23.0324 13.4391C23.0324 12.9919 22.6769 12.6364 22.2297 12.6364C21.1977 12.6364 20.3605 11.7993 20.3605 10.7672C20.3605 9.73516 21.1977 8.89804 22.2297 8.89804ZM8.12483 6.65043C8.75554 6.65043 9.27157 7.16646 9.27157 7.79717C9.27157 8.42788 8.767 8.94391 8.12483 8.94391C7.49412 8.94391 6.97809 8.42788 6.97809 7.79717C6.97809 7.16646 7.48266 6.65043 8.12483 6.65043ZM15.0053 14.6776C14.3631 14.6776 13.8471 14.1616 13.8471 13.5309C13.8471 12.9002 14.3631 12.3841 14.9938 12.3841C15.6245 12.3841 16.1405 12.9002 16.1405 13.5309C16.1405 14.1616 15.6474 14.6776 15.0053 14.6776ZM16.0373 7.33847L8.31978 15.056C8.14776 15.228 7.92988 15.3083 7.712 15.3083C7.49412 15.3083 7.27624 15.228 7.10423 15.056C6.77168 14.7235 6.77168 14.173 7.10423 13.8405L14.8218 6.12293C15.1543 5.79038 15.7048 5.79038 16.0373 6.12293C16.3699 6.45548 16.3699 7.00592 16.0373 7.33847Z" fill="#7165E3">
                                                </path>
                                            </svg>
                                            <CardText>Ecode</CardText>
                                        </CardInActive>
                                    }
                                </CardType>

                                {/* ----------------------- */}

                                <CurrencySelectInnerWrap>
                                    <CurrencySelectButton>
                                        <CurrencySelectButtonText>Select sub-category</CurrencySelectButtonText>
                                        <span aria-hidden="true"><CurrencySelectButtonIconImage src="/svg/chevron-down.svg" alt="" /></span>
                                    </CurrencySelectButton>
                                </CurrencySelectInnerWrap>

                                <CardAmount>

                                    <CardAmountWrapper>
                                        <CardAmountInnerWrapper>
                                            <CardAmountContent>
                                                <CardAmountLabel>Enter Card Amount</CardAmountLabel>
                                                <CardAmountInput placeholder="e.g $100" />
                                            </CardAmountContent>
                                        </CardAmountInnerWrapper>
                                    </CardAmountWrapper>

                                    <CardAmountWrapper>
                                        <CardAmountInnerWrapper>
                                            <CardAmountContent>
                                                <CardAmountLabel>How Many</CardAmountLabel>
                                                <CardAmountInput placeholder="x1" />
                                            </CardAmountContent>
                                        </CardAmountInnerWrapper>
                                    </CardAmountWrapper>
                                </CardAmount>

                                <ReturnCalculator>
                                    <ReturnCalculatorHeaderText>You would get:</ReturnCalculatorHeaderText>
                                    <ReturnCalculatorValueWrapper>
                                        <ReturnCalculatorValueText>NGN 0.00</ReturnCalculatorValueText>
                                    </ReturnCalculatorValueWrapper>
                                    <ReturnCalculatorHeaderText>Rate:0</ReturnCalculatorHeaderText>
                                </ReturnCalculator>

                                {/* ---------------------- */}

                                <ProceedBtnWrapper>
                                    <ProceedBtn>
                                        <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48">
                                            </path>
                                        </svg>
                                        <ProceedBtnText>Proceed</ProceedBtnText>
                                    </ProceedBtn>
                                </ProceedBtnWrapper>



                            </AppBodyContentsWrapper>
                        </AppBodyContents>
                    </AppInnerBody>
                </AppBody>
            </Grid>
        </AppBar>
    )
}

export default Steam;