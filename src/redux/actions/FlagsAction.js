import axios from "axios";

export const AllFlags = () => (dispatch) => {
  axios.get("https://apistore.info/flags?type=json").then((result) => {
    dispatch({
      type: "FETCH_ALL_FLAGS",
      payload: result.data,
    });
  });
};
export const SingleFlag = () => (dispatch) => {
  axios.get("https://apistore.info/flags?type=json").then((result) => {
    dispatch({
      type: "FETCH_SINGLE_FLAG",
      payload: result.data,
    });
  });
};
