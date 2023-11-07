import { Grid } from "@mui/material";
import styled from "styled-components";

// Mobile Components
export const MobileContentWrapper = styled(Grid)(({ }) => (`
    position: relative;
    height: 100vh;
`))
export const MobileContentWrap = styled('div')(() => (`
    width: 100%;
    height: 100vh;
    padding: .8rem;
    display: grid;
    grid-template-columns: 1fr repeat(2, minmax(min-content, 20rem)) 1fr;
    position: relative;
`))
export const MobileContent = styled('div')(() => (`
    margin-top: .8rem;
    grid-column: 2 / 4;
    height: calc(100% + 15rem);
`))

// Desktop Components
export const DesktopContentWrapper = styled(Grid)(({ }) => (`
    width: calc(100vw - 250px);
    overflow-y: scroll;
    background-color: #FFFFFF;
    overflow: auto;
    height: 100vh;
    background-color: rgb(248, 247, 254);
    transition: width 0.3s ease-in-out 0s;
`))
export const DesktopContentWrap = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    display: flex;
`))
export const DesktopContent = styled('div')(() => (`
    gap:2.4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 2rem 3.2rem;
    margin-top: 2rem;
    display: flex;
`))


export const DesktopSubHeaderContentWrapper = styled('div')(() => (`
    gap: 4.8rem;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const DesktopSubHeaderContentLeft = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    position: relative;
    width: 60%;
    height: 100%;
    display: flex;
`))
export const DesktopSubHeaderContentRight = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 40%;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
    display: flex;
`))
export const DesktopSubHeaderContentTextWrapper = styled('div')(() => (`
   align-items: flex-start;
    gap: 1.6rem;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    position: absolute;
    top: 20%;
    left: 5rem;
    width: 100%;
    height: 100%;
    display: flex;
`))
export const DesktopSubHeaderWalletTypeText = styled('p')(() => (`
    color: #FFFFFF;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const DesktopWithdrawBtn = styled('button')(() => (`
    all: unset;
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    gap: 1.6rem;
    white-space: nowrap;
    transition: all 0.2s ease-in-out 0s;
`))
export const DesktopWithdrawBtnText = styled('div')(() => (`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1.6rem;
`))
export const DesktopProfileContentWrapper = styled('div')(() => (`
    width: 75%;
    gap: 1.6rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    position: absolute;
    top: 20%;
    left: 5rem;
    height: 100%;
    display: flex;
`))
export const DesktopProfileContentWrap = styled('div')(() => (`
    gap: 1.6rem;
    width: 100%;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const DesktopProfileTextContentWrap = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const DesktopQuickActionsWrapper = styled('div')(() => (`
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
    gap: 1.6rem;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;

`))
export const DesktopQuickActionsWrap = styled('div')(() => (`
    white-space: nowrap;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: .8rem;
    line-height: 1.6rem;
    color: #7165E3;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const DesktopQuickActionLine = styled('div')(() => (`
    width: 100%;
    height: 1px;
    background-color: #EBE9FB;
`))
export const DesktopQuickActionContentWrapper = styled('div')(() => (`
    align-items: flex-end;
    gap: 2.4rem;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const DesktopQuickActionContentLeftWrap = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    position: relative;
    width: 40%;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
    display: flex;
`))
export const DesktopQuickActionContentRightWrap = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    position: relative;
    width: 45%;
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
    display: flex;
`))
export const PayBillTextWrapper = styled('div')(() => (`
    position: absolute;
    top: 60%;
    left: 70%;
    transform: translate(-50%, -50%);
    gap: .4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const PayBillText = styled('p')(() => (`
    color: #3F1E4B;
    font-size: 2.8rem;
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const PayBillSubText = styled('p')(() => (`
    font-family: CeraPro-Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: #3F1E4B;
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
// ===================================================================

export const HeaderContentWrapper = styled('div')(() => (`
    margin-bottom: 1.6rem;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const HeaderTextWrapper = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const HeaderText = styled('p')(() => (`
    color: #BDBDBD;
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    font-size: 2.4rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const HeaderUserText = styled('p')(() => (`
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    color: #7165E3;
    font-size: 2.4rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const HeaderNotificationWrapper = styled('div')(() => (`
    gap: 1.6rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const HeaderNotificationIconWrap = styled('div')(() => (`
    height: 48px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#F2F2F2;
    border-radius: 1.6rem;
    cursor: pointer;
    padding: 1.2rem;
    position: relative;
`))
export const HeaderNotificationIconImage = styled('img')(() => (`
    height: 100%;
    width: 100%;
`))

export const SubHeaderContentWrapper = styled('div')(() => (`
    gap: 1.6rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const SubHeaderContent = styled('div')(() => (`
    width: 50%;
    position: relative;
`))
export const SubHeaderTextWrapper = styled('div')(() => (`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    padding: 2.5rem 2rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const SubHeaderWalletTypeText = styled('p')(() => (`
    margin-bottom: 4.4rem;
    color: #FFFFFF;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: .8rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const SubHeaderWalletBalanceTextWrapper = styled('div')(() => (`
    gap: .4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const SubHeaderWalletBalanceTextHeader = styled('p')(() => (`
    color: #F3F2FD;
    font-size: 1.2rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem; 
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const SubHeaderWalletBalanceHeaderWrapper = styled('div')(() => (`
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const BalanceText = styled('p')(() => (`
    color: #FFFFFF;
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    font-size: 2.4rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const CurrencyText = styled('p')(() => (`
    font-size: 1.2rem;
    color: #FFFFFF;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const WithdrawBtnWrapper = styled('div')(() => (`
    margin-top: 2rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const WithdrawBtn = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 100%;
    height: 4rem;
    position: relative; 
    cursor: pointer;
    display: flex;
`))
export const WithdrawBtnTextWrapper = styled('div')(() => (`
    position: absolute;
    height: 100%;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    display: flex;
`))
export const WithdrawBtnText = styled('p')(() => (`
    margin-top: .4rem;
    margin-bottom: 1rem;
    color: #000000;
    font-size: 1rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const ProfileContentWrapper = styled('div')(() => (`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    padding: 2.5rem 2rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const ProfileContentWrap = styled('div')(() => (`
    margin-top: .4rem;
    margin-bottom: 0rem;
    align-items: flex-start;
    justify-content: flex-start;
    gap: .8rem;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const ProfileAvatar = styled('img')(() => (`
    height: 4rem;
`))
export const ProfileStatText = styled('p')(() => (`
    font-size: 2.8rem;
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const ProfileSubText = styled('p')(() => (`
    margin-bottom: 0rem;
    font-size: 1.2rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    color: #4F4F4F;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const QuickActionsWrapper = styled('div')(() => (`
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    gap: 1.6rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const QuickActionsText = styled('p')(() => (`
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const QuickActionsWrap = styled('div')(() => (`
    position: relative;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
    margin-bottom: 1rem;
`))
export const QuickActionsSubText = styled('p')(() => (`
    position: absolute;
    right: 10%;
    top: 30%;
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    color: #7165E3;
    font-size: 2.4rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))