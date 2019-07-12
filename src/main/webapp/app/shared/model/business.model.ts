export interface IBusiness {
  id?: number;
  name?: string;
  state?: string;
  creator?: string;
  createdate?: string;
  modifier?: string;
  modifierdate?: string;
  modifiernum?: number;
  logicdelete?: boolean;
  other?: string;
}

export const defaultValue: Readonly<IBusiness> = {
  logicdelete: false
};
