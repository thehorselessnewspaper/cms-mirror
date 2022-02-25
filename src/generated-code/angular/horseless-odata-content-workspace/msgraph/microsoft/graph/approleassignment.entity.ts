//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface AppRoleAssignment extends DirectoryObject {
  //#region ODataApiGen Properties
  appRoleId: string;
  createdDateTime?: Date;
  principalDisplayName?: string;
  principalId?: string;
  principalType?: string;
  resourceDisplayName?: string;
  resourceId?: string;
  //#endregion
}