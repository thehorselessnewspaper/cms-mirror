//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EmailAddress } from './emailaddress.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EmailAddressComplexConfig = {
  name: 'emailAddress',
  fields: {
    name: {type: 'Edm.String'},
    address: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<EmailAddress>;
//#endregion