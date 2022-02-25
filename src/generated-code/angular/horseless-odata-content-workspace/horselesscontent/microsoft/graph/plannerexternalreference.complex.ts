//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentitySet } from './identityset.complex';
//#endregion

export interface PlannerExternalReference {
  //#region ODataApiGen Properties
  alias?: string;
  type?: string;
  previewPriority?: string;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  //#endregion
}