import { CircularProgress } from '@mui/material';
import { getAccounts } from '../../../services/bankhandlers';
import {
    MobileContentWrapper, MobileContentWrap, MobileContent,
    DesktopContentWrapper, DesktopContentWrap, DesktopContent,
    HeaderContentWrapper, HeaderText, HeaderTextWrapper, HeaderUserText,
    HeaderNotificationWrapper, HeaderNotificationIconWrap, HeaderNotificationIconImage,
    SubHeaderContentWrapper, SubHeaderContent, SubHeaderTextWrapper, SubHeaderWalletTypeText,
    SubHeaderWalletBalanceTextWrapper, SubHeaderWalletBalanceTextHeader, SubHeaderWalletBalanceHeaderWrapper,
    BalanceText, CurrencyText, WithdrawBtnWrapper, WithdrawBtn, WithdrawBtnTextWrapper, WithdrawBtnText,
    ProfileContentWrapper, ProfileContentWrap, ProfileAvatar, ProfileStatText, ProfileSubText,
    QuickActionsWrapper, QuickActionsText, QuickActionsWrap, QuickActionsSubText,
    DesktopSubHeaderContentWrapper, DesktopSubHeaderContentLeft, DesktopSubHeaderContentRight, DesktopSubHeaderContentTextWrapper,
    DesktopSubHeaderWalletTypeText, DesktopWithdrawBtn, DesktopWithdrawBtnText, DesktopProfileContentWrapper, DesktopProfileContentWrap,
    DesktopProfileTextContentWrap, DesktopQuickActionLine, DesktopQuickActionsWrapper, DesktopQuickActionsWrap, DesktopQuickActionContentWrapper,
    DesktopQuickActionContentLeftWrap, DesktopQuickActionContentRightWrap, PayBillTextWrapper, PayBillText, PayBillSubText,
} from './components'
import { useEffect, useState } from 'react';

