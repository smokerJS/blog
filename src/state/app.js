const initialState = {
  modalView : false,
};

const TOGGLE_MODALVIEW = 'TOGGLE_MODALVIEW';
export const toggleModalView = isModalView => ({
  type : TOGGLE_MODALVIEW, isModalView
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODALVIEW:
      return { ...state, isModalView: action.isModalView };
    default:
      return state;
  }
};