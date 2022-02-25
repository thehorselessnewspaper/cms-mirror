//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { TeamsAppDistributionMethod } from './teamsappdistributionmethod.enum';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
//#endregion

export interface TeamsApp extends Entity {
  //#region ODataApiGen Properties
  externalId?: string;
  displayName?: string;
  distributionMethod?: TeamsAppDistributionMethod;
  appDefinitions?: TeamsAppDefinition[];
  //#endregion
}