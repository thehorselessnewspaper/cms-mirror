//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface TeamsAppDefinition extends Entity {
  //#region ODataApiGen Properties
  teamsAppId?: string;
  displayName?: string;
  version?: string;
  //#endregion
}