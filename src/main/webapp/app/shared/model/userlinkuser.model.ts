export interface IUserlinkuser {
  id?: number;
  userid?: string;
  recommendid?: string;
  partner?: boolean;
  province?: boolean;
  city?: boolean;
  county?: boolean;
  creator?: string;
  createdate?: string;
  modifier?: string;
  modifierdate?: string;
  modifiernum?: number;
  logicdelete?: boolean;
  other?: string;
}

export const defaultValue: Readonly<IUserlinkuser> = {
  partner: false,
  province: false,
  city: false,
  county: false,
  logicdelete: false
};
