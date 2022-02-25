//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RoutingType } from './routingtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RoutingTypeConfig = {
  name: 'routingType',
  members: RoutingType,
  fields: {
    forwarded: {value: 0},
    lookup: {value: 1},
    selfFork: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<RoutingType>;
//#endregion