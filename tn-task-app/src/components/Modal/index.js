import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

function Modal({ children, onComplete, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="btn" onClick={onComplete}>
            Complete
          </button>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ModalPortal({ children, onClose, onComplete }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose} onComplete={onComplete}>
      {children}
    </Modal>,
    document.getElementById('root'),
  );
}
