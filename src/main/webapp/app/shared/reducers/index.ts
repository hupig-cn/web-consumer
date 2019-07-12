import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */
import mystring, { BasicState } from 'app/requests/basic/basic.reducer';
import merchant, {
  MerchantState
} from 'app/requests/merchant/merchant.reducer';
import business,{
  BusinessState
} from 'app/requests/merchant/business.reducer';
import files, {
  FilesState
} from 'app/requests/basic/files.reducer';

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly mystring: BasicState;
  readonly merchant: MerchantState;
  readonly business: BusinessState;
  readonly files: FilesState;
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
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar
});

export default rootReducer;
