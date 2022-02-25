//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CallRoute } from './callroute.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CallRouteComplexConfig = {
  name: 'callRoute',
  fields: {
    routingType: {type: 'graph.routingType', nullable: false},
    original: {type: 'graph.identitySet', nullable: false},
    final: {type: 'graph.identitySet', nullable: false}
  }
} as StructuredTypeConfig<CallRoute>;
//#endregion