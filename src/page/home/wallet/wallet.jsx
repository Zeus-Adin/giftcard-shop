import { Button, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
    MobileAppBar, MobileGridBar, MobileContentBar, MobileHeaderBar, MobileHeaderTextWrapper, MobileHeaderSalutationText,
    MobileHeaderUserNotificationIconWrapper, MobileHeaderUserNotificationIcon, MobileHeaderUserNotificationIconImage, MobileBannerWrapper,
    MobileBannerImage, MobileBannerTextWrapper, MobileBannerTextInnerWrapper, MobileBannerTextInnerWrap, MobileBannerText, MobileBannerTextHideIconWrapper,
    MobileBannerTextHideIconImage, MobileBannerBalanceText, MobileBannerBalanceTextCurrency, MobileBannerBalanceButtonWrapper, MobileBannerBalanceButtonAddWrapper,
    MobileBannerBalanceButtonAddImage, MobileBannerBalanceButtonAddText, MobileBannerBalanceButtonWithdrawWrapper, MobileBannerBalanceButtonWithdrawImage,
    MobileBannerBalanceButtonWithdrawText, DataGridContainer, MobileHistoryWrapper, MobileHistoryInnerWrapper, MobileHistoryHeaderWrapper, MobileHistoryHeaderText,
    MobileHistoryHeaderTextItermsWrapper, MobileHistoryHeaderTextDateFilterButtonWrap, DesktopViewWrapper, DesktopHeader, DesktopBannerWrapper,
} from './components'

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'lastName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
];

const rows = [
    { id: 1, lastName: 'Snow' },
    { id: 2, lastName: 'Lannister' },
    { id: 3, lastName: 'Lannister' },
    { id: 4, lastName: 'Stark' },
    { id: 5, lastName: 'Targaryen' },
    { id: 6, lastName: 'Melisandre' },
    { id: 7, lastName: 'Clifford' },
    { id: 8, lastName: 'Frances' },
    { id: 9, lastName: 'Roxie' },
];



const Wallet = ({ redirect }) => {

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
                                        <MobileBannerTextHideIconWrapper>
                                            <MobileBannerTextHideIconImage src="/svg/eye-slash.svg" />
                                        </MobileBannerTextHideIconWrapper>
                                    </MobileBannerTextInnerWrap>
                                    <MobileBannerBalanceText>0.00<MobileBannerBalanceTextCurrency>NGN</MobileBannerBalanceTextCurrency></MobileBannerBalanceText>
                                </MobileBannerTextInnerWrapper>
                                <MobileBannerBalanceButtonWrapper>
                                    <MobileBannerBalanceButtonAddWrapper>
                                        <MobileBannerBalanceButtonAddImage src="/svg/fund-icon.svg" />
                                        <MobileBannerBalanceButtonAddText>Fund Account</MobileBannerBalanceButtonAddText>
                                    </MobileBannerBalanceButtonAddWrapper>
                                    <MobileBannerBalanceButtonWithdrawWrapper>
                                        <MobileBannerBalanceButtonWithdrawImage src="/svg/withdraw-icon.svg" />
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
                                <DataGridContainer
                                    rows={rows}
                                    columns={columns}
                                    columnHeaderHeight={0}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                pageSize: 7,
                                            },
                                        },
                                    }}
                                    pageSizeOptions={[5]}
                                    disableRowSelectionOnClick
                                />
                            </MobileHistoryInnerWrapper>
                        </MobileHistoryWrapper>
                    </MobileContentBar>
                </MobileGridBar>
            </MobileAppBar>

            {/* Desktop Nav Bar */}
            <DesktopViewWrapper sx={{ display: { lg: 'flex', xl: 'flex', sm: 'none', xs: 'none' } }}>
                {/* Main Box */}
                <DesktopHeader>

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

                        <DesktopBannerWrapper>
                            <MobileBannerImage src="/svg/wallet-mobile-bg.svg" />
                            <MobileBannerTextWrapper>
                                <MobileBannerTextInnerWrapper>
                                    <MobileBannerTextInnerWrap>
                                        <MobileBannerText>Naira Wallet</MobileBannerText>
                                        <MobileBannerTextHideIconWrapper>
                                            <MobileBannerTextHideIconImage src="/svg/eye-slash.svg" />
                                        </MobileBannerTextHideIconWrapper>
                                    </MobileBannerTextInnerWrap>
                                    <MobileBannerBalanceText>0.00<MobileBannerBalanceTextCurrency>NGN</MobileBannerBalanceTextCurrency></MobileBannerBalanceText>
                                </MobileBannerTextInnerWrapper>
                                <MobileBannerBalanceButtonWrapper>
                                    <MobileBannerBalanceButtonAddWrapper>
                                        <MobileBannerBalanceButtonAddImage src="/svg/fund-icon.svg" />
                                        <MobileBannerBalanceButtonAddText>Fund Account</MobileBannerBalanceButtonAddText>
                                    </MobileBannerBalanceButtonAddWrapper>
                                    <MobileBannerBalanceButtonWithdrawWrapper>
                                        <MobileBannerBalanceButtonWithdrawImage src="/svg/withdraw-icon.svg" />
                                        <MobileBannerBalanceButtonWithdrawText>Withdraw</MobileBannerBalanceButtonWithdrawText>
                                    </MobileBannerBalanceButtonWithdrawWrapper>
                                </MobileBannerBalanceButtonWrapper>
                            </MobileBannerTextWrapper>
                        </DesktopBannerWrapper>
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
                                <DataGridContainer
                                    rows={rows}
                                    columns={columns}
                                    columnHeaderHeight={0}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                pageSize: 7,
                                            },
                                        },
                                    }}
                                    pageSizeOptions={[5]}
                                    disableRowSelectionOnClick
                                />
                            </MobileHistoryInnerWrapper>
                        </MobileHistoryWrapper>
                    </MobileContentBar>

                </DesktopHeader>
            </DesktopViewWrapper>
        </>
    )
}

export default Wallet;