import styled from "styled-components";
import BaseModal from "./baseModal"
import {
    InfoContentWrapper, InfoContentWrap, InfoContentImage, InfoContentTextWrapper,
    InfoContentText, InfoContentSubText, InfoContentSubTextWrapper, OrderContentWrapper, OrderContentHeaderWrapper, OrderContentHeaderImage,
    OrderContentHeaderSubTextWrapper, OrderContentHeaderText, OrderContentHeaderSubText, OrderSubContentWrapper, OrderSubContentText,
    OrderSubContentSubTextWrapper, OrderSubContentSubText, OrderSubContentCopyImageWrapper, OrderSubContentCopyImage, OrderSubContentSuccessText,
    OrderSubContentPendingText,
    OrderSubContentDeclinedText

} from "./components";
import { curreniesSymbols } from "../../lib/currency";



const WalletMoreInfoModal = ({ show, close, setAlertText, handleOpenAlertBox, values: { action, amount, status, timeStammp, _id: txRef } }) => {

    function copy() {
        navigator.clipboard.writeText(txRef);
        setAlertText({ title: '', paragraph: 'Text copied successfully', reason: 'success', sender: 'amim' });
        handleOpenAlertBox();
    }

    async function reportWalletTransaction() {

    }


    return (
        <BaseModal show={show} close={close}
            title={'Transaction Details'}
            subtitle={''}
            submitBtn={false}
            submit={() => reportWalletTransaction()}
            btnText={'Report Transaction'}
        >

            <OrderContentWrapper>
                <OrderContentHeaderWrapper>
                    <OrderContentHeaderImage src="/svg/money-remove.svg" />
                    <OrderContentHeaderSubTextWrapper>
                        <OrderContentHeaderText>{String(action).toUpperCase() || "Action"}</OrderContentHeaderText>
                        <OrderContentHeaderSubText>RDM CREDIT</OrderContentHeaderSubText>
                    </OrderContentHeaderSubTextWrapper>
                </OrderContentHeaderWrapper>

                <OrderSubContentWrapper>
                    <OrderSubContentText>Transaction reference:</OrderSubContentText>
                    <OrderSubContentSubTextWrapper>
                        <OrderSubContentSubText>{String(txRef).substring(0, 4) + '...' + String(txRef).substring(String(txRef).length - 5, String(txRef).length)}</OrderSubContentSubText>
                        <OrderSubContentCopyImageWrapper onClick={copy}>
                            <OrderSubContentCopyImage src="svg/copy.svg" />
                        </OrderSubContentCopyImageWrapper>
                    </OrderSubContentSubTextWrapper>
                </OrderSubContentWrapper>

                <OrderSubContentWrapper>
                    <OrderSubContentText>Amount:</OrderSubContentText>
                    <OrderSubContentSubTextWrapper>
                        <OrderSubContentSubText>{curreniesSymbols['ngn']} {parseFloat(amount).toLocaleString() + '.00' || "0.00"}</OrderSubContentSubText>
                    </OrderSubContentSubTextWrapper>
                </OrderSubContentWrapper>

                <OrderSubContentWrapper>
                    <OrderSubContentText>Date:</OrderSubContentText>
                    <OrderSubContentSubTextWrapper>
                        <OrderSubContentSubText>{timeStammp}</OrderSubContentSubText>
                    </OrderSubContentSubTextWrapper>
                </OrderSubContentWrapper>

                <OrderSubContentText>Transaction Status:<br />
                    <div style={{ marginTop: '.8rem' }}>
                        {status === 'pending' && <OrderSubContentPendingText>{status}</OrderSubContentPendingText>}
                        {status === 'declined' && <OrderSubContentDeclinedText>{status}</OrderSubContentDeclinedText>}
                        {status === 'success' && <OrderSubContentSuccessText>{status}</OrderSubContentSuccessText>}

                    </div>
                </OrderSubContentText>



            </OrderContentWrapper>

        </BaseModal>
    )
}

export default WalletMoreInfoModal;