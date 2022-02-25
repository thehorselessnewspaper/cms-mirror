//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UsageDetails } from './usagedetails.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UsageDetailsComplexConfig = {
  name: 'usageDetails',
  fields: {
    lastAccessedDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<UsageDetails>;
//#endregion