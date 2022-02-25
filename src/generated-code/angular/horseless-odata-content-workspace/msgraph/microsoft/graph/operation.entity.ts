//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { OperationStatus } from './operationstatus.enum';
//#endregion

export interface Operation extends Entity {
  //#region ODataApiGen Properties
  status?: OperationStatus;
  createdDateTime?: Date;
  lastActionDateTime?: Date;
  //#endregion
}