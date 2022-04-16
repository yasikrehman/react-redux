export default function textReducer(state = 0, action) {
  switch (action.type) {
    case 'addtext':
      return action.payload;
    default:
      return state;
  }
}
