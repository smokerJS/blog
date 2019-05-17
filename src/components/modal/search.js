import React from 'react';
import Modal from '@base/modal';
import { connect } from 'react-redux';
import { toggleModalView } from '@state/app';

function Search({ isModalView, dispatch, search }) {
  const [query, setQuery] = React.useState('');

  const onChangeQueryHandler = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = () => {
    dispatch(toggleModalView(!isModalView));
    search(query);
  };

  const onEnterHandler = (e) => {
    e.keyCode === 13 && onSubmitHandler();
  };

  return (
    <React.Fragment>
      {isModalView && (
        <Modal>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              onChangeQueryHandler(e);
            }}
            onKeyDown={(e) => {
              onEnterHandler(e);
            }}
            placeholder="어차피 찾는거 안나옴ㅋ"
          />
          <div>
            <button
              onClick={() => {
                onSubmitHandler();
              }}
            >
              검색
            </button>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
}

export default connect(
  state => ({ isModalView: state.app.isModalView }),
  null,
)(Search);
