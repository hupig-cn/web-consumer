import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */
import mystring, { BasicState } from 'app/requests/basic/basic.reducer';
import merchant, { MerchantState } from 'app/requests/merchant/merchant.reducer';
import business, { BusinessState } from 'app/requests/merchant/business.reducer';
import files, { FilesState } from 'app/requests/basic/files.reducer';
import provinces, { ProvincesState } from 'app/requests/basic/provinces.reducer';
import citys, { CitysState } from 'app/requests/basic/citys.reducer';
import countys, { CountysState } from 'app/requests/basic/countys.reducer';
import result, { ResultState } from 'app/requests/basic/result.reducer';
import linkuser, { LinkuserState } from 'app/requests/basic/linkuser.reducer';
import userassets, { UserassetsState } from 'app/requests/basic/userassets.reducer';

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly mystring: BasicState;
  readonly merchant: MerchantState;
  readonly business: BusinessState;
  readonly files: FilesState;
  readonly provinces: ProvincesState;
  readonly citys: CitysState;
  readonly countys: CountysState;
  readonly result: ResultState;
  readonly linkuser: LinkuserState;
  readonly userassets: UserassetsState;
  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  locale,
  applicationProfile,
  administration,
  mystring,
  merchant,
  business,
  files,
  provinces,
  citys,
  countys,
  result,
  linkuser,
  userassets,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar
});

export default rootReducer;
