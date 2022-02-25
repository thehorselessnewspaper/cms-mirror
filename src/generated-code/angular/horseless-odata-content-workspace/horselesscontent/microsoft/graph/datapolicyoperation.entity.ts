//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DataPolicyOperationStatus } from './datapolicyoperationstatus.enum';
//#endregion

export interface DataPolicyOperation extends Entity {
  //#region ODataApiGen Properties
  completedDateTime?: Date;
  status?: DataPolicyOperationStatus;
  storageLocation?: string;
  userId: string;
  submittedDateTime: Date;
  progress: number;
  //#endregion
}