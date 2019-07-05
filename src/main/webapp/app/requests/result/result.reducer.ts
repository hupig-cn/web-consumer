import axios from 'axios';
import { ICrudGetAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IResult, defaultValue } from 'app/shared/model/result.model';

export const ACTION_TYPES = {
  FETCH_RESULT: 'result/FETCH_RESULT',
  CREATE_RESULT: 'result/CREATE_RESULT',
  UPDATE_RESULT: 'result/UPDATE_RESULT',
  DELETE_RESULT: 'result/DELETE_RESULT',
  RESET: 'result/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IResult>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type ResultState = Readonly<typeof initialState>;

// Reducer

export default (state: ResultState = initialState, action): ResultState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_RESULT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_RESULT):
    case REQUEST(ACTION_TYPES.UPDATE_RESULT):
    case REQUEST(ACTION_TYPES.DELETE_RESULT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_RESULT):
    case FAILURE(ACTION_TYPES.CREATE_RESULT):
    case FAILURE(ACTION_TYPES.UPDATE_RESULT):
    case FAILURE(ACTION_TYPES.DELETE_RESULT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_RESULT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_RESULT):
    case SUCCESS(ACTION_TYPES.UPDATE_RESULT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_RESULT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'services/basic/api/public/test';
// Actions
export const createEntityResult: ICrudPutAction<IResult> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_RESULT,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};
export const sendCode = (phone, act) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.post('services/basic/api/public/send-code', {
      phone,
      act
    })
  });
  return result;
};

export const checkCode = (phone, act, code) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.post('services/basic/api/public/check-code', {
      phone: `${phone}`,
      act: `${act}`,
      code: `${code}`
    })
  });
  return result;
};

export const register = (login, password) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.post('services/login/api/register', {
      login: `${login}`,
      password: `${password}`
    })
  });
  return result;
};

export const deleteEntityResult: ICrudDeleteAction<IResult> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_RESULT,
    payload: axios.delete(requestUrl)
  });
  return result;
};
export const updateEntityResult: ICrudPutAction<IResult> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_RESULT,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};
export const getEntityResult: ICrudGetAction<IResult> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.get<IResult>(requestUrl)
  };
};

export const resetResult = () => ({
  type: ACTION_TYPES.RESET
});
