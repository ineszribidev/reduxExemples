const initialState = {
  flags: [],
  flag: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALL_FLAGS":
      return {
        ...state,
        flags: action.payload,
      };
    case "FETCH_SINGLE_FLAGS":
      return {
        ...state,
        flag: action.payload,
      };
    default:
      return state;
  }
}
