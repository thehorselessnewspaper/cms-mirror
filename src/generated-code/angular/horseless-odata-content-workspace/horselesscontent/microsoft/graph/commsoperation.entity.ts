//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { OperationStatus } from './operationstatus.enum';
import { ResultInfo } from './resultinfo.complex';
//#endregion

export interface CommsOperation extends Entity {
  //#region ODataApiGen Properties
  status: OperationStatus;
  clientContext?: string;
  resultInfo?: ResultInfo;
  //#endregion
}