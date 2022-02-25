//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ManagedDevice } from './manageddevice.entity';
//#endregion

export interface DetectedApp extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  version?: string;
  sizeInByte: number;
  deviceCount: number;
  managedDevices?: ManagedDevice[];
  //#endregion
}