import axios from 'axios';
import { ICrudGetAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IMystring, defaultValue } from 'app/shared/model/mystring.model';

export const ACTION_TYPES = {
  FETCH_SHOPMALL: 'shopmall/FETCH_SHOPMALL',
  CREATE_SHOPMALL: 'shopmall/CREATE_SHOPMALL',
  UPDATE_SHOPMALL: 'shopmall/UPDATE_SHOPMALL',
  DELETE_SHOPMALL: 'shopmall/DELETE_SHOPMALL',
  RESET: 'shopmall/RESET'
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

export type ShopmallState = Readonly<typeof initialState>;

// Reducer

export default (state: ShopmallState = initialState, action): ShopmallState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_SHOPMALL):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_SHOPMALL):
    case REQUEST(ACTION_TYPES.UPDATE_SHOPMALL):
    case REQUEST(ACTION_TYPES.DELETE_SHOPMALL):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_SHOPMALL):
    case FAILURE(ACTION_TYPES.CREATE_SHOPMALL):
    case FAILURE(ACTION_TYPES.UPDATE_SHOPMALL):
    case FAILURE(ACTION_TYPES.DELETE_SHOPMALL):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_SHOPMALL):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_SHOPMALL):
    case SUCCESS(ACTION_TYPES.UPDATE_SHOPMALL):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_SHOPMALL):
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

const apiUrl = 'services/shopmall/api/test';
// Actions
export const createEntityShopmall: ICrudPutAction<IMystring> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_SHOPMALL,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};
export const deleteEntityShopmall: ICrudDeleteAction<IMystring> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_SHOPMALL,
    payload: axios.delete(requestUrl)
  });
  return result;
};
export const updateEntityShopmall: ICrudPutAction<IMystring> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_SHOPMALL,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};
export const getEntityShopmall: ICrudGetAction<IMystring> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_SHOPMALL,
    payload: axios.get<IMystring>(requestUrl)
  };
};

export const resetShopmall = () => ({
  type: ACTION_TYPES.RESET
});
