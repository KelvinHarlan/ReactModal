import React, { useState } from 'react';
import './modal.css';

function Modal (){
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Abrir Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
          <div className='btnModal'>
            <button onClick={toggleModal}>X</button>
          </div>

            <h3>Sou um modal ^_^ </h3>

          
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
