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
import { IBusiness, defaultValue } from 'app/shared/model/business.model';

export const ACTION_TYPES = {
  FETCH_BUSINESS_LIST: 'business/FETCH_BUSINESS_LIST',
  FETCH_BUSINESS: 'business/FETCH_BUSINESS',
  CREATE_BUSINESS: 'business/CREATE_BUSINESS',
  UPDATE_BUSINESS: 'business/UPDATE_BUSINESS',
  DELETE_BUSINESS: 'business/DELETE_BUSINESS',
  RESET: 'business/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IBusiness>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type BusinessState = Readonly<typeof initialState>;

// Reducer

export default (state: BusinessState = initialState, action): BusinessState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_BUSINESS_LIST):
    case REQUEST(ACTION_TYPES.FETCH_BUSINESS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_BUSINESS):
    case REQUEST(ACTION_TYPES.UPDATE_BUSINESS):
    case REQUEST(ACTION_TYPES.DELETE_BUSINESS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_BUSINESS_LIST):
    case FAILURE(ACTION_TYPES.FETCH_BUSINESS):
    case FAILURE(ACTION_TYPES.CREATE_BUSINESS):
    case FAILURE(ACTION_TYPES.UPDATE_BUSINESS):
    case FAILURE(ACTION_TYPES.DELETE_BUSINESS):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_BUSINESS_LIST):
      const links = parseHeaderForLinks(action.payload.headers.link);

      return {
        ...state,
        loading: false,
        links,
        entities: loadMoreDataWhenScrolled(state.entities, action.payload.data, links),
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    case SUCCESS(ACTION_TYPES.FETCH_BUSINESS):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_BUSINESS):
    case SUCCESS(ACTION_TYPES.UPDATE_BUSINESS):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_BUSINESS):
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

const apiUrl = 'services/merchant/api/businesses';

// Actions

export const getEntities: ICrudGetAllAction<IBusiness> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_BUSINESS_LIST,
    payload: axios.get<IBusiness>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getBusinessEntities: ICrudGetAllAction<IBusiness> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_BUSINESS_LIST,
    payload: axios.get<IBusiness>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<IBusiness> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_BUSINESS,
    payload: axios.get<IBusiness>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IBusiness> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_BUSINESS,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const updateEntity: ICrudPutAction<IBusiness> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_BUSINESS,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IBusiness> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_BUSINESS,
    payload: axios.delete(requestUrl)
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
