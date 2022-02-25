//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PrivacyProfile } from './privacyprofile.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PrivacyProfileComplexConfig = {
  name: 'privacyProfile',
  fields: {
    contactEmail: {type: 'Edm.String'},
    statementUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PrivacyProfile>;
//#endregion