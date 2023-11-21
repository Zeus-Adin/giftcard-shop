import Cookies from 'js-cookie'
import { Grid, } from "@mui/material";
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import GroupIcon from '@mui/icons-material/Group';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

import { useEffect, useState } from 'react';

import AdminHeader from './header';

import {
    ContentWrappers
} from './components';
import { getAllBank, getAllCardsTx, getAllOrder, getAllUsers } from './functions';
import { DataGridContainer, DataTable, TableData, TableDataContentImag, TableDataContentText, TableDataContentText2, TableDataContentTextWrap, TableDataContentWrap, TableDataContentWrapper } from '../wallet/components';
import { Declined, Pending, Success } from '../activities/components';
import { curreniesSymbols, currencies } from '../../../lib/currency';
import UpdateBalanceModal from './modal/UpdateBalanceModal';
import GiftCardViewer from './modal/GiftCardViewer';

const MobileView = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('md')]: { display: 'flex', },
    [theme.breakpoints.up('md')]: { display: 'none', },
    marginTop: '5rem'
}))

const DesktopView = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('md')]: { display: 'flex' },
    [theme.breakpoints.down('md')]: { display: 'none' },
    alignItems: 'center', justifyContent: 'center',
}))

const BankWrapper = styled(Grid)(({ theme }) => ({
    alignItems: 'center', justifyContent: 'center', marginTop: '5rem'
}))

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) ~ :not(style)': { marginTop: theme.spacing(2) },
    marginBottom: '2rem'
}));

