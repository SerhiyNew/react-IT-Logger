import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  //
  TECHS_ERROR,
  //
  SET_LOADING,
} from './types';

// Get tech from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('./techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};
// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
