import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

import { StyledModal, Button } from "./styles";

const modalRoot = document.getElementById("modal-root");

type ModalProps = {
  size?: string;
  isOpen: boolean;
  id: number | string;
  title: string | null | undefined;
  onClose: () => void;
  children: React.ReactNode;
  class?: string | undefined;
}


const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, title, id, size, children } = props;
  const [fadeType, setFadeType] = useState<string>();
  const background = React.createRef();

  useEffect(() => {
    window.addEventListener("keydown", onEscKeyDown, false);
    setTimeout(() => setFadeType("in"), 0);

    return () => {
      window.removeEventListener("keydown", onEscKeyDown, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFadeType('out');
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);

  const transitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "opacity" || fadeType === "in") return;
    if (fadeType === "out") {
      onClose();
    }
  };

  const onEscKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    setFadeType("out");
    onClose();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setFadeType("out");
    onClose();
  };


  return (
    ReactDom.createPortal(
      <StyledModal
        id={id as string}
        className={`wrapper ${props.class ? props.class : ''}`}
        role="dialog"
        modalSize={size}
        onTransitionEnd={transitionEnd}
        fadeType={fadeType}
      >
        <div></div>
        <div className="box-dialog">
          <div className="box-header">
            <h4 className="box-title">{title}</h4>
            <Button onClick={handleClick} className="close">
              X
            </Button>
          </div>
          <div className="box-content">{children}</div>
        </div>
        <div
          className={`background`}
          onMouseDown={handleClick}
          ref={background as React.RefObject<HTMLDivElement>}
        />
      </StyledModal>,
      modalRoot as HTMLElement
    )

  );

}
export default Modal;