import React from "react"

const Modal = ({children, toggleFunction}) => (
  <article className="modal-area">
    <div className="modal-background" onClick={()=>{toggleFunction()}}></div>
    <section>{children}</section>
  </article>
);

export default Modal;
