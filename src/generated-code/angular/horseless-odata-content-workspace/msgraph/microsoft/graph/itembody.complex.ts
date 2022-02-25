//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BodyType } from './bodytype.enum';
//#endregion

export interface ItemBody {
  //#region ODataApiGen Properties
  contentType?: BodyType;
  content?: string;
  //#endregion
}