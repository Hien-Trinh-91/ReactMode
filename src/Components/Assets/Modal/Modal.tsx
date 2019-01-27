import * as React from 'react';
import './Modal.scss';

const Modal = (props: any) => {
    console.log(props);
    return (
        <div className="Modal" style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? 1 : 0
        }}>
            This is modal
        </div>
    )
}

export default Modal;