import { useEffect, useState } from 'react';
import {
    MobileActivitiesWrap,
    MobileActivitiesWrapper, MobileActivitiesHeaderWrapper, MobileActivitiesHeaderImage,
    MobileActivitiesHeaderContentWrapper, MobileActivitiesHeaderContentWrap,
    MobileActivitiesHeaderTitleText, MobileActivitiesHeaderActionWrapper,
    MobileActivitiesHeaderAction,
    MobileActivitiesHeaderActionButton, MobileActivitiesHeaderActionButtonText,

    ContentWrapper, ContentWrap, ContentHeaderWrapper, ContentHeaderText,
    DesktopActivitiesWrapper, DesktopActivitiesWrap, DesktopActivitiesContentsWrap,
    DesktopActivitiesHeaderWrapper,
    DesktopActivitiesContentWrapper,
    Declined,
    Success,
    Pending
} from './components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    MobileHistoryHeaderTextItermsWrapper, MobileHistoryHeaderTextDateFilterButtonWrap,
    DataTable, TableData, TableDataContentWrapper, TableDataContentWrap, TableDataContentImag,
    TableDataContentTextWrap, TableDataContentText, TableDataContentText2, DataGridContainer
} from '../wallet/components';
import { cardImg } from '../cards/svg';
import { getCardTx } from './functions';
import Cookies from 'js-cookie'

