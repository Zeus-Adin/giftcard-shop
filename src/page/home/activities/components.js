import { Grid } from "@mui/material";
import styled from "styled-components";

export const MobileActivitiesWrapper = styled(Grid)(() => (`
    width: 100%;
    height: 100vh;
    padding: .8rem;
    display: grid;    
    grid-template-columns: 1fr repeat(2, minmax(min-content, 20rem)) 1fr;
    position: relative;
`))
export const MobileActivitiesWrap = styled('div')(() => (`
    margin-top: .8rem;
    grid-column: 2 / 4;
    height: calc(100% + 15rem);
`))
export const MobileActivitiesHeaderWrapper = styled('div')(() => (`
    display: flex;
    position: absolute;
    width: 100%;
    height: 20rem;
    left: 0px;
    top: 0px;
`))
export const MobileActivitiesHeaderImage = styled('img')(() => (`
    width: 100%;
    height: 100%;
    object-fit: cover;
`))
export const MobileActivitiesHeaderContentWrapper = styled('div')(() => (`
    position: absolute;
    top: 25%;
    left: 0%;
    padding: 1.6rem;
    gap: 2.4rem;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    display: flex;
`))
export const MobileActivitiesHeaderContentWrap = styled('div')(() => (`
    gap: 2rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const MobileActivitiesHeaderTitleText = styled('p')(() => (`
    color: #FFFFFF;
    text-align: left;
    font-family:CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    font-size: 2.4rem;
    letter-spacing: 0.2px;
    text-decoration: none;
    font-weight: 650;
`))
export const MobileActivitiesHeaderActionWrapper = styled('div')(() => (`
    gap: 1.6rem;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))
export const MobileActivitiesHeaderAction = styled('div')(() => (`
    background-color: rgb(104, 91, 225);
    border-radius: 4rem;
    padding: .4rem;
    justify-content: flex-start;
    gap: .8rem;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const MobileActivitiesHeaderActionButton = styled('div')(({ activeColor }) => (`
    padding: 1.6rem 2.4rem;
    color: #000000;
    background-color: ${activeColor};
    border-radius: 6rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out 0s;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    display: flex;
`))
export const MobileActivitiesHeaderActionButtonText = styled('p')(() => (`
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
    font-weight: 600;
`))

export const ContentWrapper = styled('div')(() => (`
    position: absolute;
    left: 0px;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    top: 22rem;
`))
export const ContentWrap = styled('div')(() => (`
    width: 100%;
`))
export const ContentHeaderWrapper = styled('div')(() => (`
    column-gap: .8rem;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))
export const ContentHeaderText = styled('p')(() => (`
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    color: #7165E3;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

// Desktop Components
export const DesktopActivitiesWrapper = styled(Grid)(() => (`
    width: calc(100vw - 250px);
    overflow-y: scroll;
    background-color: #E3BC8D;
    overflow: auto;
    height: 100vh;
    transition: width 0.3s ease-in-out 0s;
`))
export const DesktopActivitiesWrap = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    display: flex;
`))
export const DesktopActivitiesContentsWrap = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const DesktopActivitiesHeaderWrapper = styled('div')(() => (`
    display: flex;
    position: relative;
    width: 100%;
    height: 20rem;
`))
export const DesktopActivitiesContentWrapper = styled('div')(() => (`
    padding: 2rem 3.2rem;
    gap: 2rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const Declined = styled('div')(() => (`
    width: fit-content;
    padding: 1.6rem 2.4rem;
    color: #E81313;
    background-color: #FBD0D0;
    border-radius: 2.4rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const Success = styled('div')(() => (`
    width: fit-content;
    padding: 1.6rem 2.4rem;
    color:#27AE60;
    background-color: rgb(234, 250, 241);
    border-radius: 2.4rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const Pending = styled('div')(() => (`
    width: fit-content;
    padding: 1.6rem 2.4rem;
    color: #F5CF48;
    background-color: #FAE69E;
    border-radius: 2.4rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))