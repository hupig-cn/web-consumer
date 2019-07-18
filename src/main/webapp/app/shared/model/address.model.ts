export interface IAddress {
  id?: number;
  userid?: string;
  consignee?: string;
  mobile?: string;
  areaid?: string;
  address?: string;
  isdefault?: string;
  createtime?: number;
  updatetime?: boolean;
}

export const defaultValue: Readonly<IAddress> = {};
