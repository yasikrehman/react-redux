let defaultState = {
  count: 0,
};

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      var state = { count: state.count + 1 };
      return state;
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;
