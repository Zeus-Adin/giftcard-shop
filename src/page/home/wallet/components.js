// Mobile Componets

import styled from "@emotion/styled"
import { Grid, Typography, Button } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid";

// Mobile Header Components
export const MobileAppBar = styled(Grid)(({ }) => ({
    position: 'relative',
    height: '100vh',
}))
export const MobileGridBar = styled(Grid)(({ }) => ({
    width: '100%',
    height: '100vh',
    padding: '.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr repeat(2, minmax(min-content, 20rem)) 1fr',
    position: 'relative',
}))
export const MobileContentBar = styled(Grid)(({ }) => ({
    marginTop: '.8rem',
    gridColumn: '2 / 4',
    height: 'calc(100% + 10rem)',
}))

// Mobile Header Bar
export const MobileHeaderBar = styled(Grid)(({ }) => ({
    marginBottom: '1.6rem',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const MobileHeaderTextWrapper = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const MobileHeaderSalutationText = styled('p')(({ }) => ({
    color: '#7165E3',
    fontSize: '2.4rem',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const MobileHeaderUserNotificationIconWrapper = styled('div')(({ }) => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const MobileHeaderUserNotificationIcon = styled('div')(({ }) => ({
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
export const MobileHeaderUserNotificationIconImage = styled('img')(({ }) => ({
    height: '100%',
    width: '100%',
}))

// Mobile Banner Components
export const MobileBannerWrapper = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    marginTop: '3.2rem',
    display: 'flex',
}))
export const MobileBannerImage = styled('img')(({ }) => ({
    width: '100%',
    height: '100%',
}))
export const MobileBannerTextWrapper = styled('div')(({ }) => ({
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
export const MobileBannerTextInnerWrapper = styled('div')(({ }) => ({
    alignItems: 'flex-start',
    width: '100%',
    gap: '.8rem',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const MobileBannerTextInnerWrap = styled('div')(({ }) => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    width: '100%',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
export const MobileBannerText = styled('p')(({ }) => ({
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const MobileBannerTextHideIconWrapper = styled('div')(({ }) => ({
    cursor: 'pointer',
    marginLeft: '10rem',
}))
export const MobileBannerTextHideIconImage = styled('img')(({ }) => ({
    width: '2rem',
    cursor: 'pointer'
}))
export const MobileBannerBalanceText = styled('p')(({ }) => ({
    color: 'white',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    fontSize: '2.8rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const MobileBannerBalanceTextCurrency = styled('span')(({ }) => ({
    fontSize: '1rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    verticalAlign: 'top',
    color: 'white',
    textAlign: 'left',
    letterSpacing: '0.2px',
    lineHeight: '1.6rem',
}))
// Fund Account
export const MobileBannerBalanceButtonWrapper = styled('div')(({ }) => ({
    gap: '6.4rem',
    width: '100%',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',

}))
export const MobileBannerBalanceButtonAddWrapper = styled('div')(({ }) => ({
    cursor: 'pointer',
    gap: '.8rem',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    display: 'flex',
}))
export const MobileBannerBalanceButtonAddImage = styled('img')(({ }) => ({

}))
export const MobileBannerBalanceButtonAddText = styled('p')(({ }) => ({
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
// WithDraw
export const MobileBannerBalanceButtonWithdrawWrapper = styled('div')(({ }) => ({
    cursor: 'pointer',
    gap: '.8rem',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    display: 'flex',
}))
export const MobileBannerBalanceButtonWithdrawImage = styled('img')(({ }) => ({

}))
export const MobileBannerBalanceButtonWithdrawText = styled('p')(({ }) => ({
    color: 'white',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

export const DataGridContainer = styled(DataGrid)(({ }) => ({
    marginTop: '1.5rem'
}))

// Wallet History Components
export const MobileHistoryWrapper = styled('div')(({ }) => ({
    marginTop: '2rem'
}))
export const MobileHistoryInnerWrapper = styled('div')(({ }) => ({
    width: '100%'
}))
export const MobileHistoryHeaderWrapper = styled('div')(({ }) => ({
    columnGap: '.8rem',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',

}))
export const MobileHistoryHeaderText = styled('p')(({ }) => ({
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    lineHeight: '1.6rem',
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const MobileHistoryHeaderTextItermsWrapper = styled(Typography)(({ }) => ({
    marginLeft: 'auto',
    gap: '1.6rem',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
export const MobileHistoryHeaderTextDateFilterButtonWrap = styled(Button)(({ }) => ({
    color: '#7165e3'
}))



// Desktop Components
export const DesktopViewWrapper = styled(Grid)(({ }) => ({
    width: 'calc(100vw - 250px)',
    overflowY: 'scroll',
    backgroundColor: '',
    overflow: 'auto',
    height: '100vh',
    transition: 'width 0.3s ease-in-out 0s',
    padding: '2rem 2rem',

}))
export const DesktopHeader = styled('div')(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
}))
export const DesktopBannerWrapper = styled('div')(({ }) => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    marginTop: '3.2rem',
    display: 'flex',
}))