const appOrigin = window.location.origin;
const AdminPage = ({ redirect, setMoreInfoValues, openWalletMoreInfoModal }) => {
    const [users, setUsers] = useState([]);
    const [cards, setCards] = useState([]);
    const [orders, setOrders] = useState([]);
    const [banks, setBanks] = useState([]);
    const [search, setSearch] = useState('');

    // let session = Cookies.get(appOrigin);
    // if (session) {
    //     const { admin, activation } = JSON.parse(session)
    //     if (!(admin && activation)) {
    //         redirect('/dashboard')
    //         return
    //     };
    // }

    const [selectUserInfo, setselectUserInfo] = useState({ userId: '', username: '' });
    const [showBalanceModal, setShowBalanceModal] = useState(false);
    function openCloseBalanceUpdateModal() {
        setShowBalanceModal(!showBalanceModal)
    }

    const [selectCardInfo, setselectCardInfo] = useState({ txRef: '', userName: '', cid: '' });
    const [showGiftCardViewerModal, setShowGiftCardViewerModal] = useState(false);
    function openCloseGiftCardViewerModal() {
        setShowGiftCardViewerModal(!showGiftCardViewerModal)
    }

    function handleCardTxClick(options) {
        setselectCardInfo(options);
        openCloseGiftCardViewerModal();
    }

    function handleUserBalanceClick(options) {
        setselectUserInfo(options);
        openCloseBalanceUpdateModal();
    }



    async function init() {
        const { authState: usersAuthState, message: usersMessage, result: usersRes } = await getAllUsers('654e97d013c3feb799557957', 'DaNiel');
        if (!usersAuthState) return;
        setUsers(usersRes);
        const { authState: cardsAuthState, message: cardsMessage, result: cardsRes } = await getAllCardsTx('654e97d013c3feb799557957', 'DaNiel');
        if (!cardsAuthState) return;
        setCards(cardsRes);
        const { authState: orderAuthState, message: orderMessage, result: ordersRes } = await getAllOrder('654e97d013c3feb799557957', 'DaNiel');
        if (!orderAuthState) return;
        setOrders(ordersRes);
        const { authState: bankAuthState, message: bankMessage, result: bankRes } = await getAllBank('654e97d013c3feb799557957', 'DaNiel');
        if (!bankAuthState) return;
        setBanks(bankRes);
    }

    function moreInfo(i) {
        setMoreInfoValues(orders[i]);
        openWalletMoreInfoModal();
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <>
            {/* Header */}
            <AdminHeader redirect={redirect} />

            {/* Desktop */}
            <DesktopView container>
                <ContentWrappers xs={12} >
                    <Root>
                        <Divider><Chip label="Users" icon={<GroupIcon />} /></Divider>
                        <DataGridContainer style={{ padding: '2rem 2rem' }}>
                            <DataTable>
                                <thead style={{ borderWidth: '.4em' }}>
                                    <tr style={{ textAlign: 'left' }}>
                                        <th>User/UsersId</th>
                                        <th>Email</th>
                                        <th>Balance</th>
                                        <th>Activation Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users ? users.map(({ _id: usersId, username, email, balance, activation, avatarIcon, admin }, i) => (
                                        <tr key={i} >
                                            <TableData >
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentImag style={{ width: '5rem', height: '5rem' }} src={`${avatarIcon}`} />
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.5rem' }}>{username}</TableDataContentText>
                                                            <TableDataContentText2 style={{ fontSize: '1.5rem' }}>{usersId}</TableDataContentText2>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.5rem' }}>{email}</TableDataContentText>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '2rem' }} onClick={() => handleUserBalanceClick({ usersId, username, balance })}>{curreniesSymbols['NGN'].symbol} {parseFloat(balance)}</TableDataContentText>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            {activation === false && <Declined>{activation.toString()}</Declined>}
                                                            {activation === true && <Success>{activation.toString()}</Success>}
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap style={{ cursor: 'pointer' }}>
                                                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                                            </path>
                                                        </svg>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                        </tr>
                                    )) : <div>No data found yet</div>
                                    }
                                </tbody>
                            </DataTable>
                        </DataGridContainer>
                    </Root>
                </ContentWrappers>

                {/* -------------------------------------- */}
                <ContentWrappers xs={12} >
                    <Root>
                        <Divider><Chip label="Card" icon={<CardGiftcardIcon />} /></Divider>
                        <DataGridContainer style={{ padding: '2rem 2rem' }}>
                            <DataTable >
                                <thead style={{ borderWidth: '.4em' }}>
                                    <tr style={{ textAlign: 'left' }}>
                                        <th>User/Card Tx Ref</th>
                                        <th>Amount Each</th>
                                        <th>Rate</th>
                                        <th>Count</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {cards ? cards.map(({ _id: txRef, userId, userName, currency, amount, rate, files, fileCount, ecode, cardType, action, status, timeStamp }, i) => (
                                        <tr key={i}>
                                            <TableData >
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{userName}</TableDataContentText>
                                                            <TableDataContentText2 style={{ fontSize: '1.3rem', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleCardTxClick({ txRef, userName, cid: files })}>{txRef}</TableDataContentText2>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{curreniesSymbols[currency].symbol} {amount}.00</TableDataContentText>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{curreniesSymbols[currency].symbol} {rate}</TableDataContentText>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{fileCount}</TableDataContentText>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            {status === 'pending' && <Pending>{status}</Pending>}
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap style={{ cursor: 'pointer' }}>
                                                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                                            </path>
                                                        </svg>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                        </tr>
                                    )) : <div>No data found yet</div>
                                    }
                                </tbody>
                            </DataTable>
                        </DataGridContainer>
                    </Root>
                </ContentWrappers>

                {/* -------------------------------------- */}
                <ContentWrappers xs={12} >
                    <Root>
                        <Divider><Chip label="Order" icon={<ReceiptLongIcon />} /></Divider>
                        <DataGridContainer style={{ padding: '2rem 2rem' }}>
                            <DataTable >
                                <thead style={{ borderWidth: '.4em' }}>
                                    <tr style={{ textAlign: 'left' }}>
                                        <th>User/Order Ref</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {orders ? orders.map(({ _id: orderRef, username, amount, action, timeStammp, status }, i) => (
                                        <tr key={i}>
                                            <TableData >
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{username}</TableDataContentText>
                                                            <TableDataContentText2 style={{ fontSize: '1.3rem' }}>{orderRef}</TableDataContentText2>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{timeStammp}</TableDataContentText>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{curreniesSymbols["NGN"].symbol} {parseFloat(amount)}</TableDataContentText>
                                                            <TableDataContentText2 style={{ fontSize: '1.3rem' }}>{action}</TableDataContentText2>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            {status === 'pending' && <Pending>{status}</Pending>}
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap style={{ cursor: 'pointer' }} onClick={() => moreInfo(i)}>
                                                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                                            </path>
                                                        </svg>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                        </tr>
                                    )) : <div>No data found yet</div>
                                    }
                                </tbody>
                            </DataTable>
                        </DataGridContainer>
                    </Root>
                </ContentWrappers>
            </DesktopView>

            {/* Mobile */}
            <MobileView container spacing={2}>
                <ContentWrappers xs={12} >
                    <Root>
                        <Divider><Chip label="Users" icon={<GroupIcon />} /></Divider>
                        <DataGridContainer style={{ padding: '0rem 2rem' }}>
                            <DataTable>
                                <thead style={{ borderWidth: '.4em' }}>
                                    <tr style={{ textAlign: 'left' }}>
                                        <th>User/Email/Action</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users ? users.map(({ _id: usersId, username, email, balance, activation, avatarIcon, admin }, i) => (
                                        <tr key={i}>
                                            <TableData >
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentImag style={{ width: '4.5rem', height: '4.5rem' }} src={`${avatarIcon}`} />
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText>{username}</TableDataContentText>
                                                            <TableDataContentText2>{email}</TableDataContentText2>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }} onClick={() => handleUserBalanceClick({ usersId, username, balance })}>{curreniesSymbols["NGN"].symbol} {balance}.00</TableDataContentText>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                        </tr>
                                    )) : <div>No data found</div>
                                    }
                                </tbody>
                            </DataTable>
                        </DataGridContainer>
                    </Root>
                </ContentWrappers>

                {/* -------------------------------------- */}
                <ContentWrappers xs={12} >
                    <Root>
                        <Divider><Chip label="Card" icon={<CardGiftcardIcon />} /></Divider>
                        <DataGridContainer style={{ padding: '2rem 2rem' }}>
                            <DataTable >
                                <thead style={{ borderWidth: '.4em' }}>
                                    <tr style={{ textAlign: 'left' }}>
                                        <th>User/Card Tx Ref/Action</th>
                                        <th>Amount Each</th>
                                        <th>Rate</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {cards ? cards.map(({ _id: txRef, userId, userName, currency, amount, rate, files, fileCount, ecode, cardType, action, status, timeStamp }, i) => (
                                        <tr key={i}>
                                            <TableData >
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{userName}</TableDataContentText>
                                                            <TableDataContentText2 style={{ fontSize: '1.3rem', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleCardTxClick({ txRef, userName, cid: files })}>{txRef}</TableDataContentText2>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{curreniesSymbols[currency].symbol} {amount}.00</TableDataContentText>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{curreniesSymbols[currency].symbol} {rate}</TableDataContentText>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                        </tr>
                                    )) : <div>No data found yet</div>
                                    }
                                </tbody>
                            </DataTable>
                        </DataGridContainer>
                    </Root>
                </ContentWrappers>
                {/* -------------------------------------- */}
                <ContentWrappers xs={12} >
                    <Root>
                        <Divider><Chip label="Order" icon={<ReceiptLongIcon />} /></Divider>
                        <DataGridContainer style={{ padding: '2rem 2rem' }}>
                            <DataTable >
                                <thead style={{ borderWidth: '.4em' }}>
                                    <tr style={{ textAlign: 'left' }}>
                                        <th>User/Order Ref</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {orders ? orders.map(({ _id: orderRef, username, amount, action, timeStammp, status }, i) => (
                                        <tr key={i}>
                                            <TableData >
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{username}</TableDataContentText>
                                                            <TableDataContentText2 style={{ fontSize: '1.3rem' }}>{orderRef}</TableDataContentText2>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{curreniesSymbols["NGN"].symbol} {amount}.00</TableDataContentText>
                                                            <TableDataContentText2 style={{ fontSize: '1.3rem' }}>{action}</TableDataContentText2>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap style={{ cursor: 'pointer' }} onClick={() => moreInfo(i)}>
                                                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                                            </path>
                                                        </svg>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                        </tr>
                                    )) : <div>No data found yet</div>
                                    }
                                </tbody>
                            </DataTable>
                        </DataGridContainer>
                    </Root>
                </ContentWrappers>
            </MobileView>

            <BankWrapper container>
                <ContentWrappers xs={12} >
                    <Root>
                        <Divider><Chip label="Order" icon={<ReceiptLongIcon />} /></Divider>
                        <DataGridContainer style={{ padding: '2rem 2rem' }}>
                            <DataTable >
                                <thead style={{ borderWidth: '.4em' }}>
                                    <tr style={{ textAlign: 'left' }}>
                                        <th>User/Bank Ref</th>
                                        <th>Bank/BankCode</th>
                                        <th>Account Name/Account Number</th>
                                        <th>Active Account</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {banks ? banks.map(({ _id: bankRef, id, username, name, code, account_number, account_name, active }, i) => (
                                        <tr key={i}>
                                            <TableData >
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{username}</TableDataContentText>
                                                            <TableDataContentText2 style={{ fontSize: '1.3rem' }}>{id}</TableDataContentText2>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{name}</TableDataContentText>
                                                            <TableDataContentText2 style={{ fontSize: '1.3rem' }}>{code}</TableDataContentText2>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{account_name}</TableDataContentText>
                                                            <TableDataContentText2 style={{ fontSize: '1.3rem' }}>{account_number}</TableDataContentText2>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                            <TableData>
                                                <TableDataContentWrapper>
                                                    <TableDataContentWrap>
                                                        <TableDataContentTextWrap>
                                                            <TableDataContentText style={{ fontSize: '1.3rem' }}>{active.toString()}</TableDataContentText>
                                                        </TableDataContentTextWrap>
                                                    </TableDataContentWrap>
                                                </TableDataContentWrapper>
                                            </TableData>
                                        </tr>
                                    )) : <div>No data found yet</div>
                                    }
                                </tbody>
                            </DataTable>
                        </DataGridContainer>
                    </Root>
                </ContentWrappers>
            </BankWrapper>

            {/* ==============Modals========== */}
            <UpdateBalanceModal show={showBalanceModal} close={openCloseBalanceUpdateModal} selectUserInfo={selectUserInfo} />
            <GiftCardViewer show={showGiftCardViewerModal} close={openCloseGiftCardViewerModal} selectCardInfo={selectCardInfo} />            
        </>
    )
}

export default AdminPage;