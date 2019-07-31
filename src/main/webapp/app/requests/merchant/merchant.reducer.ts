import axios from 'axios';
import { ICrudGetAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IMerchant, defaultValue } from 'app/shared/model/merchant.model';

export const ACTION_TYPES = {
  FETCH_MERCHANT: 'merchant/FETCH_MERCHANT',
  CREATE_MERCHANT: 'merchant/CREATE_MERCHANT',
  UPDATE_MERCHANT: 'merchant/UPDATE_MERCHANT',
  DELETE_MERCHANT: 'merchant/DELETE_MERCHANT',
  RESET: 'merchant/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMerchant>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type MerchantState = Readonly<typeof initialState>;

// Reducer

export default (state: MerchantState = initialState, action): MerchantState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MERCHANT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_MERCHANT):
    case REQUEST(ACTION_TYPES.UPDATE_MERCHANT):
    case REQUEST(ACTION_TYPES.DELETE_MERCHANT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_MERCHANT):
    case FAILURE(ACTION_TYPES.CREATE_MERCHANT):
    case FAILURE(ACTION_TYPES.UPDATE_MERCHANT):
    case FAILURE(ACTION_TYPES.DELETE_MERCHANT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_MERCHANT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_MERCHANT):
    case SUCCESS(ACTION_TYPES.UPDATE_MERCHANT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_MERCHANT):
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

const apiUrl = 'services/merchant';
// Actions
export const createEntityMerchant: ICrudPutAction<IMerchant> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MERCHANT,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};
export const deleteEntityMerchant: ICrudDeleteAction<IMerchant> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MERCHANT,
    payload: axios.delete(requestUrl)
  });
  return result;
};
export const updateEntityMerchant: ICrudPutAction<IMerchant> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MERCHANT,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};
export const getEntityMerchant: ICrudGetAction<IMerchant> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_MERCHANT,
    payload: axios.get<IMerchant>(requestUrl)
  };
};

export const createMyEntityMerchant = (
  userid,
  merchantphoto,
  name,
  businessid,
  address,
  province,
  city,
  county,
  longitude,
  latitude,
  concession,
  buslicenseimage,
  creditcode
) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MERCHANT,
    payload: axios.post('services/merchant/api/createMerchant', {
      userid,
      merchantphoto,
      name,
      businessid,
      address,
      province,
      city,
      county,
      longitude,
      latitude,
      concession,
      buslicenseimage,
      creditcode
    })
  });
  return result;
};

export const getMyEntityMerchant: ICrudGetAction<IMerchant> = userid => {
  const requestUrl = `${apiUrl}/api/ObtainMerchantUserId/${userid}`;
  return {
    type: ACTION_TYPES.FETCH_MERCHANT,
    payload: axios.get<IMerchant>(requestUrl)
  };
};

export const findAllMerchant = (satrtPage: number, pageSize: number) => {
  const requestUrl = `${apiUrl}/api/findAllMerchant/?satrtPage=${satrtPage}&pageSize=${pageSize}`;
  return {
    payload: axios.get<IMerchant>(requestUrl)
  };
};

export const resetMerchant = () => ({
  type: ACTION_TYPES.RESET
});
