import axios from "axios";
import {
  FAILURE_REQUEST,
  GET_SUCCESS_REQUEST,
  LOADING_REQUEST,
  PATCH_SUCCESS_REQUEST,
  POST_SUCCESS_REQUEST,
} from "./actionTypes";

const apiUrl =  import.meta.env.VITE_API_URL;
console.log(apiUrl);
const LoadingAction = () => {
  return { type: LOADING_REQUEST };
};
const postSuccessAction = (payload) => {
  return { type: POST_SUCCESS_REQUEST, payload };
};
const FailureAction = () => {
  return { type: FAILURE_REQUEST };
};

//get
const getSuccessAction = (payload) => {
  return { type: GET_SUCCESS_REQUEST, payload };
};
//patch
const patchSuccessAction = (payload) => {
  return { type: PATCH_SUCCESS_REQUEST, payload };
};
//-----------------------------------------------------------------
// post api request
export const addData = (payload) => (dispatch) => {
  dispatch(LoadingAction());
  axios
    .post("", payload)
    .then((res) => dispatch(postSuccessAction(res.data)))
    .catch(() => dispatch(FailureAction()));
};

// patch api request
export const editData = (payloadObj, id) => (dispatch) => {
  dispatch(LoadingAction());
  return axios
    .patch(``, payloadObj)
    .then((res) => dispatch(patchSuccessAction(res.data)))
    .catch(() => dispatch(FailureAction()));
};

// get api request
export const getData =(paramObj)=> (dispatch) => {
  dispatch(LoadingAction());
  
  axios
    .get(`${apiUrl}/products/getProducts`,{params:paramObj})
    .then((res) => {
        console.log(res.data.products,"dattt");
      dispatch(getSuccessAction(res.data.products));
    })
    .catch(() => dispatch(FailureAction()));
};
