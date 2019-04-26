import React from "react";
import Modal from "@base/modal";

const Alert = ({text,show,toggleFunction,send = '알아쒀!'}) => (
    show &&
    (
      <Modal toggleFunction={toggleFunction}>
        <strong>{text}</strong>
        <div>
          <button onClick={()=>{toggleFunction()}}>{send}</button>
        </div>
      </Modal>
    )
);

export default Alert;
