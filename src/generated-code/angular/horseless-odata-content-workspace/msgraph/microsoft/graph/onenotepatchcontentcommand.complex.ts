//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenotePatchInsertPosition } from './onenotepatchinsertposition.enum';
import { OnenotePatchActionType } from './onenotepatchactiontype.enum';
//#endregion

export interface OnenotePatchContentCommand {
  //#region ODataApiGen Properties
  action: OnenotePatchActionType;
  target: string;
  content?: string;
  position?: OnenotePatchInsertPosition;
  //#endregion
}