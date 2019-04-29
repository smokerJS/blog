import React from 'react';
import Modal from '@base/modal';
import { connect } from 'react-redux';
import { toggleModalView } from '@state/app';

const Alert = ({
  isModalView, dispatch, text, send = '알아쒀!',
}) => (
  <React.Fragment>
    {isModalView && (
      <Modal>
        <strong>{text}</strong>
        <div>
          <button
            onClick={() => {
              dispatch(toggleModalView(!isModalView));
            }}
          >
            {send}
          </button>
        </div>
      </Modal>
    )}
  </React.Fragment>
);

export default connect(
  state => ({ isModalView: state.app.isModalView }),
  null,
)(Alert);
