import styled from "styled-components";

import { backgroundColor, textColor, themeButton } from '../../common/theme';

interface ModalProps {
  modalSize: string;
}


export const StyledModal = styled.div<ModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity linear 0.15s;
  z-index: 2000;
  overflow-y: hidden;
  width: ${props => {
    switch (props.modalSize) {
      case "lg":
        return "800";
      default:
        return "480";
    }
  }}px;
  margin: 40px auto;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
  .background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    z-index: 1050;
    width: 100%;
    height: 475px;
    border-radius: 10px;
    background-color: ${ () => backgroundColor};
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    .box-content {
      padding:  0 24px 0 24px; 
      overflow-y: hidden;
      height: 400px;
      overflow-y: scroll;
      overflow: -moz-scrollbars-vertical; 
      margin-right: 5px;
      color: ${ () => textColor};
    }
    .box-header {
      height: 48px;
      padding: 0px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${ () => textColor};
      .box-title {
        font-size: 24px;
        font-weight: 400;
        margin: 0 0 0 0;
      }
      .x-close {
        font-size: 35px;
        line-height: 35px;
        font-weight: 400;
        text-shadow: none;
        color: ${ () => textColor};
        border-width: 0px;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
      }
    }
    .box-body {
      font-size: 14px;
      padding: 0px;
      width: auto;
      height: auto;
    }
    .box-footer {
      height: 48px;
      padding: 0px 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-top: 1px solid #c7c7c7;
    }
  }
`;

export const Button = styled.button`
  font: 400 24px system-ui;
  border-width: 0px;
  background-color: ${ () => themeButton};
  color: ${ () => textColor};
`;

