import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// Get logs from server  one variant

// export const getLogs = () => {
//   return dispatch => {
//     setLoading();

//     const res = await fetch('./logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

// Get logs from server  another variant

export const getLogs = () => async dispatch => {
  try {
    // setLoading();

    const res = await fetch('./logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.res.data,
    });
  }
};

export const getLoading = () => {
  // set loading to true
  return {
    type: SET_LOADING,
  };
};
