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

const apiUrl = 'services/shopmall/api/weisen';
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

// 添加商品到购物车
export const createUserShopping = (goodsId: any, number: any, userId: any) => async dispatch => {
  const result = await dispatch({
    payload: axios.post('services/shopmall/api/weisen/shopping/createUserShopping', { goodsId, number, userId })
  });
  return result;
};

// 单个删除购物车中的商品
export const deleteShopping = (shoppingid: any) => async dispatch => {
  const requestUrl = `${apiUrl}/shopping/deleteShopping/${shoppingid}`;
  const result = await dispatch({
    payload: axios.delete(requestUrl)
  });
  return result;
};

// 批量删除购物车中的商品
export const deleteShoppingList = (shoppingid: any) => async dispatch => {
  const requestUrl = `${apiUrl}/shopping/deleteShoppingList/${shoppingid}`;
  const result = await dispatch({
    payload: axios.delete(requestUrl)
  });
  return result;
};

// 获取购物车列表
export const getAllShoppingByUser = (userid: any) => async dispatch => {
  const requestUrl = `${apiUrl}/shopping/getAllShoppingByUser/${userid}`;
  const result = await dispatch({
    payload: axios.get(requestUrl)
  });
  return result;
};

// 根据大订单号获取订单信息
export const getOrderInfoByOrderId = (orderid: any) => async dispatch => {
  const requestUrl = `${apiUrl}/commodity/get-order-info-byorderId/${orderid}`;
  const result = await dispatch({
    payload: axios.get(requestUrl)
  });
  return result;
};

const basicUrl = 'services/basic/api';
// 获取用户全部订单
export const getAllOrder = (userId: any) => async dispatch => {
  const requestUrl = `${basicUrl}/userorder/getAllOrder/${userId}`;
  const result = await dispatch({
    payload: axios.get(requestUrl)
  });
  return result;
};

// 获取待付款订单
export const getUnpaidOrder = (userId: any) => async dispatch => {
  const requestUrl = `${basicUrl}/userorder/getUnpaidOrder/${userId}`;
  const result = await dispatch({
    payload: axios.get(requestUrl)
  });
  return result;
};

// 获取待发货（已支付）订单
export const getPaidOrder = (userId: any) => async dispatch => {
  const requestUrl = `${basicUrl}/userorder/getPaidOrder/${userId}`;
  const result = await dispatch({
    payload: axios.get(requestUrl)
  });
  return result;
};

// 获取退款订单
export const getRefundOrder = (userId: any) => async dispatch => {
  const requestUrl = `${basicUrl}/userorder/getRefundOrder/${userId}`;
  const result = await dispatch({
    payload: axios.get(requestUrl)
  });
  return result;
};
