import axios from "axios";
import { apiCallBegan, apiCallSuccess, apicallFailed } from "../api";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) return next(action);

  next(action);
  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      baseURL: "http://localhost:3003/api",
      url,
      method,
      data,
    });

    dispatch(apiCallSuccess(response.data));
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch(apicallFailed(error));
    dispatch({ type: onError, payload: error });
  }
};

export default api;
