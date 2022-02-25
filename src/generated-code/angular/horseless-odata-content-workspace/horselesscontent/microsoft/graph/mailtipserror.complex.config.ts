//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MailTipsError } from './mailtipserror.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MailTipsErrorComplexConfig = {
  name: 'mailTipsError',
  fields: {
    message: {type: 'Edm.String'},
    code: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<MailTipsError>;
//#endregion