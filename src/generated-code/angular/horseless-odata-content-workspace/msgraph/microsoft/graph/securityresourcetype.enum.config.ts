//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SecurityResourceType } from './securityresourcetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const SecurityResourceTypeConfig = {
  name: 'securityResourceType',
  members: SecurityResourceType,
  fields: {
    unknown: {value: 0},
    attacked: {value: 1},
    related: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<SecurityResourceType>;
//#endregion