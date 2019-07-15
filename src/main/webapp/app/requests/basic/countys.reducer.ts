import axios from 'axios';
import { ICrudGetAllAction } from 'react-jhipster';

import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ICountys, defaultValue } from 'app/shared/model/countys.model';

export const ACTION_TYPES = {
  FETCH_COUNTYS_LIST: 'countys/FETCH_COUNTYS_LIST'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICountys>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type CountysState = Readonly<typeof initialState>;

// Reducer

export default (state: CountysState = initialState, action): CountysState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COUNTYS_LIST):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COUNTYS_LIST):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COUNTYS_LIST):
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

export const getNextAreaPnameCounty: ICrudGetAllAction<ICountys> = city => {
  const requestUrl = `${apiUrl}/get-next-area-pname/${city}`;
  return {
    type: ACTION_TYPES.FETCH_COUNTYS_LIST,
    payload: axios.get<ICountys>(`${requestUrl}?cacheBuster=${new Date().getTime()}`)
  };
};
