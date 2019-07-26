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

const apiUrl = 'services/basic/api';
// Actions
export const createEntityResult: ICrudPutAction<IResult> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_RESULT,
    payload: axios.post(apiUrl, cleanEntity(entity))
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

export const getOrderInfo = (userId: any, id: any, ids: any, number: any) => {
  const requestUrl = `services/shopmall/api/weisen/commodity/get-order-info`;
  return {
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.post(requestUrl, {
      userId,
      id,
      ids,
      number
    })
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

export const resetResult = () => ({
  type: ACTION_TYPES.RESET
});

export const getProducts = (pageNum: any, pageSize: any) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.post('services/shopmall/api/weisen/commodity/findAllByTime', { pageNum, pageSize })
  });
  return result;
};
// 余额支付
export const yuePay = (orderid: any, password: any, concession: any, rebate: any) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.post('services/basic/api/pay/BalencePayment', { orderid, password, concession, rebate })
  });
  return result;
};
// 积分支付
export const integralPay = (orderId: any, passWord: any, integral: any) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.post('services/basic/api/pay/IntegralPayment', { orderId, passWord, integral })
  });
  return result;
};
// 支付宝支付
export const AliPay = orderId => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.get('services/basic/api/payOrder/' + `${orderId}`)
  });
  return result;
};
// 获取支付金额
export const PaySum = (id, number) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.post('services/shopmall/api/weisen/commodity/get-amount', {
      id,
      number
    })
  });
  return result;
};
// 创建大订单
export const createUserOrder = (userId, price) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.post('services/basic/api/userorder/placeAnOrder', { userId, price })
  });
  return result;
};
// 创建商城小订单
export const createShopOrder = (userId, ids, id, number, bigOrder, consignee, mobile, address) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.post('services/shopmall/api/weisen/order/createMallOrder', {
      userId,
      ids,
      id,
      number,
      bigOrder,
      address,
      consignee,
      mobile
    })
  });
  return result;
};

export const getProdcutImg = (id: string) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.get(`services/shopmall/api/public/findAllBySpecifications/${id}`)
  });
  return result;
};

export const getDefaultAddress: ICrudGetAction<IResult> = (id: string) => {
  const requestUrl = `services/basic/api/get-default-address/${id}`;
  return {
    type: ACTION_TYPES.FETCH_RESULT,
    payload: axios.get<IResult>(requestUrl)
  };
};
