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

export const WithdrawalWrapper = styled('div')(() => (`
    gap: 2.4rem;
    justify-content: flex-start;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    display: flex;
    margin-top: 4rem;
`))

export const WithdrawalAmountTextWrapper = styled('div')(() => (`
    justify-content: flex-start;
    gap: .8rem;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))

export const WithdrawalAmountText = styled('p')(() => (`
    color: rgb(215, 208, 218);
    font-size: 4rem;
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
    font-weight: 600;
`))

export const WithdrawalNumberKeysWrapper = styled('div')(() => (`
    width: 20rem;
    margin-top: 2rem;
    row-gap: 4rem;
    gap: 1.6rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const WithdrawalNumberRowOneWrapper = styled('div')(() => (`
    gap: 1.6rem;
    width: 100%;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))

export const WithdrawalNumberText = styled('p')(() => (`
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: #3F1E4B;
    font-size: 1.6rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

// -=---------------------------------
export const OrderContentWrapper = styled.div(() => (`
    gap: 1.6rem;
    justify-content: flex-start;
    width: 100%;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const OrderContentHeaderWrapper = styled.div(() => (`
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    gap: 1.6rem;
    justify-content: flex-start;
    width: 100%;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))
export const OrderContentHeaderImage = styled.img(() => (`
    border-radius: .8rem;
    background: #F2F2F2;
    width: 4.5rem;
    height: 4.5rem;
    padding: 1.3rem;
`))
export const OrderContentHeaderSubTextWrapper = styled.div(() => (`
    gap: .4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const OrderContentHeaderText = styled.p(() => (`
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const OrderContentHeaderSubText = styled.p(() => (`
    color: #BDBDBD;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const OrderSubContentWrapper = styled.div(() => (`
    gap:.4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const OrderSubContentText = styled.div(() => (`
    color: #BDBDBD;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const OrderSubContentSubTextWrapper = styled.div(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const OrderSubContentSubText = styled.div(() => (`
    font-size: 1.6rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const OrderSubContentCopyImageWrapper = styled.div(() => (`
    cursor: pointer;
    margin-left: 1.6rem;
`))
export const OrderSubContentCopyImage = styled.img(() => (`
    width: 2rem;
`))
export const OrderSubContentSuccessText = styled.p(() => (`
    width: fit-content;
    padding: 1.6rem 2.4rem;
    color: #27AE60;
    background-color: rgb(234, 250, 241);
    border-radius: 2.4rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const OrderSubContentPendingText = styled.p(() => (`
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
export const OrderSubContentDeclinedText = styled.p(() => (`
    width: fit-content;
    padding: 1.6rem 2.4rem;
    color: #27AE60;
    background-color: #E81313;
    border-radius: 2.4rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const ScrollableWrapper = styled('div')(() => (`
    height: 25rem;
    overflow-y: scroll;
    gap: 1.6rem;
    justify-content: flex-start;
    width: 100%;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const AmountWrapper = styled('div')(() => (`
    gap: 3.2rem;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))

export const PasswordContentWrapper = styled.div(() => (`
    margin-top: 2rem;
    gap: 2rem;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    display: flex;
`))

export const PasswordContentHeaderText = styled.div(() => (`
    margin-bottom: 2rem;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    color: #7165E3;
    font-size: 2.4rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const PasswordContentHeaderInputBox = styled.input(() => (`
    font-size: 20px;
    height: 70px;
    width: 70px;
    margin-right: 10px;
    padding: 8px;
    text-align: center;
    color: #7165E3;
    font-family:CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    border-radius: 50%;
    background: #FFFFFF;
    border: 5px solid #F3F2FD;
    outline: none;
    transition: all 0.3s ease 0s;
`))

export const ForgotPasswordContentWrapper = styled.div(() => (`
    padding: 0 1.6rem;
    gap: 2.4rem;
    justify-content: flex-start;
    width: 25rem;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const ForgotPasswordContent = styled.div(() => (`
    justify-content: flex-start;
    gap: .8rem;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const ForgotPasswordInputsWrapper = styled.div(() => (`
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    display: flex;
`))

export const ForgotPasswordInputsWrap = styled.div(() => (`
    background-color: #F2F2F2;
    width: 100%;
    border-radius: 5rem;
    padding: 1.5rem 2rem;
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out 0s;
`))

export const ForgotPasswordInputsContents = styled.div(() => (`
    width: 100%;
`))

export const ForgotPasswordInputsLabel = styled.label(() => (`
    display: block;
    color: #4F4F4F;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1.2rem;
    letter-spacing: .6px;
    will-change: color;
    transition: color 0.2s ease-in-out 0s;
`))

export const ForgotPasswordInputBox = styled.input(() => (`
    font-size: 16px;
    transition: all 0.3s ease-in 0s;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: #4F4F4F;
    background-color: transparent;
    letter-spacing: .8rem;
    width: 100%;
    margin-top: .4rem;
`))

export const ForgotPasswordShowBtnWrapper = styled.button(() => (`
    cursor: pointer;
`))