//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface WindowsInformationProtectionAppLockerFile extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  fileHash?: string;
  file?: ArrayBuffer;
  version?: string;
  //#endregion
}