import React from 'react';
import Transition from 'react-transition-group/Transition'

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = ({ isModalOpen, closed }) => {
    return (
        <Transition
        in={isModalOpen}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit>
            {state => {
                const cssClasses = ['Modal', state === 'entering'
                    ? 'ModalOpen'
                    : state === 'exiting' ? 'ModalClosed' : null];
                return (
                    <div className={cssClasses.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={closed}>Dismiss</button>
                    </div>
                )
            }}
        </Transition>
    )
};

export default modal;