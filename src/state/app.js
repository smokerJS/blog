const initialState = {
  isModalView: false,
  location: { pathname: '/' },
};

const TOGGLE_MODALVIEW = 'TOGGLE_MODALVIEW';
export const toggleModalView = isModalView => ({
  type: TOGGLE_MODALVIEW,
  isModalView,
});
const ONLOAD_LOCATION = 'ONLOAD_LOCATION';
export const onLoadLocation = location => ({
  type: ONLOAD_LOCATION,
  location,
});

export default (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_MODALVIEW:
    return { ...state, isModalView: action.isModalView };
  case ONLOAD_LOCATION:
    return { ...state, location: action.location };
  default:
    return state;
  }
};
