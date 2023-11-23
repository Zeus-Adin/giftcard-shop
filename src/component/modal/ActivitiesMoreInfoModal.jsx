import BaseModal from "./baseModal"
import {
    OrderContentHeaderWrapper, OrderContentHeaderImage, OrderContentHeaderSubTextWrapper,
    OrderContentHeaderText, OrderContentHeaderSubText, OrderSubContentWrapper, OrderSubContentText,
    OrderSubContentSubTextWrapper, OrderSubContentSubText, OrderSubContentCopyImageWrapper,
    OrderSubContentCopyImage, OrderSubContentSuccessText, OrderSubContentPendingText,
    OrderSubContentDeclinedText, ScrollableWrapper, AmountWrapper
} from "./components";
import { curreniesSymbols } from "../../lib/currency";
import { cardImg } from "../../page/home/cards/svg";
import { useEffect } from "react";



const ActivitiesMoreInfoModal = ({ show, close, handleOpenAlertBox, setAlertText, values: { tx: { _id: txRef, currency, amount, rate, fileCount, ecode, cardType, action, status, timeStamp, reason } } }) => {

    async function reportWalletTransaction() {

    }

    function copy() {
        navigator.clipboard.writeText(txRef);
        setAlertText({ title: '', paragraph: 'Text copied successfully', reason: 'success', sender: 'amim' });
        handleOpenAlertBox();
    }

    useEffect(() => {

    }, [])

    return (
        <BaseModal show={show} close={close}
            title={'Giftcard Trade'}
            subtitle={''}
            submitBtn={false}
            submit={() => reportWalletTransaction()}
            btnText={'Report Transaction'}
        >

            <ScrollableWrapper>
                <OrderContentHeaderWrapper>
                    <OrderContentHeaderImage src={`/icon/${cardImg[cardType]}`} />
                    <OrderContentHeaderSubTextWrapper>
                        <OrderContentHeaderText>{String(cardType).toUpperCase() || "Action"}</OrderContentHeaderText>
                        <OrderContentHeaderSubText>{currency}{` (${action})`}</OrderContentHeaderSubText>
                    </OrderContentHeaderSubTextWrapper>
                </OrderContentHeaderWrapper>

                {ecode &&
                    <OrderSubContentWrapper>
                        <OrderSubContentText>Ecode's:</OrderSubContentText>
                        <OrderSubContentSubTextWrapper>
                            <OrderSubContentSubText>{ecode}</OrderSubContentSubText>
                        </OrderSubContentSubTextWrapper>
                    </OrderSubContentWrapper>
                }

                <OrderSubContentWrapper>
                    <OrderSubContentText>Transaction reference:</OrderSubContentText>
                    <OrderSubContentSubTextWrapper>
                        <OrderSubContentSubText>{String(txRef).substring(0, 4) + '...' + String(txRef).substring(String(txRef).length - 5, String(txRef).length)}</OrderSubContentSubText>
                        <OrderSubContentCopyImageWrapper onClick={copy}>
                            <OrderSubContentCopyImage src="svg/copy.svg" />
                        </OrderSubContentCopyImageWrapper>
                    </OrderSubContentSubTextWrapper>
                </OrderSubContentWrapper>

                <AmountWrapper>
                    <OrderSubContentText>Amount:
                        <OrderSubContentSubText style={{ color: 'black' }}>{curreniesSymbols["NGN"].symbol} {amount}</OrderSubContentSubText>
                    </OrderSubContentText>
                    <OrderSubContentText>Rate:
                        <OrderSubContentSubText style={{ color: 'black' }}>{curreniesSymbols["NGN"].symbol}{rate}/{curreniesSymbols[currency].symbol}</OrderSubContentSubText>
                    </OrderSubContentText>
                </AmountWrapper>

                <OrderSubContentWrapper>
                    <OrderSubContentText>You would get:</OrderSubContentText>
                    <OrderSubContentSubTextWrapper>
                        <OrderSubContentSubText>{curreniesSymbols["NGN"].symbol} {parseFloat(parseFloat(amount) * parseFloat(fileCount) * parseFloat(rate)).toLocaleString() + '.00' || "0.00"}</OrderSubContentSubText>
                    </OrderSubContentSubTextWrapper>
                </OrderSubContentWrapper>

                <OrderSubContentWrapper>
                    <OrderSubContentText>Date:</OrderSubContentText>
                    <OrderSubContentSubTextWrapper>
                        <OrderSubContentSubText>{timeStamp}</OrderSubContentSubText>
                    </OrderSubContentSubTextWrapper>
                </OrderSubContentWrapper>

                <OrderSubContentText>Transaction Status:<br />
                    <div style={{ marginTop: '.8rem' }}>
                        {status === 'pending' && <OrderSubContentPendingText>{status}</OrderSubContentPendingText>}
                        {status === 'declined' && <OrderSubContentDeclinedText>{status}</OrderSubContentDeclinedText>}
                        {status === 'success' && <OrderSubContentSuccessText>{status}</OrderSubContentSuccessText>}

                    </div>
                </OrderSubContentText>

                {reason &&
                    <OrderSubContentWrapper>
                        <OrderSubContentText>Transaction remark:</OrderSubContentText>
                        <OrderSubContentSubTextWrapper >
                            <OrderSubContentSubText style={{ color: `${status === 'success' ? '#27AE60' : status === 'pending' ? '#F5CF48' : '#E81313'}`, fontSize: '1.2rem' }}>{reason}</OrderSubContentSubText>
                        </OrderSubContentSubTextWrapper>
                    </OrderSubContentWrapper>
                }

            </ScrollableWrapper>

        </BaseModal>
    )
}

export default ActivitiesMoreInfoModal;