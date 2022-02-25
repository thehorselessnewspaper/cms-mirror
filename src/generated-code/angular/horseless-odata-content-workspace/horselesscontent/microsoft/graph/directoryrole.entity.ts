//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface DirectoryRole extends DirectoryObject {
  //#region ODataApiGen Properties
  description?: string;
  displayName?: string;
  roleTemplateId?: string;
  members?: DirectoryObject[];
  //#endregion
}