//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { KeyValuePair } from './keyvaluepair.complex';
//#endregion

export interface ManagedAppConfiguration extends ManagedAppPolicy {
  //#region ODataApiGen Properties
  customSettings: KeyValuePair[];
  //#endregion
}