import axios from 'axios';
import { ICrudGetAllAction } from 'react-jhipster';

import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ICitys, defaultValue } from 'app/shared/model/citys.model';

export const ACTION_TYPES = {
  FETCH_CITYS_LIST: 'citys/FETCH_CITYS_LIST',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICitys>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type CitysState = Readonly<typeof initialState>;

// Reducer

export default (state: CitysState = initialState, action): CitysState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CITYS_LIST):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case FAILURE(ACTION_TYPES.FETCH_CITYS_LIST):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_CITYS_LIST):
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

export const getNextAreaPnameCity: ICrudGetAllAction<ICitys> = province => {
  const requestUrl = `${apiUrl}/get-next-area-pname/${province}`;
  return {
    type: ACTION_TYPES.FETCH_CITYS_LIST,
    payload: axios.get<ICitys>(`${requestUrl}?cacheBuster=${new Date().getTime()}`)
  };
};
