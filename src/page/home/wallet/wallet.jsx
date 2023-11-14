import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    MobileAppBar, MobileGridBar, MobileContentBar, MobileHeaderBar, MobileHeaderTextWrapper, MobileHeaderSalutationText,
    MobileHeaderUserNotificationIconWrapper, MobileHeaderUserNotificationIcon, MobileHeaderUserNotificationIconImage, MobileBannerWrapper,
    MobileBannerImage, MobileBannerTextWrapper, MobileBannerTextInnerWrapper, MobileBannerTextInnerWrap, MobileBannerText, MobileBannerTextHideIconWrapper,
    MobileBannerTextHideIconImage, MobileBannerBalanceText, MobileBannerBalanceTextCurrency, MobileBannerBalanceButtonWrapper, MobileBannerBalanceButtonAddWrapper,
    MobileBannerBalanceButtonAddImage, MobileBannerBalanceButtonAddText, MobileBannerBalanceButtonWithdrawWrapper, MobileBannerBalanceButtonWithdrawImage,
    MobileBannerBalanceButtonWithdrawText, DataGridContainer, MobileHistoryWrapper, MobileHistoryInnerWrapper, MobileHistoryHeaderWrapper, MobileHistoryHeaderText,
    MobileHistoryHeaderTextItermsWrapper, MobileHistoryHeaderTextDateFilterButtonWrap,
    DataTable, TableData, TableDataContentWrapper, TableDataContentWrap, TableDataContentImag, TableDataContentTextWrap, TableDataContentText,
    TableDataContentText2,

    DesktopViewWrapper, DesktopViewWrap, DesktopView, DesktopHeaderWrapper, DesktopHeaderText, DesktopBannerWrapper, DesktopBannerImage, DesktopBannerContentWrapper,
    DesktopBannerContentTextWrapper, DesktopBannerContentNairaTextWrapper, DesktopBannerContentNairaText, DesktopBannerContentNairaTextImageWrapper, DesktopBannerContentNairaTextImage, DesktopBannerContentBalanceText, DesktopBannerContentCurrency, DesktopBannerButtonContentWrapper, DesktopBannerButtonContent1Wrapper, DesktopBannerOrderContentWrapper, DesktopBannerOrderContentWrap, DesktopBannerOrderContentHeaderText
} from './components'
import { useEffect, useState } from 'react';
import { user } from '../../../services/user';
import Cookies from 'js-cookie';
import { getAccounts } from '../../../services/bankhandlers';
import { CircularProgress } from '@mui/material';

