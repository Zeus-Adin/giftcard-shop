import { useEffect, useState } from "react";
import BaseModal from "./baseModal";
import { AccountText, BankSelect, BankSelectImage, BankSelectPointer, BankSelectText, InputContent, InputContentBox, InputContentLabel, InputContentWrap, InputWrap, InputWrapper } from "./components";
import { getAccounts, getBanks, regBankInfo, validateBankAccount } from "../../services/bankhandlers";
import { Menu, MenuItem } from "@mui/material";
import Cookies from "js-cookie";

const appOrigin = window.location.origin;

const BankModal = ({ show, close, redirect, openAlert, setAlertText }) => {
    const [banks, setBanks] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showBankdManu, setShowBankMenu] = useState(false);

    const [selectedBank, setSelectedBank] = useState({ name: '', code: '' });
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccuntName] = useState('');

    const [submitBtn, setSubmitBtn] = useState(true);

    const maxLength = 10;

    function selectBank(bank_name, bank_code) {
        setSelectedBank({ name: bank_name, code: bank_code });
        closeBanks();
    }

    function handleTextChange(e) {
        const { value } = e.target;
        if (value.length <= maxLength) {
            setAccountNumber(value);
        }
    }


    async function init() {
        const bank = await getBanks();

        if (bank) setBanks(bank);
    }

    function showBanks(e) {
        setAnchorEl(e.currentTarget);
        setShowBankMenu(true);
    }
    function closeBanks() {
        setAnchorEl(null);
        setShowBankMenu(false);
    }

    async function validateAccount() {
        const res = await validateBankAccount(accountNumber, selectedBank.code);
        if (res.length === 0) return
        if (res.account_name) setAccuntName(res.account_name);
        setAccuntName(res.account_name);
        setSubmitBtn(false);
    }

    async function addAccounts() {
        let session = Cookies.get(appOrigin);
        if (!session) redirect('/login')
        session = JSON.parse(session)
        const isAccountRegistered = await getAccounts(session._id, session.username);
        if (isAccountRegistered.accounts.length > 0) {
            for (let i = 0; i < isAccountRegistered.accounts.length; i++) {
                if (isAccountRegistered.accounts[i].account_number === accountNumber) {
                    setAlertText({ title: 'Error', paragraph: 'This account is already added!', reason: 'error', sender: 'bankmodal' });
                    openAlert()
                    return null
                }
            }
        }
        const res = await regBankInfo({
            id: session._id,
            username: session.username,
            name: selectedBank.name,
            code: selectedBank.code,
            account_number: accountNumber,
            account_name: accountName
        });
        console.log(res)
        if (res.bankReg) {
            setAlertText({ title: 'Success', paragraph: res.message, reason: 'success', sender: 'bankmodal' });
            openAlert()
            close();
        } else {
            setAlertText({ title: 'Error', paragraph: res.message, reason: 'error', sender: 'bankmodal' });
            openAlert()
        }
    }



    useEffect(() => {
        init();
    }, [])

    useEffect(() => {
        if (accountNumber.length === 10) validateAccount();
    }, [accountNumber])

    return (
        <BaseModal show={show} close={close}
            title={'Add Bank Account'}
            subtitle={'This would be added to your list of bank accounts to process withdrawals'}
            submitBtn={submitBtn}
            submit={addAccounts}
            btnText={'Add Account'}

        >
            <InputWrapper>
                <BankSelect onClick={showBanks}>
                    <BankSelectText>{selectedBank.name || 'Select Bank'}</BankSelectText>
                    <BankSelectPointer>
                        <BankSelectImage src="/svg/chevron-down.svg" />
                    </BankSelectPointer>
                </BankSelect>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={showBankdManu}
                    onClose={closeBanks}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {banks && banks.map(({ name, code }, i) => (
                        <MenuItem onClick={() => selectBank(name, code)} key={i}>{name}</MenuItem>
                    ))

                    }

                </Menu>

                <InputWrap>
                    <InputContent>
                        <InputContentWrap>
                            <InputContentLabel>Account Number</InputContentLabel>
                            <InputContentBox value={accountNumber} onChange={handleTextChange} placeholder="e.g 0000 0000 0000" />
                        </InputContentWrap>
                    </InputContent>

                    <AccountText>{accountName}</AccountText>
                </InputWrap>
            </InputWrapper>
        </BaseModal>
    )
}

export default BankModal;