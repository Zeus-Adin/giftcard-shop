import styled from "styled-components";

// Mobile Header components
export const HeaderContent = styled('div')(() => (`
    padding: .8rem;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 1;
    background-color: #FFFFFF;
`))

export const HeaderBackBtnWrapper = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))

export const HeaderBackBtn = styled('div')(() => (`
    height: 4rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
    border-radius: .8rem;
    cursor: pointer;
`))

// Content COmponents
export const ContentsWrapper = styled('div')(() => (`
    width: 100%;
    height: 100vh;
    padding: .8rem;
    display: grid;
    grid-template-columns: 1fr repeat(2, minmax(min-content, 20rem)) 1fr;
    position: relative;
`))

export const Contents = styled('div')(() => (`
    margin-top: 4.8rem;
    grid-column: 2 / 4;
    height: calc(100% + 15rem);
`))

export const AddAccountBtn = styled('div')(() => (`
    margin-top: 3.2rem;
    cursor: pointer;
    gap: 1.6rem;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex; 
`))

export const AddAccountText = styled('p')(() => (`
    color: #3F1E4B;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const ContentDivider = styled('div')(() => (`
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    gap: 1.6rem;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))

export const ContentDividerText = styled('p')(() => (`
    white-space: nowrap;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: .8rem;
    line-height: 1.6rem;
    color: #7165E3;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const ContentDividerLine = styled('div')(() => (`
    width: 100%;
    height: 1px;
    background-color: #EBE9FB;
`))

export const AccountCardWrapper = styled('div')(() => (`
    gap: 2.4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const AccountCard = styled('div')(() => (`
    align-items: flex-start;
    gap: 2.4rem;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const Card = styled('div')(() => (`
    box-shadow: none;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 28rem;
    height: 14rem;
    border-radius: 2.4rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    display: flex;
`))

export const CardImages = styled('img')(() => (`
    width: 100%;
    height: 100%;
    object-fit: cover;
`))

export const CardTextWrapper = styled('div')(() => (`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0px;
    padding: 2.4rem;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const CardText = styled('p')(() => (`
    background: #F5CF48;
    align-self: flex-end;
    padding: .4rem .8rem;
    border-radius: 2.4rem;
    margin-bottom: 2.4rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: .8rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const CardAccountDetailsWrapper = styled('div')(() => (`
    gap: .4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const CardAccountDetailsNumber = styled('p')(() => (`
    color: #FFFFFF;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const CardAccountDetailsBank = styled('p')(() => (`
    font-family: CeraPro-Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: #FFFFFF;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const CardAssignAccountWrapper = styled('div')(() => (`
    width: 40rem;
    margin-top: 2.0rem;
`))

export const CardAssignAccountBtn = styled('button')(() => (`
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
    all: unset;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:  CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    gap: 1.6rem;
    white-space: nowrap;
    transition: all 0.2s ease-in-out 0s;
`))

export const CardAssignAccountBtnText = styled('div')(() => (`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1.6rem;
`))