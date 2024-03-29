import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  //
  TECHS_ERROR,
  //
  SET_LOADING,
} from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(t => t.id !== action.payload),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default techReducer;
