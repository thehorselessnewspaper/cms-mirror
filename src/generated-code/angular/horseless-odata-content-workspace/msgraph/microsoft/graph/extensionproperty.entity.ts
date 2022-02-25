//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface ExtensionProperty extends DirectoryObject {
  //#region ODataApiGen Properties
  appDisplayName?: string;
  name: string;
  dataType: string;
  isSyncedFromOnPremises?: boolean;
  targetObjects: string[];
  //#endregion
}