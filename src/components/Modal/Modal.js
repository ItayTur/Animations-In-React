import React from 'react';

import './Modal.css';

const modal = ({ isModalOpen, closed }) => {
    const cssClasses = ['Modal', isModalOpen === 'entering' 
    ? 'ModalOpen' 
    : isModalOpen === 'exiting' ? 'ModalClosed' : null ];
    return (
    <div className={cssClasses.join(' ')}>
        <h1>A Modal</h1>
        <button className="Button" onClick={closed}>Dismiss</button>
    </div>)
};

export default modal;