const appOrigin = window.location.origin;
const Activities = ({ redirect, openWithdrawModal, userData, setWithdrawToAccount, handleOpenAlertBox, setAlertText }) => {
    const [active, setActive] = useState(false);
    const [cards, setCards] = useState([]);

    let session = Cookies.get(appOrigin);
    if (session) {
        session = JSON.parse(session);
    }

    async function init() {
        const { username, _id: id } = session;
        const res = await getCardTx(username, id);
        if (res.length === 0) return;
        setCards(res)
    }

    function switchFlip() {
        setActive(!active);
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <>
            {/* MobileView */}
            <MobileActivitiesWrapper container sx={{ display: { lg: 'none', xl: 'none', sm: 'flex', xs: 'flex', md: 'flex' } }}>
                <MobileActivitiesWrap>
                    <MobileActivitiesHeaderWrapper>
                        <MobileActivitiesHeaderImage src='/svg/blue-page-header.svg' />
                        <MobileActivitiesHeaderContentWrapper>
                            <MobileActivitiesHeaderContentWrap>
                                <MobileActivitiesHeaderTitleText>Activities</MobileActivitiesHeaderTitleText>
                                <MobileActivitiesHeaderActionWrapper>
                                    <MobileActivitiesHeaderAction>
                                        <MobileActivitiesHeaderActionButton activeColor={active ? 'transparent' : '#F5CF48'} onClick={switchFlip}>
                                            <MobileActivitiesHeaderActionButtonText>Gift Cards</MobileActivitiesHeaderActionButtonText>
                                        </MobileActivitiesHeaderActionButton>
                                        <MobileActivitiesHeaderActionButton activeColor={active ? '#F5CF48' : 'transparent'} onClick={switchFlip}>
                                            <MobileActivitiesHeaderActionButtonText>Bill Payments</MobileActivitiesHeaderActionButtonText>
                                        </MobileActivitiesHeaderActionButton>
                                    </MobileActivitiesHeaderAction>
                                </MobileActivitiesHeaderActionWrapper>
                            </MobileActivitiesHeaderContentWrap>
                        </MobileActivitiesHeaderContentWrapper>
                    </MobileActivitiesHeaderWrapper>

                    <ContentWrapper>
                        <ContentWrap>
                            <ContentHeaderWrapper>
                                <ContentHeaderText>All transactions</ContentHeaderText>
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
                            </ContentHeaderWrapper>
                            <DataGridContainer>
                                <DataTable>
                                    <tbody>
                                        {cards ? cards.map(({ tx: { amount, cardType, currency, ecode, fileCount, rate, status, timeStammp, action } }, i) => (
                                            <tr key={i}>
                                                <TableData >
                                                    <TableDataContentWrapper>
                                                        <TableDataContentWrap>
                                                            <TableDataContentImag style={{ width: '7rem', height: '7rem' }} src={`/icon/${cardImg[cardType]}`} />
                                                            <TableDataContentTextWrap>
                                                                <TableDataContentText>{cardType || 'Type'}</TableDataContentText>
                                                                <TableDataContentText2>{action}</TableDataContentText2>
                                                            </TableDataContentTextWrap>
                                                        </TableDataContentWrap>
                                                    </TableDataContentWrapper>
                                                </TableData>
                                                <TableData>
                                                    <TableDataContentWrapper>
                                                        <TableDataContentWrap>
                                                            <TableDataContentTextWrap>
                                                                <TableDataContentText>NGN {parseFloat(amount).toLocaleString()}.00</TableDataContentText>
                                                                <TableDataContentText2>{status || 'nada'}</TableDataContentText2>
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
                                        )) : <div>No data found</div>
                                        }
                                    </tbody>
                                </DataTable>
                            </DataGridContainer>
                        </ContentWrap>
                    </ContentWrapper>
                </MobileActivitiesWrap>
            </MobileActivitiesWrapper>

            {/* DesktopView */}
            <DesktopActivitiesWrapper sx={{ display: { md: 'none', lg: 'flex', xl: 'flex', xs: 'none', sm: 'none' } }}>
                <DesktopActivitiesWrap>
                    <DesktopActivitiesContentsWrap>
                        {/* Header */}
                        <DesktopActivitiesHeaderWrapper>
                            <MobileActivitiesHeaderImage src='/svg/blue-page-header.svg' />
                            <MobileActivitiesHeaderContentWrapper>
                                <MobileActivitiesHeaderContentWrap>
                                    <MobileActivitiesHeaderTitleText>Activities</MobileActivitiesHeaderTitleText>
                                    <MobileActivitiesHeaderActionWrapper>
                                        <MobileActivitiesHeaderAction>
                                            <MobileActivitiesHeaderActionButton activeColor={active ? 'transparent' : '#F5CF48'} onClick={switchFlip}>
                                                <MobileActivitiesHeaderActionButtonText>Gift Cards</MobileActivitiesHeaderActionButtonText>
                                            </MobileActivitiesHeaderActionButton>
                                            <MobileActivitiesHeaderActionButton activeColor={active ? '#F5CF48' : 'transparent'} onClick={switchFlip}>
                                                <MobileActivitiesHeaderActionButtonText>Bill Payments</MobileActivitiesHeaderActionButtonText>
                                            </MobileActivitiesHeaderActionButton>
                                        </MobileActivitiesHeaderAction>
                                    </MobileActivitiesHeaderActionWrapper>
                                </MobileActivitiesHeaderContentWrap>
                            </MobileActivitiesHeaderContentWrapper>
                        </DesktopActivitiesHeaderWrapper>
                        {/* Content */}
                        <DesktopActivitiesContentWrapper>
                            <ContentWrap>
                                <ContentHeaderWrapper>
                                    <ContentHeaderText>All transactions</ContentHeaderText>
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
                                </ContentHeaderWrapper>
                                <DataGridContainer>
                                    <DataTable>
                                        <tbody>
                                            {cards ? cards.map(({ tx: { amount, cardType, currency, ecode, fileCount, rate, status, timeStamp, action } }, i) => (
                                                <tr key={i}>
                                                    <TableData >
                                                        <TableDataContentWrapper>
                                                            <TableDataContentWrap>
                                                                <TableDataContentImag style={{ width: '10rem', height: '10rem' }} src={`/icon/${cardImg[cardType]}`} />
                                                                <TableDataContentTextWrap>
                                                                    <TableDataContentText>{cardType}</TableDataContentText>
                                                                    <TableDataContentText2>{action}</TableDataContentText2>
                                                                </TableDataContentTextWrap>
                                                            </TableDataContentWrap>
                                                        </TableDataContentWrapper>
                                                    </TableData>
                                                    <TableData>
                                                        <TableDataContentWrapper>
                                                            <TableDataContentWrap>
                                                                <TableDataContentTextWrap>
                                                                    <TableDataContentText>{timeStamp}</TableDataContentText>
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
                                                                    {status === 'declined' && <Declined>{status}</Declined>}
                                                                    {status === 'success' && <Success>{status}</Success>}
                                                                    {status === 'pending' && <Pending>{status}</Pending>}
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
                                            )) : <div>No data found yet</div>
                                            }
                                        </tbody>
                                    </DataTable>
                                </DataGridContainer>
                            </ContentWrap>
                        </DesktopActivitiesContentWrapper>
                    </DesktopActivitiesContentsWrap>
                </DesktopActivitiesWrap>
            </DesktopActivitiesWrapper>
        </>
    )
}

export default Activities;