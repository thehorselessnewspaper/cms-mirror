//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GroupType } from './grouptype.enum';
import { ModifiedProperty } from './modifiedproperty.complex';
//#endregion

export interface TargetResource {
  //#region ODataApiGen Properties
  id?: string;
  displayName?: string;
  type?: string;
  userPrincipalName?: string;
  groupType?: GroupType;
  modifiedProperties?: ModifiedProperty[];
  //#endregion
}