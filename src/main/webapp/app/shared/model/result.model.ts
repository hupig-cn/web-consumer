export interface IResult {
  code?: any;
  message?: any;
  data?: any;
}

export const defaultValue: Readonly<IResult> = {
  code: '',
  message: '',
  data: null
};
