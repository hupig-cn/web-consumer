export interface ICountys{
  id?: number;
  name?: string;
  pid?: string;
  pname?: string;
  gid?: string;
  gname?: string;
  status?: number;
}

export const defaultValue: Readonly<ICountys> = {};
