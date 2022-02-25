//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LocationUniqueIdType } from './locationuniqueidtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const LocationUniqueIdTypeConfig = {
  name: 'locationUniqueIdType',
  members: LocationUniqueIdType,
  fields: {
    unknown: {value: 0},
    locationStore: {value: 1},
    directory: {value: 2},
    private: {value: 3},
    bing: {value: 4}
  }
} as EnumTypeConfig<LocationUniqueIdType>;
//#endregion