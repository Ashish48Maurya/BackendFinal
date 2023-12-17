// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>This is your modal content.</p>
      </div>
    </div>
  );
};

export default Modal;
