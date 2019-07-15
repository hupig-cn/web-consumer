export interface ICitys {
  id?: number;
  name?: string;
  pid?: string;
  pname?: string;
  gid?: string;
  gname?: string;
  status?: number;
}

export const defaultValue: Readonly<ICitys> = {};
