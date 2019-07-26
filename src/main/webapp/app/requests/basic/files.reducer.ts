import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IFiles, defaultValue } from 'app/shared/model/files.model';

export const ACTION_TYPES = {
  FETCH_FILES_LIST: 'files/FETCH_FILES_LIST',
  FETCH_FILES: 'files/FETCH_FILES',
  CREATE_FILES: 'files/CREATE_FILES',
  UPDATE_FILES: 'files/UPDATE_FILES',
  DELETE_FILES: 'files/DELETE_FILES',
  SET_BLOB: 'files/SET_BLOB',
  RESET: 'files/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IFiles>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type FilesState = Readonly<typeof initialState>;

// Reducer

export default (state: FilesState = initialState, action): FilesState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_FILES_LIST):
    case REQUEST(ACTION_TYPES.FETCH_FILES):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_FILES):
    case REQUEST(ACTION_TYPES.UPDATE_FILES):
    case REQUEST(ACTION_TYPES.DELETE_FILES):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_FILES_LIST):
    case FAILURE(ACTION_TYPES.FETCH_FILES):
    case FAILURE(ACTION_TYPES.CREATE_FILES):
    case FAILURE(ACTION_TYPES.UPDATE_FILES):
    case FAILURE(ACTION_TYPES.DELETE_FILES):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_FILES_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_FILES):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_FILES):
    case SUCCESS(ACTION_TYPES.UPDATE_FILES):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_FILES):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.SET_BLOB:
      const { name, data, contentType } = action.payload;
      return {
        ...state,
        entity: {
          ...state.entity,
          [name]: data,
          [name + 'ContentType']: contentType
        }
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/files';

// Actions

export const getEntities: ICrudGetAllAction<IFiles> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_FILES_LIST,
  payload: axios.get<IFiles>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IFiles> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_FILES,
    payload: axios.get<IFiles>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IFiles> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_FILES,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IFiles> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_FILES,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IFiles> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_FILES,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const createFile = (userid, size, file, fileContentType) => async dispatch => {
  const result = await dispatch({
    payload: axios.post('services/basic/api/myfilesadd', { userid, size, file, fileContentType })
  });
  return result.value.data;
};

export const getMyImg: ICrudGetAction<IFiles> = (id: string) => {
  const requestUrl = `services/basic/api/myfiles/${id}`;
  return {
    type: ACTION_TYPES.FETCH_FILES,
    payload: axios.get<IFiles>(requestUrl)
  };
};
export const getMyImgs: ICrudGetAction<IFiles> = (ids: any) => {
  const requestUrl = `services/basic/api/public/myfiles-list`;
  return {
    type: ACTION_TYPES.FETCH_FILES_LIST,
    payload: axios.post<IFiles>(requestUrl, { ids })
  };
};

export const setBlob = (name, data, contentType?) => ({
  type: ACTION_TYPES.SET_BLOB,
  payload: {
    name,
    data,
    contentType
  }
});

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
