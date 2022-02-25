//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface OnPremisesConditionalAccessSettings extends Entity {
  //#region ODataApiGen Properties
  enabled: boolean;
  includedGroups: string[];
  excludedGroups: string[];
  overrideDefaultRule: boolean;
  //#endregion
}