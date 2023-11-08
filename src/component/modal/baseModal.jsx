import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CloseBtn, InputContentBox, InputContentButton, InputContentButtonText, InputContentButtonWrap, InputContentButtonWrapper, SubTitle, Title } from './components';
import { CircularProgress } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '2rem 1rem',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function BaseModal({ show, close, title, subtitle, submitBtn, submit, children }) {
  return (
    <Modal
      open={show}
      onClose={close}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CloseBtn onClick={close} />
        {title && <Title>{title}</Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        {children}
        <InputContentButtonWrapper>
          <InputContentButtonWrap>
            <InputContentButton disabled={submitBtn} onClick={submit}>
              <svg width="239" height="68" viewBox="0 0 239 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 33.6444C0 15.0631 15.0631 0 33.6444 0H207.171C224.749 0 239 14.2505 239 31.8295V31.8295C239 49.1489 225.152 63.2897 207.836 63.652L34.3481 67.2814C15.4955 67.6758 0 52.5011 0 33.6444V33.6444Z" fill="#F5CF48">
                </path>
              </svg>
              <InputContentButtonText>{submitBtn ? <CircularProgress /> : 'Proceed'}</InputContentButtonText>
            </InputContentButton>
          </InputContentButtonWrap>
        </InputContentButtonWrapper>
      </Box>
    </Modal>
  )
}