const appOrigin = window.location.origin;
const Wallet = ({ redirect, openWithdrawModal, userData, setWithdrawToAccount, handleOpenAlertBox, setAlertText }) => {
    const [withdrawFired, setWithdrawFired] = useState(false);
    const [orders, setOrders] = useState([0]);
    const [hideBalance, setHideBalance] = useState(true);

    let session = Cookies.get(appOrigin);
    if (session) {
        session = JSON.parse(session);
    } else {
        window.location.reload();
    }

    async function init() {
        const res = await user.usersOrders(session._id, session.username)
        setOrders(res);
    }

    async function showBalance() {
        setHideBalance(!hideBalance);
    }

    async function withDraw() {
        setWithdrawFired(true)
        if (userData) {
            const { _id: id, username, balance } = userData;
            if (balance < 50) {
                setAlertText({ title: 'Insufficient funds', paragraph: 'Your balance is low.', reason: 'warning', sender: 'dashboard' })
                handleOpenAlertBox()
                setWithdrawFired(false)
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

    useEffect(() => {
        init();
    }, [])

    return (
        <>
            {/* Mobile Nav Bar */}
            <MobileAppBar container sx={{ display: { lg: 'none', xl: 'none', sm: 'flex', xs: 'flex' } }}>
                <MobileGridBar>
                    <MobileContentBar>
                        {/* Header */}
                        <MobileHeaderBar>
                            <MobileHeaderTextWrapper>
                                <MobileHeaderSalutationText>Wallet</MobileHeaderSalutationText>
                            </MobileHeaderTextWrapper>
                            <MobileHeaderUserNotificationIconWrapper>
                                <MobileHeaderUserNotificationIcon>
                                    <MobileHeaderUserNotificationIconImage src="/svg/edit-wallet.svg" />
                                </MobileHeaderUserNotificationIcon>
                            </MobileHeaderUserNotificationIconWrapper>
                        </MobileHeaderBar>

                        <MobileBannerWrapper>
                            <MobileBannerImage src="/svg/wallet-mobile-bg.svg" />
                            <MobileBannerTextWrapper>
                                <MobileBannerTextInnerWrapper>
                                    <MobileBannerTextInnerWrap>
                                        <MobileBannerText>Naira Wallet</MobileBannerText>
                                        <MobileBannerTextHideIconWrapper onClick={showBalance}>
                                            <MobileBannerTextHideIconImage src="/svg/eye-slash.svg" />
                                        </MobileBannerTextHideIconWrapper>
                                    </MobileBannerTextInnerWrap>
                                    <MobileBannerBalanceText>{hideBalance ? '****' : parseFloat(session.balance).toLocaleString() || '0.00'}<MobileBannerBalanceTextCurrency>NGN</MobileBannerBalanceTextCurrency></MobileBannerBalanceText>
                                </MobileBannerTextInnerWrapper>
                                <MobileBannerBalanceButtonWrapper>
                                    <MobileBannerBalanceButtonAddWrapper>
                                        <MobileBannerBalanceButtonAddImage src="/svg/fund-icon.svg" />
                                        <MobileBannerBalanceButtonAddText>Fund Account</MobileBannerBalanceButtonAddText>
                                    </MobileBannerBalanceButtonAddWrapper>
                                    <MobileBannerBalanceButtonWithdrawWrapper onClick={withDraw}>
                                        {withdrawFired ? <CircularProgress /> : <MobileBannerBalanceButtonWithdrawImage src="/svg/withdraw-icon.svg" />}
                                        <MobileBannerBalanceButtonWithdrawText>Withdraw</MobileBannerBalanceButtonWithdrawText>
                                    </MobileBannerBalanceButtonWithdrawWrapper>
                                </MobileBannerBalanceButtonWrapper>
                            </MobileBannerTextWrapper>
                        </MobileBannerWrapper>
                        <MobileHistoryWrapper>
                            <MobileHistoryInnerWrapper>
                                <MobileHistoryHeaderWrapper>
                                    <MobileHistoryHeaderText>Wallet History</MobileHistoryHeaderText>
                                    <MobileHistoryHeaderTextItermsWrapper>
                                        {/* Date Filter */}
                                        <MobileHistoryHeaderTextDateFilterButtonWrap variant="outlined" size="medium">
                                            Date
                                            <KeyboardArrowDownIcon sx={{ mr: 1, marginLeft: 2 }} />
                                        </MobileHistoryHeaderTextDateFilterButtonWrap>
                                        {/* Filter */}
                                        <MobileHistoryHeaderTextDateFilterButtonWrap variant="outlined" size="medium">
                                            Filter
                                            <KeyboardArrowDownIcon sx={{ mr: 1, marginLeft: 2 }} />
                                        </MobileHistoryHeaderTextDateFilterButtonWrap>
                                    </MobileHistoryHeaderTextItermsWrapper>
                                </MobileHistoryHeaderWrapper>
                                <DataGridContainer>
                                    <DataTable>
                                        <tbody>
                                            {orders && orders.map(({ _id, userId, username, action, amount, status, timeStammp }, i) => (
                                                <tr key={i}>
                                                    <TableData >
                                                        <TableDataContentWrapper>
                                                            <TableDataContentWrap>
                                                                <TableDataContentImag src="/svg/money-remove.svg" />
                                                                <TableDataContentTextWrap>
                                                                    <TableDataContentText>{action}</TableDataContentText>
                                                                    {/* <TableDataContentText2>RDM CREDIT</TableDataContentText2> */}
                                                                </TableDataContentTextWrap>
                                                            </TableDataContentWrap>
                                                        </TableDataContentWrapper>
                                                    </TableData>
                                                    <TableData>
                                                        <TableDataContentWrapper>
                                                            <TableDataContentWrap>
                                                                <TableDataContentTextWrap>
                                                                    <TableDataContentText>NGN {parseFloat(amount).toLocaleString()}.00</TableDataContentText>
                                                                    <TableDataContentText2>{status}</TableDataContentText2>
                                                                </TableDataContentTextWrap>
                                                            </TableDataContentWrap>
                                                        </TableDataContentWrapper>
                                                    </TableData>
                                                    <TableData>
                                                        <TableDataContentWrapper>
                                                            <TableDataContentWrap style={{ cursor: 'pointer' }}>
                                                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                                                    </path>
                                                                </svg>
                                                            </TableDataContentWrap>
                                                        </TableDataContentWrapper>
                                                    </TableData>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </DataTable>
                                </DataGridContainer>
                            </MobileHistoryInnerWrapper>
                        </MobileHistoryWrapper>
                    </MobileContentBar>
                </MobileGridBar>
            </MobileAppBar>

            {/* Desktop Nav Bar */}
            <DesktopViewWrapper sx={{ display: { lg: 'flex', xl: 'flex', sm: 'none', xs: 'none' } }}>
                {/* Main Box */}
                <DesktopViewWrap>
                    <DesktopView>
                        {/* Desktop Header */}
                        <DesktopHeaderWrapper>
                            <DesktopHeaderText>Wallet</DesktopHeaderText>
                            <a href="/manage-banks"><img src='/svg/edit-wallet.svg' /></a>
                        </DesktopHeaderWrapper>

                        {/* Contents */}
                        <DesktopBannerWrapper>
                            <DesktopBannerImage src='svg/wallet-bg.svg' />
                            <DesktopBannerContentWrapper>
                                <DesktopBannerContentTextWrapper>
                                    <DesktopBannerContentNairaTextWrapper>
                                        <DesktopBannerContentNairaText>Naira Wallet</DesktopBannerContentNairaText>
                                        <DesktopBannerContentNairaTextImageWrapper onClick={showBalance}>
                                            <DesktopBannerContentNairaTextImage src='/svg/eye-slash.svg' />
                                        </DesktopBannerContentNairaTextImageWrapper>
                                    </DesktopBannerContentNairaTextWrapper>
                                    <DesktopBannerContentBalanceText>{hideBalance ? '****' : parseFloat(session.balance).toLocaleString() || '0.00'}<DesktopBannerContentCurrency>NGN</DesktopBannerContentCurrency></DesktopBannerContentBalanceText>
                                </DesktopBannerContentTextWrapper>

                                <DesktopBannerButtonContentWrapper>
                                    <DesktopBannerButtonContent1Wrapper>
                                        <img src='/svg/fund-icon.svg' />
                                        <DesktopBannerContentNairaText>Fund Account</DesktopBannerContentNairaText>
                                    </DesktopBannerButtonContent1Wrapper>
                                    <DesktopBannerButtonContent1Wrapper onClick={withDraw}>
                                        {withdrawFired ? <CircularProgress /> : <img src='/svg/withdraw-icon.svg' />}
                                        <DesktopBannerContentNairaText>Withdraw</DesktopBannerContentNairaText>
                                    </DesktopBannerButtonContent1Wrapper>
                                </DesktopBannerButtonContentWrapper>
                            </DesktopBannerContentWrapper>
                        </DesktopBannerWrapper>

                        <DesktopBannerOrderContentWrapper>
                            <MobileHistoryHeaderWrapper>
                                <MobileHistoryHeaderText>Wallet History</MobileHistoryHeaderText>
                                <MobileHistoryHeaderTextItermsWrapper>
                                    {/* Date Filter */}
                                    <MobileHistoryHeaderTextDateFilterButtonWrap variant="outlined" size="medium">
                                        Date
                                        <KeyboardArrowDownIcon sx={{ mr: 1, marginLeft: 2 }} />
                                    </MobileHistoryHeaderTextDateFilterButtonWrap>
                                    {/* Filter */}
                                    <MobileHistoryHeaderTextDateFilterButtonWrap variant="outlined" size="medium">
                                        Filter
                                        <KeyboardArrowDownIcon sx={{ mr: 1, marginLeft: 2 }} />
                                    </MobileHistoryHeaderTextDateFilterButtonWrap>
                                </MobileHistoryHeaderTextItermsWrapper>
                            </MobileHistoryHeaderWrapper>
                            <DataGridContainer>
                                <DataTable>
                                    <tbody>
                                        {orders && orders.map(({ _id, userId, username, action, amount, status, timeStammp }, i) => (
                                            <tr key={i}>
                                                <TableData >
                                                    <TableDataContentWrapper>
                                                        <TableDataContentWrap>
                                                            <TableDataContentImag src="/svg/money-remove.svg" />
                                                            <TableDataContentTextWrap>
                                                                <TableDataContentText>{action}</TableDataContentText>
                                                                {/* <TableDataContentText2>RDM CREDIT</TableDataContentText2> */}
                                                            </TableDataContentTextWrap>
                                                        </TableDataContentWrap>
                                                    </TableDataContentWrapper>
                                                </TableData>
                                                <TableData>
                                                    <TableDataContentWrapper>
                                                        <TableDataContentWrap>
                                                            <TableDataContentTextWrap>
                                                                <TableDataContentText>{timeStammp}</TableDataContentText>
                                                            </TableDataContentTextWrap>
                                                        </TableDataContentWrap>
                                                    </TableDataContentWrapper>
                                                </TableData>
                                                <TableData>
                                                    <TableDataContentWrapper>
                                                        <TableDataContentWrap>
                                                            <TableDataContentTextWrap>
                                                                <TableDataContentText>NGN {parseFloat(amount).toLocaleString()}.00</TableDataContentText>
                                                            </TableDataContentTextWrap>
                                                        </TableDataContentWrap>
                                                    </TableDataContentWrapper>
                                                </TableData>
                                                <TableData>
                                                    <TableDataContentWrapper>
                                                        <TableDataContentWrap>
                                                            <TableDataContentTextWrap>
                                                                <TableDataContentText2>{status}</TableDataContentText2>
                                                            </TableDataContentTextWrap>
                                                        </TableDataContentWrap>
                                                    </TableDataContentWrapper>
                                                </TableData>
                                                <TableData>
                                                    <TableDataContentWrapper>
                                                        <TableDataContentWrap style={{ cursor: 'pointer' }}>
                                                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                                                </path>
                                                            </svg>
                                                        </TableDataContentWrap>
                                                    </TableDataContentWrapper>
                                                </TableData>
                                            </tr>
                                        ))}
                                    </tbody>
                                </DataTable>
                            </DataGridContainer>
                        </DesktopBannerOrderContentWrapper>
                    </DesktopView>
                </DesktopViewWrap>
            </DesktopViewWrapper>
        </>
    )
}

export default Wallet;