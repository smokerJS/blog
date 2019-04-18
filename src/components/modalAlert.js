import React from "react"

const ModalAlert = ({text,show,toggleFunction}) => (
    show &&
    (
      <article className="modal-alert">
        <section>
          <strong>{text}</strong>
          <div>
            <button onClick={()=>{toggleFunction()}}>알아쪙!</button>
          </div>
        </section>
      </article>
    )
);

export default ModalAlert;
