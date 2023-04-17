const initialState = {
  Login: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        Login: true,
      };
    case "LOGOUT":
      return {
        ...state,
        Login: false,
      };

    default:
      return state;
  }
}
