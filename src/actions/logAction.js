import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
} from './types';

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
    setLoading();

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

// Add new log

export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch('./logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.res.data,
    });
  }
};

// Delete log from server

export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    await fetch(`./logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.res.data,
    });
  }
};

export const setLoading = () => {
  // set loading to true
  return {
    type: SET_LOADING,
  };
};
