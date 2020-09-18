import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

import { StyledModal, Button } from "./styles";

const modalRoot = document.getElementById("modal-root");

interface Props {
  children: () => {};
  isOpen: boolean;
  onClose: () => {};
  id: number;
  size: number;
  title: string;

}


const Modal: React.FC<Props> = ({isOpen, onClose, title, id, size, children}) => {

  const [fadeType, setFadeType] = useState<string|null>(null);
  const background = React.createRef<React.RefObject<HTMLDivElement | null>>();

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

  const transitionEnd = e => {
    if (e.propertyName !== "opacity" || fadeType === "in") return;
    if (fadeType === "out") {
      onClose();
    }
  };

  const onEscKeyDown = e => {
    if (e.key !== "Escape") return;
    setFadeType("out");
    onClose();
  };

  const handleClick = e => {
    e.preventDefault();
    setFadeType("out");
    onClose();
  };


  return (
    ReactDom.createPortal(
      <StyledModal
        id={id}
        className={`wrapper ${props.class}`}
        role="dialog"
        modalSize={size}
        onTransitionEnd={transitionEnd}
        fadeType={fadeType}
      >
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
          ref={background}
        />
      </StyledModal>,
      modalRoot as HTMLElement
    )

  );

}
export default Modal;