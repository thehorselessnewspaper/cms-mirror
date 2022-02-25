//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkforceIntegration } from './workforceintegration.entity';
//#endregion

export interface Teamwork extends Entity {
  //#region ODataApiGen Properties
  workforceIntegrations?: WorkforceIntegration[];
  //#endregion
}