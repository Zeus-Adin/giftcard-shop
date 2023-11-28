import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CloseBtn, InputContentButton, InputContentButtonText, InputContentButtonWrap, InputContentButtonWrapper, SubTitle, Title } from './components';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const ContentWrapper = styled(Box)(() => (`
    pointer-events: auto;
    animation: 150ms cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running k-dUePBQ;
    background-color: #FFFFFF;
    width: 465px;
    min-height: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2.4rem;
`))

export default function BaseModal({ show, close, title, subtitle, submitBtn, btnText, submit, children }) {
  return (
    <Modal open={show} onClose={close} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description" style={{ zIndex: '9999999999999999999' }}>
      <>
        <ContentWrapper sx={{ width: 400, flexDirection: 'column', alignItems: 'center' }}>
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
                <InputContentButtonText>{submitBtn ? <CircularProgress /> : btnText || 'Proceed'}</InputContentButtonText>
              </InputContentButton>
            </InputContentButtonWrap>
          </InputContentButtonWrapper>
          <svg width="400" style={{ position: 'absolute', bottom: '-15px', zIndex: '-1' }} height="45" viewBox="0 0 465 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 36.0527V0H465V36.0734C465 40.18 460.323 42.5356 457.024 40.091L446.779 32.5019C445.011 31.1921 442.595 31.1921 440.827 32.5019L425.583 43.7951C423.814 45.1049 421.398 45.1049 419.63 43.7951L404.386 32.5019C402.618 31.1921 400.201 31.1921 398.433 32.5019L383.194 43.7912C381.423 45.1029 379.003 45.1009 377.235 43.7863L362.073 32.5147C360.302 31.1982 357.877 31.1982 356.106 32.5147L340.95 43.7824C339.179 45.0988 336.754 45.0988 334.984 43.7824L319.827 32.5147C318.056 31.1982 315.631 31.1982 313.861 32.5147L298.704 43.7824C296.933 45.0988 294.509 45.0988 292.738 43.7824L277.581 32.5147C275.81 31.1982 273.386 31.1982 271.615 32.5147L256.458 43.7824C254.687 45.0988 252.263 45.0988 250.492 43.7824L235.335 32.5147C233.564 31.1982 231.14 31.1982 229.369 32.5147L214.212 43.7824C212.441 45.0988 210.017 45.0988 208.246 43.7824L193.089 32.5147C191.318 31.1982 188.894 31.1982 187.123 32.5147L171.966 43.7824C170.196 45.0988 167.771 45.0988 166 43.7824L150.843 32.5147C149.073 31.1982 146.648 31.1982 144.877 32.5147L129.721 43.7824C127.95 45.0988 125.525 45.0988 123.754 43.7824L108.598 32.5147C106.827 31.1982 104.402 31.1982 102.632 32.5147L87.4747 43.7824C85.7039 45.0988 83.2794 45.0988 81.5086 43.7824L66.3518 32.5147C64.5809 31.1982 62.1565 31.1982 60.3857 32.5147L45.2289 43.7824C43.458 45.0988 41.0336 45.0988 39.2628 43.7824L24.106 32.5147C22.3351 31.1982 19.9107 31.1982 18.1399 32.5147L7.98305 40.0653C4.68425 42.5177 0 40.1632 0 36.0527Z" fill="#FFFFFE"></path></svg>
        </ContentWrapper>
      </>
    </Modal>
  )
}