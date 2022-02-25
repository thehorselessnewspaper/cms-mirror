//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { TeamsTabConfiguration } from './teamstabconfiguration.complex';
import { TeamsApp } from './teamsapp.entity';
//#endregion

export interface TeamsTab extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  webUrl?: string;
  configuration?: TeamsTabConfiguration;
  teamsApp?: TeamsApp;
  //#endregion
}