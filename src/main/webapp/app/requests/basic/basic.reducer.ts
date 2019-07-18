import axios from 'axios';
import { ICrudGetAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IMystring, defaultValue } from 'app/shared/model/mystring.model';

export const ACTION_TYPES = {
  FETCH_BASIC: 'basic/FETCH_BASIC',
  CREATE_BASIC: 'basic/CREATE_BASIC',
  UPDATE_BASIC: 'basic/UPDATE_BASIC',
  DELETE_BASIC: 'basic/DELETE_BASIC',
  RESET: 'basic/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMystring>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type BasicState = Readonly<typeof initialState>;

// Reducer

export default (state: BasicState = initialState, action): BasicState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_BASIC):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_BASIC):
    case REQUEST(ACTION_TYPES.UPDATE_BASIC):
    case REQUEST(ACTION_TYPES.DELETE_BASIC):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_BASIC):
    case FAILURE(ACTION_TYPES.CREATE_BASIC):
    case FAILURE(ACTION_TYPES.UPDATE_BASIC):
    case FAILURE(ACTION_TYPES.DELETE_BASIC):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_BASIC):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_BASIC):
    case SUCCESS(ACTION_TYPES.UPDATE_BASIC):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_BASIC):
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

const apiUrl = 'services/basic/api';
// Actions
export const createEntityBasic: ICrudPutAction<IMystring> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_BASIC,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};
export const deleteEntityBasic: ICrudDeleteAction<IMystring> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_BASIC,
    payload: axios.delete(requestUrl)
  });
  return result;
};
export const updateEntityBasic: ICrudPutAction<IMystring> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_BASIC,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};
export const getEntityBasic: ICrudGetAction<IMystring> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_BASIC,
    payload: axios.get<IMystring>(requestUrl)
  };
};

export const createUserByPhone = (phone: any, userid: any) => async dispatch => {
  const result = await dispatch({
    payload: axios.post(apiUrl + '/public/user/createUserByPhone', { phone, userid })
  });
  return result;
};

export const createFeedback = (name, title, content, imageurl, creator) => async dispatch => {
  const result = await dispatch({
    payload: axios.post(apiUrl + '/feedback/create-feedback', { name, title, content, imageurl, creator })
  });
  return result;
};

export const resetBasic = () => ({
  type: ACTION_TYPES.RESET
});

export const getDefaultAddress: ICrudGetAction<IMystring> = (id: string) => {
  const requestUrl = `services/basic/api/get-default-address/${id}`;
  return {
    type: ACTION_TYPES.FETCH_BASIC,
    payload: axios.get<IMystring>(requestUrl)
  };
};
