//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentitySet } from './identityset.complex';
//#endregion

export interface PlannerAssignment {
  //#region ODataApiGen Properties
  assignedBy?: IdentitySet;
  assignedDateTime?: Date;
  orderHint?: string;
  //#endregion
}