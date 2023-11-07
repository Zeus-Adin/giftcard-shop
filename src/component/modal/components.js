import styled from "@emotion/styled";

export const CloseBtn = styled('button')(() => (`
    all: unset;
    width: 42px;
    height: 5px;
    background-color: #BDBDBD;
    cursor: pointer;
    border-radius: .8rem;
    margin: 0px auto;
`))

export const Title = styled('h2')(() => (`
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`))

export const SubTitle = styled('p')(() => (`
    color: #BDBDBD;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1rem;
    text-align: center;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const InputWrapper = styled('div')(() => (`
    margin-top: 4.8rem;
    margin-bottom: 4.8rem;
    gap: 1.6rem;
    justify-content: flex-start;
    width: 100%;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const BankSelect = styled('button')(() => (`
    color: #4F4F4F;
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem;
    line-height: 1;
    height: 35px;
    background-color: #F2F2F2;
    cursor: pointer;
    width: -webkit-fill-available;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    letter-spacing: .1rem;
    border-radius: 4rem;
    padding: 1.6rem 1.8rem;
    gap: 5px;
`))

export const BankSelectText = styled('span')(() => (`
    pointer-events: none;
`))

export const BankSelectPointer = styled('span')(() => (`
    color: #4F4F4F;
    cursor: pointer;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    letter-spacing: 1.6rem;
    font-size: 1.6rem;
    line-height: 1;
`))

export const BankSelectImage = styled('img')(() => (`
    width: 1.4rem;
    overflow-clip-margin: content-box;
    overflow: clip;
    color: #4F4F4F;
    cursor: pointer;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    letter-spacing: 1.6rem;
    font-size: 1.6rem;
    line-height: 1;
`))

export const InputWrap = styled('div')(() => (`
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    display: flex;
`))

export const InputContent = styled('div')(() => (`
    background-color: #F2F2F2;
    width: 100%;
    border-radius: 5rem;
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out 0s;
`))

export const InputContentWrap = styled('div')(() => (`
    width: 100%;
`))

export const InputContentLabel = styled('label')(() => (`
    display: block;
    color: #4F4F4F;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1.4rem;
    letter-spacing: .1rem;
    will-change: color;
    transition: color 0.2s ease-in-out 0s;
`))

export const InputContentBox = styled('input')(() => (`
    transition: all 0.3s ease-in 0s;
    all: unset;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: #4F4F4F;
    font-size: 1.6rem;
    letter-spacing: .4rem;
    width: 100%;
    margin-top: .4rem;
`))

export const InputContentButtonWrapper = styled('div')(() => (`
    margin-top: auto;
`))

export const InputContentButtonWrap = styled('div')(() => (`
    margin-top: 3.2rem;
    gap: 1.6rem;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    display: flex;
`))

export const InputContentButton = styled('button')(() => (`
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
    all: unset;
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    align-items: center;
    justify-content: center;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    gap: 1.6rem;
    white-space: nowrap;
    transition: all 0.2s ease-in-out 0s;
`))

export const InputContentButtonText = styled('div')(() => (`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1.6rem;
`))

export const AccountText = styled('p')(() => (`
    color: #BDBDBD;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: 1rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))