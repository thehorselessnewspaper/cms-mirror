//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { TeamsApp } from './teamsapp.entity';
//#endregion

export interface AppCatalogs extends Entity {
  //#region ODataApiGen Properties
  teamsApps?: TeamsApp[];
  //#endregion
}