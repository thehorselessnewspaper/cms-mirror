//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { TeamsApp } from './teamsapp.entity';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
//#endregion

export interface TeamsAppInstallation extends Entity {
  //#region ODataApiGen Properties
  teamsApp?: TeamsApp;
  teamsAppDefinition?: TeamsAppDefinition;
  //#endregion
}