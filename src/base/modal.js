import React from "react";
import { connect } from "react-redux";
import { toggleModalView } from "@state/app";

const Modal = ({children, isModalView, dispatch}) => (
  <article className="modal-area">
    <div className="modal-background" onClick={()=>{dispatch(toggleModalView(!isModalView))}}></div>
    <section>{children}</section>
  </article>
);

export default connect(state => ({isModalView: state.app.isModalView}),null)(Modal);
