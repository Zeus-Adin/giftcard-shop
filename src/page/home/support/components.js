import { styled } from '@mui/material'

export const ContentWrapper = styled('div')(() => (`
    gap: 2.4rem;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    padding: 2rem 3.2rem;
    margin-top: 1.8rem;
    width: 45rem;
    display: flex;
`))

export const ContentText = styled('p')(() => (`
    align-self: flex-start;
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Co;
    line-height: 1.6rem;
    color:#7165E3;
    font-size: 2.4rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const SubContentWrapper = styled('div')(() => (`
    gap: 2.4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const SubContentImage = styled('img')(() => (`
    width: 80%;
    margin: 0px auto;
`))

export const SubContentText = styled('p')(() => (`
    font-size: 2.8rem;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: center;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
    font-weight: 500;
`))

export const SubContentContactLinksWrapper = styled('div')(() => (`
    padding: 3.2rem;
    border-radius: 1.8rem;
    background-color: rgb(242, 242, 242);
    justify-content: flex-start;
    gap: .8rem;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const SubContentContactLinks = styled('div')(() => (`
    gap: 1.6rem;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    display: flex;
`))

export const SubContentFollowLinks = styled('a')(() => (`
    text-decoration: none;
    gap: .4rem;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    display: flex;
    cursor: pointer;
`))

export const SubContentFollowLinksText = styled('p')(() => (`
    font-family:  CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    color: #7165E3;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const LiveChatWrapper = styled('div')(() => (`
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    padding: 1.6rem 2.4rem;
    border-radius: 1.6rem;
    background-color: #7165E3;
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
    display: flex;
`))

export const LiveChatTextWrapper = styled('div')(() => (`
    margin-left: 2rem;
    justify-content: flex-start;
    gap: .8rem;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const LiveChatText = styled('p')(() => (`
    font-size: 1.6rem;
    color: #FFFFF;
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const LiveChatSubText = styled('p')(() => (`
    color: #FFFFFF;
    font-family: #FFFFFF;
    text-align: left;
    font-size: .8rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))