import axios from 'axios';
import { ICrudGetAllAction } from 'react-jhipster';

import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IProvinces, defaultValue } from 'app/shared/model/provinces.model';

export const ACTION_TYPES = {
  FETCH_PROVINCES_LIST: 'provinces/FETCH_PROVINCES_LIST',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IProvinces>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type ProvincesState = Readonly<typeof initialState>;

// Reducer

export default (state: ProvincesState = initialState, action): ProvincesState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PROVINCES_LIST):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case FAILURE(ACTION_TYPES.FETCH_PROVINCES_LIST):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_PROVINCES_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    default:
      return state;
  }
};

const apiUrl = 'services/basic/api';

export const getNextAreaPnameProvince: ICrudGetAllAction<IProvinces> = () => {
  const pname = "中国";
  const requestUrl = `${apiUrl}/get-next-area-pname/${pname}`;
  return {
    type: ACTION_TYPES.FETCH_PROVINCES_LIST,
    payload: axios.get<IProvinces>(`${requestUrl}?cacheBuster=${new Date().getTime()}`)
  };
};
