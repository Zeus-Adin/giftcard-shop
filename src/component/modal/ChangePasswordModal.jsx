import { useEffect, useRef, useState } from "react";
import BaseModal from "./baseModal";
import { Alert } from "@mui/material";
import { user } from '../../services/user';
import { ForgotPasswordContent, ForgotPasswordContentWrapper, ForgotPasswordInputBox, ForgotPasswordInputsContents, ForgotPasswordInputsLabel, ForgotPasswordInputsWrap, ForgotPasswordInputsWrapper, ForgotPasswordShowBtnWrapper } from "./components";

const ChangePasswordModal = ({ show, close, session, openAlert, setAlertText }) => {
    const inputsRef = [useRef(null), useRef(null), useRef(null)];

    const [submitBtn, setSubmitBtn] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmnewPassword, setConfirmNewPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState({ label: 'This modal is for password update', severity: 'info' });

    function handleClose() {
        setOldPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        setSubmitBtn(false);
        close()
    }

    async function updatePassword() {
        setSubmitBtn(true);
        const { _id: userId, username } = session;
        const { updatePAsswordState, message } = await user.updateTxPin(userId, username, oldPassword, newPassword);

        if (updatePAsswordState) {
            setAlertText({ title: 'Success', paragraph: message, reason: 'success', sender: 'updatePin' })
            openAlert();
            handleClose();
        } else {
            setAlertText({ title: 'Error', paragraph: message, reason: 'error', sender: 'updatePin' })
            openAlert();
            setSubmitBtn(false);
        }

    }

    function handleTextChange(e) {
        const { name, value } = e.target;
        if (name === 'oldpassword') setOldPassword(value);
        if (name === 'newpassword') setNewPassword(value);
        if (name === 'confirmpassword') setConfirmNewPassword(value);
    }

    function handleTextBoxClick(i) {
        inputsRef[i].current.type = 'password';

    }

    function handleShowPassword(i) {
        if (inputsRef[i].current.type === 'password') {
            inputsRef[i].current.type = 'text';
        } else {
            inputsRef[i].current.type = 'password';
        }
    }

    const inputBoxs = [{ name: 'oldpassword', label: 'Enter your current password' }, { name: 'newpassword', label: 'New Password' }, { name: 'confirmpassword', label: 'Confirm Password' }];
    return (
        <BaseModal show={show} close={handleClose}
            title={'Reset Password'}
            subtitle={'Enter Your Password'}
            submitBtn={submitBtn}
            submit={updatePassword}
            btnText={'Update Password'}
        >
            <ForgotPasswordContentWrapper>
                <ForgotPasswordContent>
                    <ForgotPasswordInputsWrapper>
                        <Alert style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }} severity={errorMsg.severity}>{errorMsg.label}</Alert>

                        {inputBoxs.map(({ name, label }, i) => (
                            <ForgotPasswordInputsWrap key={i}>
                                <ForgotPasswordInputsContents>
                                    <ForgotPasswordInputsLabel>{label}</ForgotPasswordInputsLabel>
                                    <ForgotPasswordInputBox onClick={() => handleTextBoxClick(i)} onChange={handleTextChange} ref={inputsRef[i]} name={name} type="password" placeholder="********" />
                                </ForgotPasswordInputsContents>
                                <ForgotPasswordShowBtnWrapper onClick={(e) => handleShowPassword(i)}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="#7165E3" height="22" width="22" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(113, 101, 227)' }}>
                                        <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z">
                                        </path>
                                    </svg>
                                </ForgotPasswordShowBtnWrapper>
                            </ForgotPasswordInputsWrap>
                        ))}

                        <a href="/forgot-password" style={{ color: '#7165E3', textDecoration: 'underline' }}>Forgot Password</a>
                    </ForgotPasswordInputsWrapper>
                </ForgotPasswordContent>
            </ForgotPasswordContentWrapper>

        </BaseModal >
    )
}


export default ChangePasswordModal;