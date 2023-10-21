import { Button, Fab, Grid } from "@mui/material";
import styled from "styled-components";
import { useEffect, useState } from "react";

import {
    // Mobile Header Components
    MobileHeaderWrapper, MobileHeaderContent, MobileHeaderBackBottunWrap, MobileHeaderBackBottonText,
    ContentWrapper, ContentWrap, Content, Contents, ContentsHolder,
    CurrencySelect, CurrencySelectButton, CurrencySelectButtonImage,
    CurrencyDivivder, CurrencyText, CurrencyLine,
    CardTypeWrapper, CardTypeContentWrapperActive, CardTypeContentWrapperInActive, CardTypeContenText,
    CardSalesWrapper, CardSalesInputArea, CardSalesInputWrapper, CardSalesInputWrap,
    CardSalesInputContents, CardSalesInputContentsLabel, CardSalesInputContentsInput,
    CardSalesCalculator, CardSalesCalculatorText, CardSalesCalculatorBalanceWrapper,
    CardSalesCalculatorBalanceText, CardSalesCalculatorBalanceSubText
} from "./components";
import { useLocation } from "react-router-dom";

const AppBar = styled('div')(({ }) => ({
    position: 'relative',
    height: '100vh',
}))


const Sell = ({ redirect }) => {
    const [selectedCardType, setSelectedCardType] = useState(0);
    const searchParams = new URLSearchParams(window.location.search);
    const card = searchParams.get('card');
    const label = searchParams.get('label');

    function selectCardType(type) {
        console.log(type)
        setSelectedCardType(type);
    }

    useEffect(() => {

    }, [selectedCardType])

    return (
        <AppBar>
            {/* Mobile Header */}
            <MobileHeaderWrapper>
                <MobileHeaderContent>
                    <MobileHeaderBackBottunWrap>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9993 20.67C14.8093 20.67 14.6193 20.6 14.4693 20.45L7.9493 13.93C6.8893 12.87 6.8893 11.13 7.9493 10.07L14.4693 3.55002C14.7593 3.26002 15.2393 3.26002 15.5293 3.55002C15.8193 3.84002 15.8193 4.32002 15.5293 4.61002L9.0093 11.13C8.5293 11.61 8.5293 12.39 9.0093 12.87L15.5293 19.39C15.8193 19.68 15.8193 20.16 15.5293 20.45C15.3793 20.59 15.1893 20.67 14.9993 20.67Z" color="#292D32" fill="black">
                            </path>
                        </svg>
                    </MobileHeaderBackBottunWrap>
                </MobileHeaderContent>
                <MobileHeaderBackBottonText>{label}</MobileHeaderBackBottonText>
            </MobileHeaderWrapper>

            {/* Content */}
            <ContentWrapper>
                <ContentWrap>
                    <Content>
                        <Contents>
                            <ContentsHolder>

                                <CurrencySelect>
                                    <CurrencySelectButton>
                                        <span style={{ pointerEvents: 'none' }}>United States(USD)</span>
                                        <span aria-hidden="true">
                                            <CurrencySelectButtonImage src="/svg/chevron-down.svg" alt="" />
                                        </span>
                                    </CurrencySelectButton>
                                </CurrencySelect>

                                <CurrencyDivivder>
                                    <CurrencyText>Select Giftcard Type</CurrencyText>
                                    <CurrencyLine />
                                </CurrencyDivivder>

                                <CardTypeWrapper>

                                    {selectedCardType === 1
                                        ? <CardTypeContentWrapperActive>
                                            <svg width="18" height="12" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.2297 8.89804C22.6769 8.89804 23.0324 8.54255 23.0324 8.09532V7.02885C23.0324 2.32722 21.599 0.893799 16.8974 0.893799H6.23271C1.53108 0.893799 0.0976562 2.32722 0.0976562 7.02885V7.56782C0.0976562 8.01505 0.453145 8.37054 0.900374 8.37054C1.93244 8.37054 2.76956 9.20766 2.76956 10.2397C2.76956 11.2718 1.93244 12.0974 0.900374 12.0974C0.453145 12.0974 0.0976562 12.4529 0.0976562 12.9002V13.4391C0.0976562 18.1408 1.53108 19.5742 6.23271 19.5742H16.8974C21.599 19.5742 23.0324 18.1408 23.0324 13.4391C23.0324 12.9919 22.6769 12.6364 22.2297 12.6364C21.1977 12.6364 20.3605 11.7993 20.3605 10.7672C20.3605 9.73516 21.1977 8.89804 22.2297 8.89804ZM8.12483 6.65043C8.75554 6.65043 9.27157 7.16646 9.27157 7.79717C9.27157 8.42788 8.767 8.94391 8.12483 8.94391C7.49412 8.94391 6.97809 8.42788 6.97809 7.79717C6.97809 7.16646 7.48266 6.65043 8.12483 6.65043ZM15.0053 14.6776C14.3631 14.6776 13.8471 14.1616 13.8471 13.5309C13.8471 12.9002 14.3631 12.3841 14.9938 12.3841C15.6245 12.3841 16.1405 12.9002 16.1405 13.5309C16.1405 14.1616 15.6474 14.6776 15.0053 14.6776ZM16.0373 7.33847L8.31978 15.056C8.14776 15.228 7.92988 15.3083 7.712 15.3083C7.49412 15.3083 7.27624 15.228 7.10423 15.056C6.77168 14.7235 6.77168 14.173 7.10423 13.8405L14.8218 6.12293C15.1543 5.79038 15.7048 5.79038 16.0373 6.12293C16.3699 6.45548 16.3699 7.00592 16.0373 7.33847Z" fill="#7165E3">
                                                </path>
                                            </svg>
                                            <CardTypeContenText>Physical</CardTypeContenText>
                                        </CardTypeContentWrapperActive>
                                        : <CardTypeContentWrapperInActive onClick={() => selectCardType(1)}>
                                            <svg width="18" height="12" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.2297 8.89804C22.6769 8.89804 23.0324 8.54255 23.0324 8.09532V7.02885C23.0324 2.32722 21.599 0.893799 16.8974 0.893799H6.23271C1.53108 0.893799 0.0976562 2.32722 0.0976562 7.02885V7.56782C0.0976562 8.01505 0.453145 8.37054 0.900374 8.37054C1.93244 8.37054 2.76956 9.20766 2.76956 10.2397C2.76956 11.2718 1.93244 12.0974 0.900374 12.0974C0.453145 12.0974 0.0976562 12.4529 0.0976562 12.9002V13.4391C0.0976562 18.1408 1.53108 19.5742 6.23271 19.5742H16.8974C21.599 19.5742 23.0324 18.1408 23.0324 13.4391C23.0324 12.9919 22.6769 12.6364 22.2297 12.6364C21.1977 12.6364 20.3605 11.7993 20.3605 10.7672C20.3605 9.73516 21.1977 8.89804 22.2297 8.89804ZM8.12483 6.65043C8.75554 6.65043 9.27157 7.16646 9.27157 7.79717C9.27157 8.42788 8.767 8.94391 8.12483 8.94391C7.49412 8.94391 6.97809 8.42788 6.97809 7.79717C6.97809 7.16646 7.48266 6.65043 8.12483 6.65043ZM15.0053 14.6776C14.3631 14.6776 13.8471 14.1616 13.8471 13.5309C13.8471 12.9002 14.3631 12.3841 14.9938 12.3841C15.6245 12.3841 16.1405 12.9002 16.1405 13.5309C16.1405 14.1616 15.6474 14.6776 15.0053 14.6776ZM16.0373 7.33847L8.31978 15.056C8.14776 15.228 7.92988 15.3083 7.712 15.3083C7.49412 15.3083 7.27624 15.228 7.10423 15.056C6.77168 14.7235 6.77168 14.173 7.10423 13.8405L14.8218 6.12293C15.1543 5.79038 15.7048 5.79038 16.0373 6.12293C16.3699 6.45548 16.3699 7.00592 16.0373 7.33847Z" fill="#7165E3">
                                                </path>
                                            </svg>
                                            <CardTypeContenText>Physical</CardTypeContenText>
                                        </CardTypeContentWrapperInActive>
                                    }
                                    {selectedCardType === 2
                                        ? <CardTypeContentWrapperActive>
                                            <svg width="18" height="12" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.2297 8.89804C22.6769 8.89804 23.0324 8.54255 23.0324 8.09532V7.02885C23.0324 2.32722 21.599 0.893799 16.8974 0.893799H6.23271C1.53108 0.893799 0.0976562 2.32722 0.0976562 7.02885V7.56782C0.0976562 8.01505 0.453145 8.37054 0.900374 8.37054C1.93244 8.37054 2.76956 9.20766 2.76956 10.2397C2.76956 11.2718 1.93244 12.0974 0.900374 12.0974C0.453145 12.0974 0.0976562 12.4529 0.0976562 12.9002V13.4391C0.0976562 18.1408 1.53108 19.5742 6.23271 19.5742H16.8974C21.599 19.5742 23.0324 18.1408 23.0324 13.4391C23.0324 12.9919 22.6769 12.6364 22.2297 12.6364C21.1977 12.6364 20.3605 11.7993 20.3605 10.7672C20.3605 9.73516 21.1977 8.89804 22.2297 8.89804ZM8.12483 6.65043C8.75554 6.65043 9.27157 7.16646 9.27157 7.79717C9.27157 8.42788 8.767 8.94391 8.12483 8.94391C7.49412 8.94391 6.97809 8.42788 6.97809 7.79717C6.97809 7.16646 7.48266 6.65043 8.12483 6.65043ZM15.0053 14.6776C14.3631 14.6776 13.8471 14.1616 13.8471 13.5309C13.8471 12.9002 14.3631 12.3841 14.9938 12.3841C15.6245 12.3841 16.1405 12.9002 16.1405 13.5309C16.1405 14.1616 15.6474 14.6776 15.0053 14.6776ZM16.0373 7.33847L8.31978 15.056C8.14776 15.228 7.92988 15.3083 7.712 15.3083C7.49412 15.3083 7.27624 15.228 7.10423 15.056C6.77168 14.7235 6.77168 14.173 7.10423 13.8405L14.8218 6.12293C15.1543 5.79038 15.7048 5.79038 16.0373 6.12293C16.3699 6.45548 16.3699 7.00592 16.0373 7.33847Z" fill="#7165E3">
                                                </path>
                                            </svg>
                                            <CardTypeContenText>Ecode</CardTypeContenText>
                                        </CardTypeContentWrapperActive>
                                        : <CardTypeContentWrapperInActive onClick={() => selectCardType(2)}>
                                            <svg width="18" height="12" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.2297 8.89804C22.6769 8.89804 23.0324 8.54255 23.0324 8.09532V7.02885C23.0324 2.32722 21.599 0.893799 16.8974 0.893799H6.23271C1.53108 0.893799 0.0976562 2.32722 0.0976562 7.02885V7.56782C0.0976562 8.01505 0.453145 8.37054 0.900374 8.37054C1.93244 8.37054 2.76956 9.20766 2.76956 10.2397C2.76956 11.2718 1.93244 12.0974 0.900374 12.0974C0.453145 12.0974 0.0976562 12.4529 0.0976562 12.9002V13.4391C0.0976562 18.1408 1.53108 19.5742 6.23271 19.5742H16.8974C21.599 19.5742 23.0324 18.1408 23.0324 13.4391C23.0324 12.9919 22.6769 12.6364 22.2297 12.6364C21.1977 12.6364 20.3605 11.7993 20.3605 10.7672C20.3605 9.73516 21.1977 8.89804 22.2297 8.89804ZM8.12483 6.65043C8.75554 6.65043 9.27157 7.16646 9.27157 7.79717C9.27157 8.42788 8.767 8.94391 8.12483 8.94391C7.49412 8.94391 6.97809 8.42788 6.97809 7.79717C6.97809 7.16646 7.48266 6.65043 8.12483 6.65043ZM15.0053 14.6776C14.3631 14.6776 13.8471 14.1616 13.8471 13.5309C13.8471 12.9002 14.3631 12.3841 14.9938 12.3841C15.6245 12.3841 16.1405 12.9002 16.1405 13.5309C16.1405 14.1616 15.6474 14.6776 15.0053 14.6776ZM16.0373 7.33847L8.31978 15.056C8.14776 15.228 7.92988 15.3083 7.712 15.3083C7.49412 15.3083 7.27624 15.228 7.10423 15.056C6.77168 14.7235 6.77168 14.173 7.10423 13.8405L14.8218 6.12293C15.1543 5.79038 15.7048 5.79038 16.0373 6.12293C16.3699 6.45548 16.3699 7.00592 16.0373 7.33847Z" fill="#7165E3">
                                                </path>
                                            </svg>
                                            <CardTypeContenText>Ecode</CardTypeContenText>
                                        </CardTypeContentWrapperInActive>
                                    }


                                </CardTypeWrapper>

                                <CardSalesWrapper>
                                    <CurrencySelectButton>
                                        <span style={{ pointerEvents: 'none' }}>United States(USD)</span>
                                        <span aria-hidden="true">
                                            <CurrencySelectButtonImage src="/svg/chevron-down.svg" alt="" />
                                        </span>
                                    </CurrencySelectButton>
                                    <CardSalesInputArea>
                                        <CardSalesInputWrapper>
                                            <CardSalesInputWrap>
                                                <CardSalesInputContents>
                                                    <CardSalesInputContentsLabel>Enter Card Amount</CardSalesInputContentsLabel>
                                                    <CardSalesInputContentsInput placeholder="e.g $100" />
                                                </CardSalesInputContents>
                                            </CardSalesInputWrap>
                                        </CardSalesInputWrapper>
                                        <CardSalesInputWrapper>
                                            <CardSalesInputWrap>
                                                <CardSalesInputContents>
                                                    <CardSalesInputContentsLabel>How Many</CardSalesInputContentsLabel>
                                                    <CardSalesInputContentsInput placeholder="x1" />
                                                </CardSalesInputContents>
                                            </CardSalesInputWrap>
                                        </CardSalesInputWrapper>
                                    </CardSalesInputArea>
                                </CardSalesWrapper>

                                <CardSalesCalculator>
                                    <CardSalesCalculatorText>You would get:</CardSalesCalculatorText>
                                    <CardSalesCalculatorBalanceWrapper>
                                        <CardSalesCalculatorBalanceText>NGN&nbsp;0.00</CardSalesCalculatorBalanceText>
                                    </CardSalesCalculatorBalanceWrapper>
                                </CardSalesCalculator>
                                <CardSalesCalculatorBalanceSubText>Rate: 0</CardSalesCalculatorBalanceSubText>
                            </ContentsHolder>
                        </Contents>
                    </Content>
                </ContentWrap>
            </ContentWrapper>
        </AppBar>
    )
}

export default Sell;