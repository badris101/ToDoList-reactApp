import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedTask}
        onRequestClose={props.handleClose}
        contentLabel="Selected Task"
        closeTimeoutMS={200}
        className="modal"
    >
        <h1 className="modal__title">Selected Task</h1>
        {props.selectedTask && <p className="modal__body">{props.selectedTask}</p>}
        <button className="modal__btn" onClick={props.handleClose}>okey</button>
    </Modal>
);

export default OptionModal;