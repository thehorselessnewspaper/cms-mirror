//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { VerifiedDomain } from './verifieddomain.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const VerifiedDomainComplexConfig = {
  name: 'verifiedDomain',
  fields: {
    capabilities: {type: 'Edm.String'},
    isDefault: {type: 'Edm.Boolean'},
    isInitial: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<VerifiedDomain>;
//#endregion