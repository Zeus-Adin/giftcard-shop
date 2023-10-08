import { Button, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DataGrid } from "@mui/x-data-grid";



const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

// Mobile Componets
// Mobile Header Components
const MobileAppBar = styled(Grid)(({ }) => ({
    position: 'relative',
    height: '100vh',
}))
const MobileGridBar = styled(Grid)(({ }) => ({
    width: '100%',
    height: '100vh',
    padding: '.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr repeat(2, minmax(min-content, 20rem)) 1fr',
    position: 'relative',
}))
const MobileContentBar = styled(Grid)(({ }) => ({
    marginTop: '.8rem',
    gridColumn: '2 / 4',
    height: 'calc(100% + 10rem)',
}))

// Mobile Header Bar
const MobileHeaderBar = styled(Grid)(({ }) => ({
    marginBottom: '1.6rem',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileHeaderTextWrapper = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const MobileHeaderSalutationText = styled('p')(({ }) => ({
    color: '#7165E3',
    fontSize: '2.4rem',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileHeaderUserNotificationIconWrapper = styled('div')(({ }) => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileHeaderUserNotificationIcon = styled('div')(({ }) => ({
    height: '48px',
    width: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: '1.8rem',
    cursor: 'pointer',
    padding: '1.2rem',
    position: 'relative',
}))
const MobileHeaderUserNotificationIconImage = styled('img')(({ }) => ({
    height: '100%',
    width: '100%',
}))

// Mobile Banner Components
const MobileBannerWrapper = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    marginTop: '3.2rem',
    display: 'flex',
}))
const MobileBannerImage = styled('img')(({ }) => ({
    width: '100%',
    height: '100%',
}))
const MobileBannerTextWrapper = styled('div')(({ }) => ({
    alignItems: 'flex-start',
    gap: '1.6rem',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    padding: '2rem',
    display: 'flex',
}))
const MobileBannerTextInnerWrapper = styled('div')(({ }) => ({
    alignItems: 'flex-start',
    width: '100%',
    gap: '.8rem',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
const MobileBannerTextInnerWrap = styled('div')(({ }) => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    width: '100%',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileBannerText = styled('p')(({ }) => ({
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileBannerTextHideIconWrapper = styled('div')(({ }) => ({
    cursor: 'pointer',
    marginLeft: '10rem',
}))
const MobileBannerTextHideIconImage = styled('img')(({ }) => ({
    width: '2rem',
    cursor: 'pointer'
}))
const MobileBannerBalanceText = styled('p')(({ }) => ({
    color: 'white',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    fontSize: '2.8rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileBannerBalanceTextCurrency = styled('span')(({ }) => ({
    fontSize: '1rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    verticalAlign: 'top',
    color: 'white',
    textAlign: 'left',
    letterSpacing: '0.2px',
    lineHeight: '1.6rem',
}))
// Fund Account
const MobileBannerBalanceButtonWrapper = styled('div')(({ }) => ({
    gap: '6.4rem',
    width: '100%',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',

}))
const MobileBannerBalanceButtonAddWrapper = styled('div')(({ }) => ({
    cursor: 'pointer',
    gap: '.8rem',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    display: 'flex',
}))
const MobileBannerBalanceButtonAddImage = styled('img')(({ }) => ({

}))
const MobileBannerBalanceButtonAddText = styled('p')(({ }) => ({
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
// WithDraw
const MobileBannerBalanceButtonWithdrawWrapper = styled('div')(({ }) => ({
    cursor: 'pointer',
    gap: '.8rem',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    display: 'flex',
}))
const MobileBannerBalanceButtonWithdrawImage = styled('img')(({ }) => ({

}))
const MobileBannerBalanceButtonWithdrawText = styled('p')(({ }) => ({
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

const DataGridContainer = styled(DataGrid)(({ }) => ({
    marginTop: '1.5rem'
}))

// Wallet History Components
const MobileHistoryWrapper = styled('div')(({ }) => ({
    marginTop: '2rem'
}))
const MobileHistoryInnerWrapper = styled('div')(({ }) => ({
    width: '100%'
}))
const MobileHistoryHeaderWrapper = styled('div')(({ }) => ({
    columnGap: '.8rem',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',

}))
const MobileHistoryHeaderText = styled('p')(({ }) => ({
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    lineHeight: '1.6rem',
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
const MobileHistoryHeaderTextItermsWrapper = styled(Typography)(({ }) => ({
    marginLeft: 'auto',
    gap: '1.6rem',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
const MobileHistoryHeaderTextDateFilterButtonWrap = styled(Button)(({ }) => ({
    color: '#7165e3'
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
const DesktopHeader = styled('div')(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
}))
const DesktopBannerWrapper = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    marginTop: '3.2rem',
    display: 'flex',
}))

const Wallet = () => {

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