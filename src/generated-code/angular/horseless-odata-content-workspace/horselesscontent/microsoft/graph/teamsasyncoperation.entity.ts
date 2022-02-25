//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { TeamsAsyncOperationType } from './teamsasyncoperationtype.enum';
import { TeamsAsyncOperationStatus } from './teamsasyncoperationstatus.enum';
import { OperationError } from './operationerror.complex';
//#endregion

export interface TeamsAsyncOperation extends Entity {
  //#region ODataApiGen Properties
  operationType: TeamsAsyncOperationType;
  createdDateTime: Date;
  status: TeamsAsyncOperationStatus;
  lastActionDateTime: Date;
  attemptsCount: number;
  targetResourceId?: string;
  targetResourceLocation?: string;
  error?: OperationError;
  //#endregion
}