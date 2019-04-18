import React from "react"

const ModalAlert = ({text,show,toggleFunction,send = '알아쒀!',close}) => (
    show &&
    (
      <article className="modal-alert">
        <section>
          <strong>{text}</strong>
          <div>
            <button onClick={()=>{toggleFunction()}}>{send}</button>
          </div>
        </section>
      </article>
    )
);

export default ModalAlert;
