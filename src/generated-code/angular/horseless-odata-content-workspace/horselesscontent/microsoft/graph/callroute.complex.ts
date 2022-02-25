//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RoutingType } from './routingtype.enum';
import { IdentitySet } from './identityset.complex';
//#endregion

export interface CallRoute {
  //#region ODataApiGen Properties
  routingType: RoutingType;
  original: IdentitySet;
  final: IdentitySet;
  //#endregion
}