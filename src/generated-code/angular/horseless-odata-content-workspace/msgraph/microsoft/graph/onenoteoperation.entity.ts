//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Operation } from './operation.entity';
import { OnenoteOperationError } from './onenoteoperationerror.complex';
//#endregion

export interface OnenoteOperation extends Operation {
  //#region ODataApiGen Properties
  resourceLocation?: string;
  resourceId?: string;
  error?: OnenoteOperationError;
  percentComplete?: string;
  //#endregion
}