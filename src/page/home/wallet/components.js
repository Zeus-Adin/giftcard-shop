// Mobile Componets

import styled from "@emotion/styled"
import { Grid, Typography, Button } from "@mui/material"

// Mobile Header Components
export const MobileAppBar = styled(Grid)(({ }) => ({
    position: 'relative',
    height: '100vh',
    backgroundColor: '#E3BC8D'
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

export const DataGridContainer = styled('div')(({ }) => ({
    marginTop: '1.5rem',
}))
export const DataTable = styled('table')(({ }) => (`
    width: 100%;
    position: relative;
`))
export const TableData = styled('td')(({ }) => (`
    border-bottom: 1px solid #F3F2FD;
    padding: 1.6rem 0rem;
    overflow: hidden;
    text-overflow: ellipsis;
`))
export const TableDataContentWrapper = styled('div')(({ }) => (`
    column-gap: .8rem;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))
export const TableDataContentWrap = styled('div')(({ }) => (`
    gap: 1.6rem;
    justify-content: flex-start;
    width: 100%;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))
export const TableDataContentImag = styled('img')(({ }) => (`
    border-radius: .8rem;
    background: #F2F2F2;
    width: 3.5rem;
    height: 3.5rem;
    padding: 1rem;
`))
export const TableDataContentTextWrap = styled('div')(({ }) => (`
    gap: .4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const TableDataContentText = styled('p')(({ }) => (`
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const TableDataContentText2 = styled('p')(({ }) => (`
    font-size: 1.2rem;
    color: #BDBDBD;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

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
export const DesktopViewWrapper = styled(Grid)(({ }) => (`
    width: calc(100vw - 250px);
    overflow-y: scroll;
    background-color: '#E3BC8D;
    overflow: auto;
    height: 100vh;
    transition: width 0.3s ease-in-out 0s;
`))
export const DesktopViewWrap     = styled('div')(({ }) => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    display: flex;
`))

export const DesktopView = styled('div')(({ }) => (`
    gap: 2.4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 2rem 3.2rem;
    margin-top: 2rem; 
    display: flex;
`))

export const DesktopHeaderWrapper = styled('div')(({ }) => (`
    gap: 2.4rem;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))

export const DesktopHeaderText = styled('p')(({ }) => (`
    font-size: 2.8rem;
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    color: #7165E3;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const DesktopBannerWrapper = styled('div')(({ }) => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
`))

export const DesktopBannerImage = styled('img')(({ }) => (`
    width: 100%;
    height: 100%;
`))

export const DesktopBannerContentWrapper = styled('div')(({ }) => (`
    gap: 1.6rem;
    width: 100%;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 2.4rem 4.8rem;
    display: flex;
`))

export const DesktopBannerContentTextWrapper = styled('div')(({ }) => (`
    align-items: flex-start;
    justify-content: flex-start;
    gap: .8rem;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const DesktopBannerContentNairaTextWrapper = styled('div')(({ }) => (`
    gap: 1.6rem;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))

export const DesktopBannerContentNairaText = styled('p')(({ }) => (`
    color: #FFFFFF;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const DesktopBannerContentNairaTextImageWrapper = styled('div')(({ }) => (`
    cursor: pointer;
    margin-left: 10rem;
`))

export const DesktopBannerContentNairaTextImage = styled('img')(({ }) => (`
    width: 2rem;
`))

export const DesktopBannerContentBalanceText = styled('p')(({ }) => (`
    font-size: 4rem;
    color: #FFFFFF;
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;

    font-weight: 600;
`))

export const DesktopBannerContentCurrency = styled('span')(({ }) => (`
    font-size: 1rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    vertical-align: top;
`))

export const DesktopBannerButtonContentWrapper = styled('div')(({ }) => (`
    gap: 6.4rem;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))

export const DesktopBannerButtonContent1Wrapper = styled('div')(({ }) => (`
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
    justify-content: flex-start;
    gap: .8rem;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    display: flex;
`))

export const DesktopBannerOrderContentWrapper = styled('div')(({ }) => (`
    width: 100%;
`))

export const DesktopBannerOrderContentWrap = styled('div')(({ }) => (`
    column-gap: .8rem;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))

export const DesktopBannerOrderContentHeaderText = styled('p')(({ }) => (`
    font-family: var(--fonts-medium);
    text-align: left;
    line-height: var(--lineHeights-normal);
    color: var(--colors-blue);
    letter-spacing: 0.2px;
    text-decoration: none;
`))