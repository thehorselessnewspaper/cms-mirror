//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ShiftPreferences } from './shiftpreferences.entity';
//#endregion

export interface UserSettings extends Entity {
  //#region ODataApiGen Properties
  contributionToContentDiscoveryDisabled: boolean;
  contributionToContentDiscoveryAsOrganizationDisabled: boolean;
  shiftPreferences?: ShiftPreferences;
  //#endregion
}