const DashBoard = ({ redirect, openWithdrawModal, userData, setWithdrawToAccount, handleOpenAlertBox, setAlertText }) => {
    const [withdrawFired, setWithdrawFired] = useState(false);

    async function withDraw() {
        setWithdrawFired(true)
        if (userData) {
            console.log(userData)
            const { _id: id, username, balance } = userData;
            if (balance < 50) {
                setAlertText({ title: 'Insufficient funds', paragraph: 'Your balance is low.', reason: 'warning', sender: 'dashboard' })
                handleOpenAlertBox()
                return
            }
            const account = await getAccounts(id, username);
            if (account.accounts.length > 0) {
                setWithdrawFired(false)
                setWithdrawToAccount(account.accounts[0])
                openWithdrawModal()
            } else {
                redirect('/manage-banks');
            }
        }
    }

    return (
        <>
            {/* Mobile */}
            <MobileContentWrapper sx={{ display: { md: 'flex', lg: 'none', xl: 'none', xs: 'flex', sm: 'flex', alignItems: 'center', justifyContent: 'center' } }}>
                <MobileContentWrap>
                    <MobileContent>
                        <HeaderContentWrapper>
                            <HeaderTextWrapper>
                                <HeaderText>Hello</HeaderText>
                                <br />
                                <HeaderUserText>{userData.username}</HeaderUserText>
                            </HeaderTextWrapper>
                            <HeaderNotificationWrapper>
                                <HeaderNotificationIconWrap>
                                    <HeaderNotificationIconImage src="/svg/notification.svg" />
                                </HeaderNotificationIconWrap>
                            </HeaderNotificationWrapper>
                        </HeaderContentWrapper>

                        <SubHeaderContentWrapper>
                            <SubHeaderContent>
                                <svg width="100%" height="100%" viewBox="0 0 175 239" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotateY(180deg)' }}>
                                    <path d="M175 24C175 10.7452 164.255 0 151 0H24C10.7452 0 0 10.7452 0 24V207.332C0 220.055 9.92858 230.567 22.6308 231.293L149.631 238.55C163.401 239.337 175 228.382 175 214.589V24Z" fill="#7165E3">
                                    </path>
                                </svg>
                                <SubHeaderTextWrapper>
                                    <SubHeaderWalletTypeText>Naira Wallet</SubHeaderWalletTypeText>
                                    <SubHeaderWalletBalanceTextWrapper>
                                        <SubHeaderWalletBalanceTextHeader>Balance</SubHeaderWalletBalanceTextHeader>
                                        <SubHeaderWalletBalanceHeaderWrapper>
                                            <BalanceText>{parseFloat(userData.balance).toLocaleString() || '0.00'}</BalanceText>
                                            <CurrencyText>NGN</CurrencyText>
                                        </SubHeaderWalletBalanceHeaderWrapper>
                                    </SubHeaderWalletBalanceTextWrapper>
                                    <WithdrawBtnWrapper>
                                        <WithdrawBtn onClick={() => withDraw()}>
                                            <svg width="100%" height="47" viewBox="0 0 127 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.60451e-06 23.2329C7.18362e-07 10.4017 10.4017 0 23.2329 0H106.426C117.789 0 127 9.21126 127 20.5739C127 31.4265 118.57 40.4128 107.74 41.1058L24.7165 46.4184C11.329 47.2751 2.53096e-06 36.6478 1.60451e-06 23.2329Z" fill="#F5CF48">
                                                </path>
                                            </svg>
                                            <WithdrawBtnTextWrapper>
                                                {!withdrawFired ? <WithdrawBtnText>Withdraw</WithdrawBtnText> : <CircularProgress />}
                                            </WithdrawBtnTextWrapper>
                                        </WithdrawBtn>
                                    </WithdrawBtnWrapper>
                                </SubHeaderTextWrapper>
                            </SubHeaderContent>

                            <SubHeaderContent>
                                <svg width="100%" height="100%" viewBox="0 0 175 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M175 24C175 10.7452 164.255 0 151 0H24C10.7452 0 0 10.7452 0 24V207.332C0 220.055 9.92858 230.567 22.6308 231.293L149.631 238.55C163.401 239.337 175 228.382 175 214.589V24Z" fill="#F7F6FD">
                                    </path>
                                </svg>
                                <ProfileContentWrapper>
                                    <ProfileContentWrap>
                                        <ProfileAvatar src="/svg/dashboard-avatar.svg" />
                                        <ProfileStatText>70%</ProfileStatText>
                                        <ProfileSubText>Profile complete</ProfileSubText>
                                    </ProfileContentWrap>
                                    <WithdrawBtnWrapper>
                                        <WithdrawBtn>
                                            <svg width="100%" height="47" viewBox="0 0 127 47" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotateY(180deg)' }}>
                                                <path d="M1.60451e-06 23.2329C7.18362e-07 10.4017 10.4017 0 23.2329 0H106.426C117.789 0 127 9.21126 127 20.5739C127 31.4265 118.57 40.4128 107.74 41.1058L24.7165 46.4184C11.329 47.2751 2.53096e-06 36.6478 1.60451e-06 23.2329Z" fill="rgba(63, 30, 75, 0.1)">
                                                </path>
                                            </svg>
                                            <WithdrawBtnTextWrapper>
                                                <WithdrawBtnText>Complete Profile</WithdrawBtnText>
                                            </WithdrawBtnTextWrapper>
                                        </WithdrawBtn>
                                    </WithdrawBtnWrapper>
                                </ProfileContentWrapper>
                            </SubHeaderContent>
                        </SubHeaderContentWrapper>

                        <QuickActionsWrapper>
                            <QuickActionsText>Quick Actions</QuickActionsText>
                        </QuickActionsWrapper>

                        <QuickActionsWrap onClick={() => redirect('/trade-cards')}>
                            <img width="100%" src="/svg/dashboard-trade.svg" alt="" />
                            <QuickActionsSubText>Trade <br /><br /> Gift Cards</QuickActionsSubText>
                        </QuickActionsWrap>

                        <QuickActionsWrap>
                            <img style={{ width: '100%', height: '100%' }} src="svg/dashboard-pay.svg" alt="" />
                            <PayBillTextWrapper>
                                <PayBillText>Exchange</PayBillText>
                                <br />
                                <PayBillSubText>2.0% Off</PayBillSubText>
                            </PayBillTextWrapper>
                        </QuickActionsWrap>
                    </MobileContent>
                </MobileContentWrap>
            </MobileContentWrapper>

            {/* Desktop */}
            <DesktopContentWrapper sx={{ display: { md: 'none', lg: 'flex', xl: 'flex', xs: 'none', sm: 'none' } }}>
                <DesktopContentWrap>
                    <DesktopContent>

                        <HeaderContentWrapper>
                            <HeaderTextWrapper>
                                <HeaderText>Hello, <span style={{ color: '#7165E3' }}>{userData.username}</span></HeaderText>
                            </HeaderTextWrapper>
                            <HeaderNotificationWrapper>
                                <HeaderNotificationIconWrap>
                                    <HeaderNotificationIconImage src="/svg/notification.svg" />
                                </HeaderNotificationIconWrap>
                            </HeaderNotificationWrapper>
                        </HeaderContentWrapper>

                        <DesktopSubHeaderContentWrapper>
                            <DesktopSubHeaderContentLeft>
                                <img width={'100%'} height={'100%'} src="/svg/dashboard-purple.svg" alt="" />
                                <DesktopSubHeaderContentTextWrapper>
                                    <DesktopSubHeaderWalletTypeText>Naira Wallet Balance</DesktopSubHeaderWalletTypeText>
                                    <BalanceText>{parseFloat(userData.balance).toLocaleString() || '0.00'}<span style={{ fontSize: '1.5rem', fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'", verticalAlign: 'top' }}>NGN</span></BalanceText>
                                    <DesktopWithdrawBtn onClick={() => withDraw()}>
                                        <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48">
                                            </path>
                                        </svg>
                                        {!withdrawFired ? <DesktopWithdrawBtnText>Withdraw</DesktopWithdrawBtnText> : <CircularProgress />}
                                    </DesktopWithdrawBtn>
                                </DesktopSubHeaderContentTextWrapper>
                            </DesktopSubHeaderContentLeft>

                            <DesktopSubHeaderContentRight>
                                <img width={'100%'} height={'100%'} src="/svg/dashboard-yellow.svg" alt="" />
                                <DesktopProfileContentWrapper>
                                    <DesktopProfileContentWrap>
                                        <DesktopProfileTextContentWrap>
                                            <ProfileStatText>70%</ProfileStatText>
                                            <br />
                                            <ProfileSubText>Profile complete</ProfileSubText>
                                        </DesktopProfileTextContentWrap>
                                        <img style={{ width: '8rem' }} src="/svg/dashboard-avatar.svg" alt="" />
                                    </DesktopProfileContentWrap>
                                    <DesktopWithdrawBtn style={{ marginTop: '0rem' }}>
                                        <svg width="264" height="60" viewBox="0 0 264 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 36.352C0 16.2753 16.2753 0 36.352 0H231.058C249.251 0 264 14.7486 264 32.942V32.942C264 50.6864 249.945 65.2425 232.211 65.8638L37.6249 72.6817C17.0618 73.4022 0 56.9277 0 36.352V36.352Z" fill="#3F1E4B">
                                            </path>
                                        </svg>
                                        <DesktopWithdrawBtnText style={{ color: '#FFFFFF' }}>Complete Profile</DesktopWithdrawBtnText>
                                    </DesktopWithdrawBtn>
                                </DesktopProfileContentWrapper>
                            </DesktopSubHeaderContentRight>

                        </DesktopSubHeaderContentWrapper>

                        <DesktopQuickActionsWrapper>
                            <DesktopQuickActionsWrap>Quick Actions</DesktopQuickActionsWrap>
                            <DesktopQuickActionLine />
                        </DesktopQuickActionsWrapper>

                        <DesktopQuickActionContentWrapper>
                            <DesktopQuickActionContentLeftWrap onClick={() => redirect('/trade-cards')}>
                                <img style={{ width: '100%', height: '100%' }} src="svg/dashboard-trade.svg" alt="" />
                                <QuickActionsSubText>Trade <br /><br /> Gift Cards</QuickActionsSubText>
                            </DesktopQuickActionContentLeftWrap>
                            <DesktopQuickActionContentRightWrap>
                                <img style={{ width: '100%', height: '100%' }} src="svg/dashboard-pay.svg" alt="" />
                                <PayBillTextWrapper>
                                    <PayBillText>Exchange</PayBillText>
                                    <br />
                                    <PayBillSubText>2.0% Off</PayBillSubText>
                                </PayBillTextWrapper>
                            </DesktopQuickActionContentRightWrap>
                        </DesktopQuickActionContentWrapper>

                    </DesktopContent>
                </DesktopContentWrap>
            </DesktopContentWrapper>
        </>
    )
}

export default DashBoard;