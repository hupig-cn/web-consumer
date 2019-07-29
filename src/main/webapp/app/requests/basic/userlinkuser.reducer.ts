import axios from 'axios';
import {
  parseHeaderForLinks,
  loadMoreDataWhenScrolled,
  ICrudGetAction,
  ICrudGetAllAction,
  ICrudPutAction,
  ICrudDeleteAction
} from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IUserlinkuser, defaultValue } from 'app/shared/model/userlinkuser.model';

export const ACTION_TYPES = {
  FETCH_USERLINKUSER_LIST: 'userlinkuser/FETCH_USERLINKUSER_LIST',
  FETCH_USERLINKUSER: 'userlinkuser/FETCH_USERLINKUSER',
  CREATE_USERLINKUSER: 'userlinkuser/CREATE_USERLINKUSER',
  UPDATE_USERLINKUSER: 'userlinkuser/UPDATE_USERLINKUSER',
  DELETE_USERLINKUSER: 'userlinkuser/DELETE_USERLINKUSER',
  RESET: 'userlinkuser/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IUserlinkuser>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type UserlinkuserState = Readonly<typeof initialState>;

// Reducer

export default (state: UserlinkuserState = initialState, action): UserlinkuserState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_USERLINKUSER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_USERLINKUSER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_USERLINKUSER):
    case REQUEST(ACTION_TYPES.UPDATE_USERLINKUSER):
    case REQUEST(ACTION_TYPES.DELETE_USERLINKUSER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_USERLINKUSER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_USERLINKUSER):
    case FAILURE(ACTION_TYPES.CREATE_USERLINKUSER):
    case FAILURE(ACTION_TYPES.UPDATE_USERLINKUSER):
    case FAILURE(ACTION_TYPES.DELETE_USERLINKUSER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_USERLINKUSER_LIST):
      const links = parseHeaderForLinks(action.payload.headers.link);
      return {
        ...state,
        links,
        loading: false,
        totalItems: action.payload.headers['x-total-count'],
        entities: loadMoreDataWhenScrolled(state.entities, action.payload.data, links)
      };
    case SUCCESS(ACTION_TYPES.FETCH_USERLINKUSER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_USERLINKUSER):
    case SUCCESS(ACTION_TYPES.UPDATE_USERLINKUSER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_USERLINKUSER):
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

const apiUrl = 'basic/api/userlinkusers';

// Actions

export const getEntities: ICrudGetAllAction<IUserlinkuser> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_USERLINKUSER_LIST,
    payload: axios.get<IUserlinkuser>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<IUserlinkuser> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_USERLINKUSER,
    payload: axios.get<IUserlinkuser>(requestUrl)
  };
};

export const getMyPartner = userid => async dispatch => {
  const requestUrl = `services/basic/api/getMyPartner/${userid}`;
  const result = await dispatch({
    payload: axios.get<IUserlinkuser>(requestUrl)
  });
  return result;
};

export const createEntity: ICrudPutAction<IUserlinkuser> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_USERLINKUSER,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const updateEntity: ICrudPutAction<IUserlinkuser> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_USERLINKUSER,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IUserlinkuser> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_USERLINKUSER,
    payload: axios.delete(requestUrl)
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
